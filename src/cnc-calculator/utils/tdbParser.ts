import { CarvecoTool, ToolType } from '../types/tool';
import { SAMPLE_TDB_BASE64 } from '../data/sampleTdbBase64';
import { isMetricDiameterValue, isToolMetric } from './unitConverter';

export interface ParseResult {
  tools: CarvecoTool[];
  groups: string[];
  rawBuffer: ArrayBuffer;
  isBinary: boolean;
  detectedFileUnit: 'metric' | 'imperial' | 'mixed';
  detectedSoftware?: 'carveco' | 'easel' | 'vectric' | 'fusion360' | 'carbide_create' | 'generic';
}

/**
 * Decode base64 to ArrayBuffer in browser / node
 */
export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Smart bit unit detection
 */
export function detectBitUnit(
  rawUnitFlag: number,
  rawDiameter: number,
  rawFeed: number,
  feedUnit: number,
  toolName: string,
  groupName: string = '',
  fileName: string = '',
  forcedUnit?: 'metric' | 'imperial' | 'auto'
): { unit: 'mm' | 'inch'; unitFlag: number } {
  if (forcedUnit === 'metric') return { unit: 'mm', unitFlag: 1 };
  if (forcedUnit === 'imperial') return { unit: 'inch', unitFlag: 0 };

  // Explicit Carveco feedUnit: 1 = mm/sec, 2 = mm/min
  if (feedUnit === 1 || feedUnit === 2) {
    return { unit: 'mm', unitFlag: 1 };
  }

  // Explicit rawUnitFlag in file
  if (rawUnitFlag === 1) {
    return { unit: 'mm', unitFlag: 1 };
  }

  // High feed rate check (300+ mm/min)
  if (rawFeed >= 300) {
    return { unit: 'mm', unitFlag: 1 };
  }

  // File or Group hints
  const lowerFile = fileName.toLowerCase();
  const lowerGroup = groupName.toLowerCase();
  const lowerName = toolName.toLowerCase();
  if (lowerFile.includes('metric') || lowerGroup.includes('metric') || lowerName.includes('mm')) {
    return { unit: 'mm', unitFlag: 1 };
  }

  // If diameter matches typical metric values (> 2.0 mm)
  if (isMetricDiameterValue(rawDiameter)) {
    return { unit: 'mm', unitFlag: 1 };
  }

  return { unit: 'inch', unitFlag: 0 };
}

/**
 * Helper to read MFC Unicode, MFC ANSI, or length-prefixed string from binary buffer.
 */
function readMfcOrAnsiString(
  uint8: Uint8Array,
  view: DataView,
  offset: number
): { str: string; nextOffset: number; isUnicode: boolean } | null {
  const len = uint8.length;
  if (offset >= len) return null;

  // 1. MFC Unicode: ff fe ff <len_byte> (or if 0xff, uint16)
  if (
    offset + 4 <= len &&
    uint8[offset] === 0xff &&
    uint8[offset + 1] === 0xfe &&
    uint8[offset + 2] === 0xff
  ) {
    let p = offset + 3;
    let strLen = uint8[p];
    p++;
    if (strLen === 0xff && p + 2 <= len) {
      strLen = view.getUint16(p, true);
      p += 2;
    }
    const byteLen = strLen * 2;
    if (strLen > 0 && strLen < 400 && p + byteLen <= len) {
      let str = '';
      for (let i = 0; i < strLen; i++) {
        const code = view.getUint16(p + i * 2, true);
        if (code >= 32 && code < 65535) str += String.fromCharCode(code);
        else if (code === 10 || code === 13 || code === 9) str += String.fromCharCode(code);
      }
      return { str, nextOffset: p + byteLen, isUnicode: true };
    }
  }

  // 2. MFC ANSI: ff ff <len_byte> (or if 0xff, uint16)
  if (offset + 3 <= len && uint8[offset] === 0xff && uint8[offset + 1] === 0xff) {
    let p = offset + 2;
    let strLen = uint8[p];
    p++;
    if (strLen === 0xff && p + 2 <= len) {
      strLen = view.getUint16(p, true);
      p += 2;
    }
    if (strLen > 0 && strLen < 400 && p + strLen <= len) {
      let str = '';
      for (let i = 0; i < strLen; i++) {
        const b = uint8[p + i];
        if (b >= 32 && b <= 126) str += String.fromCharCode(b);
        else if (b === 10 || b === 13 || b === 9) str += String.fromCharCode(b);
      }
      return { str, nextOffset: p + strLen, isUnicode: false };
    }
  }

  // 3. Plain length-prefixed string
  const plainLen = uint8[offset];
  if (plainLen > 2 && plainLen < 120 && offset + 1 + plainLen <= len) {
    let isAscii = true;
    let str = '';
    for (let i = 0; i < plainLen; i++) {
      const b = uint8[offset + 1 + i];
      if (b >= 32 && b <= 126) str += String.fromCharCode(b);
      else {
        isAscii = false;
        break;
      }
    }
    if (isAscii && str.trim().length > 2) {
      return { str, nextOffset: offset + 1 + plainLen, isUnicode: false };
    }
  }

  // 4. Empty string marker
  if (uint8[offset] === 0) {
    return { str: '', nextOffset: offset + 1, isUnicode: false };
  }

  return null;
}

/**
 * Group derivation helper when binary group metadata contains notes or default placeholder
 */
function deriveToolGroup(toolName: string, candidateGroup: string): string {
  const cleanedGroup = candidateGroup.trim();
  const invalidGroups = ['no notes', 'default', 'notes', '', '\0'];
  if (
    cleanedGroup &&
    !invalidGroups.includes(cleanedGroup.toLowerCase()) &&
    !cleanedGroup.toLowerCase().includes('recommended starting') &&
    !cleanedGroup.toLowerCase().includes('feeds and speeds')
  ) {
    return cleanedGroup;
  }

  const lower = toolName.toLowerCase();
  if (lower.includes('ball nose') || lower.includes('ballnose')) return 'Ball Nose Spirals';
  if (lower.includes('compression')) return 'Compression Spirals';
  if (lower.includes('downcut') || lower.includes('down spiral') || lower.includes('down cut')) return 'Downcut Spirals';
  if (lower.includes('upcut') || lower.includes('up spiral') || lower.includes('up cut')) return 'Upcut Spirals';
  if (lower.includes('o-flute') || lower.includes('single flute')) return 'O-Flute (Plastics & Aluminum)';
  if (lower.includes('v-bit') || lower.includes('vbit') || lower.includes(' deg') || lower.includes('degree')) return 'V-Bits & Engraving';
  if (lower.includes('surfac') || lower.includes('fly cutter') || lower.includes('spoilboard') || lower.includes('flatten')) return 'Surfacing & Spoilboard';
  if (lower.includes('liner') || lower.includes('veining')) return 'Detail & Liner Bits';
  if (lower.includes('conical') || lower.includes('taper')) return 'Tapered Carving Bits';
  if (lower.includes('cove') || lower.includes('radiused')) return 'Radiused & Cove Bits';
  if (lower.includes('drill')) return 'Drill Bits';

  return 'General CNC Bits';
}

/**
 * Parses Carveco / ArtCAM binary .TDB or .TBD file.
 */
export function parseBinaryTdb(
  buffer: ArrayBuffer,
  fileName: string = '',
  forcedUnit?: 'metric' | 'imperial' | 'auto'
): ParseResult {
  const view = new DataView(buffer);
  const uint8 = new Uint8Array(buffer);
  const tools: CarvecoTool[] = [];
  const groupsSet = new Set<string>();

  let offset = 0;
  const len = buffer.byteLength;
  let currentGroup = 'Whiteside Tool Database';

  // Primary Pass: Token & MFC Archive scanning
  while (offset < len - 20) {
    // Check for group start markers
    const slice16 = new TextDecoder('ascii', { fatal: false }).decode(uint8.slice(offset, offset + 16));
    if (slice16.startsWith('tpmDB_GroupStart')) {
      const p = offset + 16;
      for (let t = p; t < p + 16; t++) {
        const gRes = readMfcOrAnsiString(uint8, view, t);
        if (gRes && gRes.str.trim().length > 1 && !gRes.str.includes('Tool')) {
          const gName = gRes.str.trim();
          if (!gName.toLowerCase().includes('notes') && !gName.toLowerCase().includes('recommended')) {
            currentGroup = gName;
            groupsSet.add(currentGroup);
            offset = gRes.nextOffset;
            break;
          }
        }
      }
    }

    // Check for string that could be a tool name or group title
    const strRes = readMfcOrAnsiString(uint8, view, offset);
    if (strRes && strRes.str.trim().length > 2) {
      const candidateName = strRes.str.trim();
      const afterName = strRes.nextOffset;

      // In Carveco .tdb, tool records store:
      // afterName: toolNo (int32 = 4 bytes), diameter (float64 = 8 bytes), param2 (float64 = 8 bytes)
      if (afterName + 20 <= len) {
        const toolNo = view.getInt32(afterName, true);
        const diameter = view.getFloat64(afterName + 4, true);
        const param2 = view.getFloat64(afterName + 12, true);

        // Check if diameter is plausible (0.005 to 250 mm or inches)
        if (!isNaN(diameter) && diameter >= 0.005 && diameter <= 250 && !isNaN(param2) && param2 >= 0 && param2 <= 500) {
          // Read notes CString
          let notesCursor = afterName + 20;
          let notes = '';
          const notesRes = readMfcOrAnsiString(uint8, view, notesCursor);
          if (notesRes) {
            notes = notesRes.str;
            notesCursor = notesRes.nextOffset;
          }

          // Next 4 doubles: stepdown, spindleSpeed, feedRate, plungeRate followed by unit integers
          if (notesCursor + 44 <= len) {
            const stepdown = view.getFloat64(notesCursor, true);
            const spindleSpeed = view.getFloat64(notesCursor + 8, true);
            const feedRate = view.getFloat64(notesCursor + 16, true);
            const plungeRate = view.getFloat64(notesCursor + 24, true);
            const feedUnit = view.getInt32(notesCursor + 32, true);
            const plungeUnit = view.getInt32(notesCursor + 36, true);
            const unitFlag = view.getInt32(notesCursor + 40, true);

            // Verify if spindleSpeed and feedRate are plausible
            if (!isNaN(spindleSpeed) && spindleSpeed >= 500 && spindleSpeed <= 150000 && feedRate > 0 && feedRate <= 300000) {
              const assignedGroup = deriveToolGroup(candidateName, currentGroup);
              groupsSet.add(assignedGroup);

              const detected = detectBitUnit(
                unitFlag,
                diameter,
                feedRate,
                feedUnit,
                candidateName,
                assignedGroup,
                fileName,
                forcedUnit
              );

              tools.push({
                id: `tool-${tools.length + 1}`,
                name: candidateName,
                group: assignedGroup,
                notes,
                toolNo: toolNo || tools.length + 1,
                unitFlag: detected.unitFlag,
                unit: detected.unit,
                diameter,
                param2,
                stepdown,
                spindleSpeed: Math.round(spindleSpeed),
                feedRate,
                plungeRate,
                feedUnit: feedUnit || (detected.unit === 'mm' ? 2 : 4),
                plungeUnit: plungeUnit || (detected.unit === 'mm' ? 2 : 3),
                toolType: detectToolType(candidateName),
                fluteCount: detectFluteCount(candidateName),
                paramsOffset: notesCursor,
                nameOffset: offset,
                originalValues: {
                  diameter,
                  param2,
                  stepdown,
                  spindleSpeed: Math.round(spindleSpeed),
                  feedRate,
                  plungeRate,
                  name: candidateName,
                  notes,
                },
              });

              offset = notesCursor + 44;
              continue;
            }
          }
        }
      }

      // Check if it was a group title
      if (
        !candidateName.toLowerCase().includes('recommended') &&
        !candidateName.toLowerCase().includes('caution') &&
        !candidateName.toLowerCase().includes('feeds and') &&
        !candidateName.toLowerCase().includes('notes') &&
        candidateName.length < 50
      ) {
        currentGroup = candidateName;
        groupsSet.add(currentGroup);
      }
      offset = strRes.nextOffset;
      continue;
    }
    offset++;
  }

  // Fallback Pass: If primary scanner yielded 0 tools (e.g. non-standard alignment or ArtCAM variant)
  if (tools.length === 0) {
    let scanPos = 0;
    while (scanPos < len - 60) {
      // Look for standard spindle RPMs (10,000 to 30,000) stored as float64
      const testRpm = view.getFloat64(scanPos + 8, true);
      if (!isNaN(testRpm) && testRpm >= 5000 && testRpm <= 60000 && (testRpm % 500 === 0 || testRpm % 1000 === 0)) {
        const testStepdown = view.getFloat64(scanPos, true);
        const testFeed = view.getFloat64(scanPos + 16, true);
        const testPlunge = view.getFloat64(scanPos + 24, true);

        if (!isNaN(testStepdown) && testStepdown > 0 && testStepdown < 100 && !isNaN(testFeed) && testFeed > 0 && testFeed < 50000) {
          // Look backwards for tool name
          let foundName = `CNC Tool ${tools.length + 1}`;
          let nameOffset = 0;
          let testBack = Math.max(0, scanPos - 350);
          while (testBack < scanPos - 20) {
            const backStr = readMfcOrAnsiString(uint8, view, testBack);
            if (backStr && backStr.str.trim().length > 3) {
              const s = backStr.str.trim();
              if (!s.toLowerCase().includes('recommended') && !s.toLowerCase().includes('caution') && !s.toLowerCase().includes('feeds and')) {
                foundName = s;
                nameOffset = testBack;
              }
            }
            testBack += 2;
          }

          const defaultDia = testStepdown * 2;
          const assignedGroup = deriveToolGroup(foundName, currentGroup);
          groupsSet.add(assignedGroup);

          const detected = detectBitUnit(
            0,
            defaultDia,
            testFeed,
            testFeed > 300 ? 2 : 4,
            foundName,
            assignedGroup,
            fileName,
            forcedUnit
          );

          tools.push({
            id: `tool-${tools.length + 1}`,
            name: foundName,
            group: assignedGroup,
            notes: '',
            toolNo: tools.length + 1,
            unitFlag: detected.unitFlag,
            unit: detected.unit,
            diameter: defaultDia,
            param2: defaultDia,
            stepdown: testStepdown,
            spindleSpeed: Math.round(testRpm),
            feedRate: testFeed,
            plungeRate: testPlunge,
            feedUnit: detected.unit === 'mm' ? 2 : 4,
            plungeUnit: detected.unit === 'mm' ? 2 : 3,
            toolType: detectToolType(foundName),
            fluteCount: detectFluteCount(foundName),
            paramsOffset: scanPos,
            nameOffset: nameOffset || undefined,
            originalValues: {
              diameter: defaultDia,
              param2: defaultDia,
              stepdown: testStepdown,
              spindleSpeed: Math.round(testRpm),
              feedRate: testFeed,
              plungeRate: testPlunge,
              name: foundName,
              notes: '',
            },
          });

          scanPos += 44;
          continue;
        }
      }
      scanPos += 2;
    }
  }

  const metricCount = tools.filter(t => t.unitFlag === 1 || t.unit === 'mm').length;
  let detectedFileUnit: 'metric' | 'imperial' | 'mixed' = 'metric';
  if (metricCount === tools.length && tools.length > 0) {
    detectedFileUnit = 'metric';
  } else if (metricCount === 0 && tools.length > 0) {
    detectedFileUnit = 'imperial';
  } else {
    detectedFileUnit = metricCount > tools.length / 2 ? 'metric' : 'imperial';
  }

  return {
    tools,
    groups: Array.from(groupsSet),
    rawBuffer: buffer,
    isBinary: true,
    detectedFileUnit,
    detectedSoftware: 'carveco',
  };
}

/**
 * Detect tool type from name
 */
export function detectToolType(name: string): ToolType {
  const lower = name.toLowerCase();
  if (lower.includes('ball nose') || lower.includes('ballnose')) return 'ballnose';
  if (lower.includes('v-bit') || lower.includes('vbit') || lower.includes('v-groove') || lower.includes(' deg') || lower.includes('degree')) return 'vbit';
  if (lower.includes('surfac') || lower.includes('fly cutter') || lower.includes('spoilboard') || lower.includes('flatten')) return 'surfacing';
  if (lower.includes('roundover')) return 'roundover';
  if (lower.includes('engrav') || lower.includes('liner') || lower.includes('veining')) return 'engraving';
  if (lower.includes('drill')) return 'drill';
  if (lower.includes('conical') || lower.includes('taper')) return 'conical';
  if (lower.includes('radiused') || lower.includes('bull nose') || lower.includes('cove nose')) return 'radiused';
  return 'endmill';
}

/**
 * Detect flute count from name
 */
export function detectFluteCount(name: string): number {
  const lower = name.toLowerCase();
  if (lower.includes('4-wing') || lower.includes('4 flute') || lower.includes('four flute')) return 4;
  if (lower.includes('3-wing') || lower.includes('triple flute') || lower.includes('3 flute')) return 3;
  if (lower.includes('o-flute') || lower.includes('single flute') || lower.includes('1 flute')) return 1;
  return 2; // Default CNC router bit is 2 flutes
}

/**
 * Writes updated tools into a Carveco binary buffer.
 */
export function writeBinaryTdb(tools: CarvecoTool[], originalBuffer: ArrayBuffer | null): ArrayBuffer {
  let targetBuffer: ArrayBuffer;

  if (originalBuffer && originalBuffer.byteLength > 100) {
    targetBuffer = originalBuffer.slice(0);
  } else {
    targetBuffer = base64ToArrayBuffer(SAMPLE_TDB_BASE64);
  }

  const view = new DataView(targetBuffer);

  for (const tool of tools) {
    if (tool.paramsOffset !== undefined && tool.paramsOffset + 40 <= targetBuffer.byteLength) {
      view.setFloat64(tool.paramsOffset, tool.stepdown, true);
      view.setFloat64(tool.paramsOffset + 8, tool.spindleSpeed, true);
      view.setFloat64(tool.paramsOffset + 16, tool.feedRate, true);
      view.setFloat64(tool.paramsOffset + 24, tool.plungeRate, true);

      if (tool.nameOffset !== undefined) {
        let strLen = new Uint8Array(targetBuffer)[tool.nameOffset + 3];
        let nameNextPos = tool.nameOffset + 4 + strLen * 2;
        if (strLen === 0xff) {
          strLen = view.getUint16(tool.nameOffset + 4, true);
          nameNextPos = tool.nameOffset + 6 + strLen * 2;
        }
        if (nameNextPos + 20 <= targetBuffer.byteLength) {
          view.setInt32(nameNextPos, tool.unitFlag, true);
          view.setFloat64(nameNextPos + 4, tool.diameter, true);
          view.setFloat64(nameNextPos + 12, tool.param2, true);
        }
      }
    }
  }

  return targetBuffer;
}

/**
 * Split CSV line respecting quotation marks
 */
function splitCsvLine(line: string, separator: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === separator && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function escapeCsv(val: string | number): string {
  const str = String(val);
  if (str.includes(',') || str.includes(';') || str.includes('\t') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Auto-detect delimiter from text sample
 */
function detectDelimiter(sample: string): string {
  const candidates = [',', ';', '\t', '|'];
  const counts: Record<string, number> = { ',': 0, ';': 0, '\t': 0, '|': 0 };

  const lines = sample.split(/\r?\n/).slice(0, 5);
  for (const line of lines) {
    for (const d of candidates) {
      counts[d] += (line.split(d).length - 1);
    }
  }

  let best = ',';
  let max = -1;
  for (const d of candidates) {
    if (counts[d] > max) {
      max = counts[d];
      best = d;
    }
  }
  return max > 0 ? best : ',';
}

/**
 * Parses plain text / CSV / TSV / JSON tool files from Carveco, Easel, Vectric, Fusion 360, Carbide Create
 */
export function parseTextTools(
  text: string,
  fileName: string = '',
  forcedUnit?: 'metric' | 'imperial' | 'auto'
): ParseResult {
  const trimmed = text.trim();

  // 1. Check if JSON format (Easel, Fusion 360, or native JSON)
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    try {
      const parsed = JSON.parse(trimmed);
      return parseJsonTools(parsed, fileName, forcedUnit);
    } catch {
      // Fall through to text/csv parser
    }
  }

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const tools: CarvecoTool[] = [];
  const groupsSet = new Set<string>();

  if (lines.length === 0) {
    return {
      tools: [],
      groups: [],
      rawBuffer: new ArrayBuffer(0),
      isBinary: false,
      detectedFileUnit: 'metric',
      detectedSoftware: 'generic',
    };
  }

  const separator = detectDelimiter(lines.slice(0, 5).join('\n'));
  const headerParts = splitCsvLine(lines[0], separator).map(h => h.trim().toLowerCase());

  // Determine column index map dynamically
  const colMap = {
    name: -1,
    group: -1,
    toolNo: -1,
    diameter: -1,
    stepdown: -1,
    spindleSpeed: -1,
    feedRate: -1,
    plungeRate: -1,
    type: -1,
    flutes: -1,
    units: -1,
    notes: -1,
  };

  let hasHeaders = false;
  headerParts.forEach((h, idx) => {
    if (h.includes('name') || h === 'tool' || h.includes('description') || h === 'label') colMap.name = idx;
    else if (h.includes('group') || h.includes('category') || h.includes('vendor')) colMap.group = idx;
    else if (h.includes('number') || h.includes('tool no') || h === 'no' || h === 'id') colMap.toolNo = idx;
    else if (h.includes('diam') || h === 'dia' || h === 'd' || h.includes('size')) colMap.diameter = idx;
    else if (h.includes('pass depth') || h.includes('depth of cut') || h.includes('stepdown') || h.includes('doc') || h.includes('depth per pass')) colMap.stepdown = idx;
    else if (h.includes('rpm') || h.includes('speed') || h.includes('spindle')) colMap.spindleSpeed = idx;
    else if (h.includes('feed') || h.includes('feedrate') || h.includes('feed rate')) colMap.feedRate = idx;
    else if (h.includes('plunge') || h.includes('plungerate')) colMap.plungeRate = idx;
    else if (h.includes('type') || h.includes('shape') || h.includes('geometry')) colMap.type = idx;
    else if (h.includes('flute') || h.includes('teeth')) colMap.flutes = idx;
    else if (h.includes('unit')) colMap.units = idx;
    else if (h.includes('note') || h.includes('comment')) colMap.notes = idx;
  });

  if (colMap.name !== -1 || colMap.diameter !== -1 || colMap.spindleSpeed !== -1 || colMap.feedRate !== -1) {
    hasHeaders = true;
  }

  const startIndex = hasHeaders ? 1 : 0;

  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i];
    const parts = splitCsvLine(line, separator).map(p => p.trim().replace(/^"|"$/g, ''));
    if (parts.length < 2) continue;

    let name = colMap.name !== -1 ? parts[colMap.name] : parts[0] || `Tool ${i + 1}`;
    let group = colMap.group !== -1 ? parts[colMap.group] : 'General';
    let toolNo = colMap.toolNo !== -1 ? parseInt(parts[colMap.toolNo], 10) || (i + 1) : (i + 1);
    let diameter = colMap.diameter !== -1 ? parseFloat(parts[colMap.diameter]) || 0.25 : parseFloat(parts[1]) || 0.25;
    let stepdown = colMap.stepdown !== -1 ? parseFloat(parts[colMap.stepdown]) || diameter * 0.5 : diameter * 0.5;
    let spindleSpeed = colMap.spindleSpeed !== -1 ? Math.round(parseFloat(parts[colMap.spindleSpeed]) || 18000) : 18000;
    let feedRate = colMap.feedRate !== -1 ? parseFloat(parts[colMap.feedRate]) || 1200 : 1200;
    let plungeRate = colMap.plungeRate !== -1 ? parseFloat(parts[colMap.plungeRate]) || feedRate * 0.3 : feedRate * 0.3;
    let flutes = colMap.flutes !== -1 ? parseInt(parts[colMap.flutes], 10) || 2 : detectFluteCount(name);
    let notes = colMap.notes !== -1 ? parts[colMap.notes] || '' : '';
    let unitHint = colMap.units !== -1 ? parts[colMap.units]?.toLowerCase() : '';

    if (unitHint.includes('mm')) {
      forcedUnit = forcedUnit || 'metric';
    } else if (unitHint.includes('inch') || unitHint.includes('in')) {
      forcedUnit = forcedUnit || 'imperial';
    }

    const assignedGroup = deriveToolGroup(name, group);
    groupsSet.add(assignedGroup);

    const detected = detectBitUnit(
      0,
      diameter,
      feedRate,
      feedRate >= 300 ? 2 : 4,
      name,
      assignedGroup,
      fileName,
      forcedUnit
    );

    tools.push({
      id: `tool-${tools.length + 1}`,
      name,
      group: assignedGroup,
      notes,
      toolNo,
      unitFlag: detected.unitFlag,
      unit: detected.unit,
      diameter,
      param2: diameter,
      stepdown,
      spindleSpeed,
      feedRate,
      plungeRate,
      feedUnit: detected.unit === 'mm' ? 2 : 4,
      plungeUnit: detected.unit === 'mm' ? 2 : 3,
      toolType: detectToolType(name),
      fluteCount: flutes,
      originalValues: {
        diameter,
        param2: diameter,
        stepdown,
        spindleSpeed,
        feedRate,
        plungeRate,
        name,
        notes,
      },
    });
  }

  const metricCount = tools.filter(t => t.unitFlag === 1 || t.unit === 'mm').length;
  let detectedFileUnit: 'metric' | 'imperial' | 'mixed' = 'metric';
  if (metricCount === tools.length && tools.length > 0) {
    detectedFileUnit = 'metric';
  } else if (metricCount === 0 && tools.length > 0) {
    detectedFileUnit = 'imperial';
  } else {
    detectedFileUnit = metricCount > tools.length / 2 ? 'metric' : 'imperial';
  }

  return {
    tools,
    groups: Array.from(groupsSet),
    rawBuffer: new ArrayBuffer(0),
    isBinary: false,
    detectedFileUnit,
    detectedSoftware: 'generic',
  };
}

/**
 * Parses JSON formats: Fusion 360 .tools, Inventables Easel, or native Carveco tools JSON
 */
export function parseJsonTools(
  json: any,
  fileName: string = '',
  forcedUnit?: 'metric' | 'imperial' | 'auto'
): ParseResult {
  const tools: CarvecoTool[] = [];
  const groupsSet = new Set<string>();
  let detectedSoftware: 'fusion360' | 'easel' | 'carveco' | 'generic' = 'generic';

  // 1. Fusion 360 CAM Tool Library format: { version: 1, data: [ ... ] }
  if (json && Array.isArray(json.data) && json.data.length > 0 && json.data[0].geometry) {
    detectedSoftware = 'fusion360';
    for (const item of json.data) {
      const geom = item.geometry || {};
      const cut = item['cutting-data']?.presets?.[0] || {};
      const name = item.description || `Tool ${tools.length + 1}`;
      const group = item.vendor || 'Fusion 360 Tools';
      groupsSet.add(group);

      const diameter = geom.DC || 6.0;
      const stepdown = cut.stepdown || diameter * 0.5;
      const spindleSpeed = cut.n || 18000;
      const feedRate = cut.v_f || 1200;
      const plungeRate = cut.v_f_plunge || 350;

      const detected = detectBitUnit(
        1,
        diameter,
        feedRate,
        2,
        name,
        group,
        fileName,
        forcedUnit
      );

      tools.push({
        id: `tool-${tools.length + 1}`,
        name,
        group,
        notes: item['post-process']?.comment || '',
        toolNo: item['post-process']?.number || tools.length + 1,
        unitFlag: detected.unitFlag,
        unit: detected.unit,
        diameter,
        param2: diameter,
        stepdown,
        spindleSpeed,
        feedRate,
        plungeRate,
        feedUnit: 2,
        plungeUnit: 2,
        toolType: detectToolType(name),
        fluteCount: geom.NOF || 2,
        originalValues: {
          diameter,
          param2: diameter,
          stepdown,
          spindleSpeed,
          feedRate,
          plungeRate,
          name,
          notes: item['post-process']?.comment || '',
        },
      });
    }
  } else if (Array.isArray(json)) {
    // 2. Native array format (Easel or Laserhuis JSON export)
    for (let i = 0; i < json.length; i++) {
      const item = json[i];
      const name = item.name || item.description || `Tool ${i + 1}`;
      const group = item.group || item.vendor || 'Custom Tools';
      groupsSet.add(group);

      const diameter = item.diameter || item.cutting_diameter || 3.175;
      const stepdown = item.stepdown || item.depth_per_pass || diameter * 0.5;
      const spindleSpeed = item.spindleSpeed || item.rpm || 18000;
      const feedRate = item.feedRate || item.feed_rate || 1000;
      const plungeRate = item.plungeRate || item.plunge_rate || 300;

      const detected = detectBitUnit(
        item.unitFlag !== undefined ? item.unitFlag : (item.unit === 'inch' ? 0 : 1),
        diameter,
        feedRate,
        item.feedUnit || 2,
        name,
        group,
        fileName,
        forcedUnit
      );

      tools.push({
        id: item.id || `tool-${tools.length + 1}`,
        name,
        group,
        notes: item.notes || '',
        toolNo: item.toolNo || i + 1,
        unitFlag: detected.unitFlag,
        unit: detected.unit,
        diameter,
        param2: item.param2 || diameter,
        stepdown,
        spindleSpeed,
        feedRate,
        plungeRate,
        feedUnit: item.feedUnit || (detected.unit === 'mm' ? 2 : 4),
        plungeUnit: item.plungeUnit || (detected.unit === 'mm' ? 2 : 3),
        toolType: item.toolType || detectToolType(name),
        fluteCount: item.fluteCount || item.flutes || 2,
        originalValues: {
          diameter,
          param2: item.param2 || diameter,
          stepdown,
          spindleSpeed,
          feedRate,
          plungeRate,
          name,
          notes: item.notes || '',
        },
      });
    }
  }

  const metricCount = tools.filter(t => t.unitFlag === 1 || t.unit === 'mm').length;
  let detectedFileUnit: 'metric' | 'imperial' | 'mixed' = 'metric';
  if (metricCount === tools.length && tools.length > 0) {
    detectedFileUnit = 'metric';
  } else if (metricCount === 0 && tools.length > 0) {
    detectedFileUnit = 'imperial';
  } else {
    detectedFileUnit = metricCount > tools.length / 2 ? 'metric' : 'imperial';
  }

  return {
    tools,
    groups: Array.from(groupsSet),
    rawBuffer: new ArrayBuffer(0),
    isBinary: false,
    detectedFileUnit,
    detectedSoftware,
  };
}

/**
 * Standard CSV Export
 */
export function exportToCsv(tools: CarvecoTool[]): string {
  const headers = [
    'Tool Name',
    'Group',
    'Tool Number',
    'Diameter',
    'Stepdown',
    'Spindle Speed (RPM)',
    'Feed Rate',
    'Plunge Rate',
    'Feed Unit',
    'Plunge Unit',
    'Tool Type',
    'Flutes',
    'Notes',
  ];

  const rows = tools.map(t => [
    escapeCsv(t.name),
    escapeCsv(t.group),
    t.toolNo,
    t.diameter,
    t.stepdown,
    t.spindleSpeed,
    t.feedRate,
    t.plungeRate,
    t.feedUnit === 4 ? 'in/min' : t.feedUnit === 2 ? 'mm/min' : t.feedUnit === 1 ? 'mm/sec' : 'in/sec',
    t.plungeUnit === 3 ? 'in/min' : t.plungeUnit === 2 ? 'mm/min' : t.plungeUnit === 1 ? 'mm/sec' : 'in/sec',
    t.toolType,
    t.fluteCount,
    escapeCsv(t.notes),
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
}

/**
 * Standard JSON Export
 */
export function exportToJson(tools: CarvecoTool[]): string {
  return JSON.stringify(tools, null, 2);
}

/**
 * Inventables Easel Custom Tool Library JSON export
 */
export function exportToEaselJson(tools: CarvecoTool[]): string {
  const easelTools = tools.map(t => {
    const isMetric = isToolMetric(t);
    return {
      name: t.name,
      type: t.toolType === 'vbit' ? 'vbit' : t.toolType === 'ballnose' ? 'ballnose' : 'endmill',
      material: 'solid carbide',
      cutting_diameter: t.diameter,
      shank_diameter: t.diameter,
      flutes: t.fluteCount || 2,
      feed_rate: t.feedRate,
      plunge_rate: t.plungeRate,
      depth_per_pass: t.stepdown,
      rpm: t.spindleSpeed,
      unit: isMetric ? 'mm' : 'in',
      notes: t.notes || `Calibrated for 710W spindle. Group: ${t.group}`,
    };
  });
  return JSON.stringify(easelTools, null, 2);
}

/**
 * Inventables Easel CSV Tool Database export
 */
export function exportToEaselCsv(tools: CarvecoTool[]): string {
  const headers = [
    'Name',
    'Type',
    'Diameter',
    'Unit',
    'Flutes',
    'Feed Rate',
    'Plunge Rate',
    'Depth Per Pass',
    'RPM',
    'Notes',
  ];

  const rows = tools.map(t => {
    const isMetric = isToolMetric(t);
    return [
      escapeCsv(t.name),
      t.toolType === 'vbit' ? 'V-Bit' : t.toolType === 'ballnose' ? 'Ball Nose' : 'End Mill',
      t.diameter,
      isMetric ? 'mm' : 'in',
      t.fluteCount || 2,
      t.feedRate,
      t.plungeRate,
      t.stepdown,
      t.spindleSpeed,
      escapeCsv(t.notes || t.group),
    ];
  });

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
}

/**
 * Vectric (VCarve Pro / Aspire / Cut2D) CSV Tool Database export
 */
export function exportToVectricCsv(tools: CarvecoTool[]): string {
  const headers = [
    'Tool Name',
    'Tool Type',
    'Diameter',
    'Units',
    'Pass Depth',
    'Stepover',
    'Spindle Speed',
    'Feed Rate',
    'Plunge Rate',
    'Tool Number',
  ];

  const rows = tools.map(t => {
    const isMetric = isToolMetric(t);
    const unitStr = isMetric ? 'mm' : 'inches';
    const typeStr =
      t.toolType === 'ballnose'
        ? 'Ball Nose'
        : t.toolType === 'vbit'
        ? 'V-Bit'
        : 'End Mill';

    return [
      escapeCsv(t.name),
      typeStr,
      t.diameter,
      unitStr,
      t.stepdown,
      t.param2 || t.diameter * 0.4,
      t.spindleSpeed,
      t.feedRate,
      t.plungeRate,
      t.toolNo,
    ];
  });

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
}

/**
 * Autodesk Fusion 360 CAM Tool Library .tools JSON export
 */
export function exportToFusion360Json(tools: CarvecoTool[]): string {
  const fusionData = tools.map(t => {
    const isMetric = isToolMetric(t);
    const diamMm = isMetric ? t.diameter : t.diameter * 25.4;
    const stepdownMm = isMetric ? t.stepdown : t.stepdown * 25.4;
    const feedMmMin = isMetric
      ? t.feedUnit === 1
        ? t.feedRate * 60
        : t.feedRate
      : t.feedRate * 25.4;
    const plungeMmMin = isMetric
      ? t.plungeUnit === 1
        ? t.plungeRate * 60
        : t.plungeRate
      : t.plungeRate * 25.4;

    const toolTypeStr =
      t.toolType === 'ballnose'
        ? 'ball end mill'
        : t.toolType === 'vbit'
        ? 'chamfer mill'
        : t.toolType === 'surfacing'
        ? 'face mill'
        : 'flat end mill';

    return {
      type: toolTypeStr,
      description: t.name,
      vendor: t.group || 'Carveco Bit Studio',
      'product-id': `TOOL-${t.toolNo}`,
      geometry: {
        DC: Math.round(diamMm * 1000) / 1000,
        SFDM: Math.round(diamMm * 1000) / 1000,
        OAL: 50.8,
        LC: Math.round(diamMm * 3 * 10) / 10,
        NOF: t.fluteCount || 2,
        HAND: true,
      },
      'post-process': {
        number: t.toolNo,
        'diameter-offset': t.toolNo,
        'length-offset': t.toolNo,
        turret: 0,
        comment: t.notes || '',
      },
      'cutting-data': {
        presets: [
          {
            name: '710W Spindle Preset',
            n: t.spindleSpeed,
            v_f: Math.round(feedMmMin),
            v_f_leadIn: Math.round(feedMmMin),
            v_f_leadOut: Math.round(feedMmMin),
            v_f_plunge: Math.round(plungeMmMin),
            v_f_ramp: Math.round(feedMmMin * 0.5),
            stepdown: Math.round(stepdownMm * 1000) / 1000,
            stepover: Math.round(diamMm * 0.4 * 1000) / 1000,
          },
        ],
      },
    };
  });

  return JSON.stringify(
    {
      version: 1,
      data: fusionData,
    },
    null,
    2
  );
}

export const exportToFusion360Tools = exportToFusion360Json;


/**
 * Carbide Create Custom Tool Library CSV export
 */
export function exportToCarbideCreateCsv(tools: CarvecoTool[]): string {
  const headers = [
    'Tool Number',
    'Name',
    'Type',
    'Diameter',
    'Flute Count',
    'RPM',
    'Feedrate',
    'Plungerate',
    'Depth of Cut',
    'Stepover',
  ];

  const rows = tools.map(t => {
    return [
      t.toolNo,
      escapeCsv(t.name),
      t.toolType === 'vbit' ? 'V-Bit' : t.toolType === 'ballnose' ? 'Ball' : 'Endmill',
      t.diameter,
      t.fluteCount || 2,
      t.spindleSpeed,
      t.feedRate,
      t.plungeRate,
      t.stepdown,
      t.param2 || t.diameter * 0.5,
    ];
  });

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
}

/**
 * Universal auto-detector and parser
 */
export async function parseUploadedFile(
  file: File,
  forcedUnit?: 'metric' | 'imperial' | 'auto'
): Promise<ParseResult> {
  const arrayBuffer = await file.arrayBuffer();
  const bytes = new Uint8Array(arrayBuffer);
  const fileName = (file.name || '').toLowerCase();

  // 1. Binary detection:
  // - Extension is .tdb, .tbd, .vtdb, or .bin
  // - Contains Carveco/ArtCAM markers (tpmDB_, 0xc2 0x00)
  // - Contains significant null bytes in initial chunk (indicating binary data)
  const headerSample = bytes.slice(0, Math.min(1024, bytes.length));
  let nullByteCount = 0;
  for (let i = 0; i < headerSample.length; i++) {
    if (headerSample[i] === 0x00) nullByteCount++;
  }
  const isBinaryData = nullByteCount > 5;

  const textHeader = new TextDecoder('ascii', { fatal: false }).decode(headerSample);
  const isCarvecoOrArtcam =
    textHeader.includes('tpmDB_') ||
    (bytes.length > 2 && bytes[0] === 0xc2 && bytes[1] === 0x00) ||
    fileName.endsWith('.tdb') ||
    fileName.endsWith('.tbd') ||
    fileName.endsWith('.vtdb');

  if (isCarvecoOrArtcam || isBinaryData) {
    const res = parseBinaryTdb(arrayBuffer, file.name, forcedUnit);
    if (res.tools.length > 0) {
      return res;
    }
  }

  // 2. Text / CSV / TSV / JSON parsing fallback
  const text = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
  return parseTextTools(text, file.name, forcedUnit);
}
