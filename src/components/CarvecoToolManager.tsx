import React, { useState, useEffect, useCallback } from 'react';
import { CncHeader } from './CncHeader';
import { SpindleTunerBar, SpindleTuningOptions } from './SpindleTunerBar';
import { ToolTable } from './ToolTable';
import { BulkModifierModal } from './BulkModifierModal';
import { ToolDetailModal } from './ToolDetailModal';
import { UploadModal } from './UploadModal';
import { ExportModal } from './ExportModal';
import { PrintCheatsheetModal } from './PrintCheatsheetModal';
import { AddToolModal } from './AddToolModal';
import { HelpAssistanceModal, HelpTabId } from './HelpAssistanceModal';
import { CarvecoTool, DatabaseState, BulkOperationConfig } from '@/types/tool';
import { WHITESIDE_PRESET, GENMITSU_STOCK_PRESET, BRAND_PRESETS } from '@/data/presetDatabases';
import { base64ToArrayBuffer } from '@/utils/tdbParser';
import { SAMPLE_TDB_BASE64 } from '@/data/sampleTdbBase64';
import { SPINDLE_PROFILES, snapToNearestDial } from '@/utils/spindleProfiles';
import { DisplayUnitMode, isToolMetric } from '@/utils/unitConverter';

export function CarvecoToolManager() {
  // Initialize with official SainSmart (Genmitsu) preferred partner database & binary buffer
  const [database, setDatabase] = useState<DatabaseState>(() => {
    const rawBuffer = base64ToArrayBuffer(SAMPLE_TDB_BASE64);
    const tools = JSON.parse(JSON.stringify(GENMITSU_STOCK_PRESET)) as CarvecoTool[];
    const groupsSet = new Set<string>();
    tools.forEach(t => groupsSet.add(t.group));

    return {
      fileName: 'SainSmart Genmitsu Official Database.tbd',
      format: 'carveco_binary',
      tools,
      groups: Array.from(groupsSet),
      rawBuffer,
      history: [tools],
      historyIndex: 0,
    };
  });

  const [selectedToolIds, setSelectedToolIds] = useState<string[]>([]);
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [unitMode, setUnitMode] = useState<DisplayUnitMode>('metric');

  // Modal open states
  const [isSpindleTunerOpen, setIsSpindleTunerOpen] = useState(true);
  const [isBulkMathOpen, setIsBulkMathOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [helpTab, setHelpTab] = useState<HelpTabId>('quickstart');
  const [isAddToolOpen, setIsAddToolOpen] = useState(false);
  const [activeDetailTool, setActiveDetailTool] = useState<CarvecoTool | null>(null);

  const openHelpWithTab = (tab: HelpTabId) => {
    setHelpTab(tab);
    setIsHelpOpen(true);
  };

  // History tracking helpers
  const pushHistory = useCallback((newTools: CarvecoTool[]) => {
    setDatabase(prev => {
      const newHistory = prev.history.slice(0, prev.historyIndex + 1);
      newHistory.push(newTools);
      // Keep last 30 states
      if (newHistory.length > 30) newHistory.shift();
      return {
        ...prev,
        tools: newTools,
        history: newHistory,
        historyIndex: newHistory.length - 1,
      };
    });
  }, []);

  const handleUndo = useCallback(() => {
    setDatabase(prev => {
      if (prev.historyIndex > 0) {
        const nextIndex = prev.historyIndex - 1;
        return {
          ...prev,
          tools: prev.history[nextIndex],
          historyIndex: nextIndex,
        };
      }
      return prev;
    });
  }, []);

  const handleRedo = useCallback(() => {
    setDatabase(prev => {
      if (prev.historyIndex < prev.history.length - 1) {
        const nextIndex = prev.historyIndex + 1;
        return {
          ...prev,
          tools: prev.history[nextIndex],
          historyIndex: nextIndex,
        };
      }
      return prev;
    });
  }, []);

  // Keyboard shortcut listener for Undo/Redo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        if (e.shiftKey) {
          e.preventDefault();
          handleRedo();
        } else {
          e.preventDefault();
          handleUndo();
        }
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
        e.preventDefault();
        handleRedo();
      } else if (!isInput && (e.key === '?' || e.key === 'F1')) {
        e.preventDefault();
        setIsHelpOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo]);

  // Count modified tools
  const modifiedCount = database.tools.filter(
    t =>
      t.spindleSpeed !== t.originalValues.spindleSpeed ||
      t.feedRate !== t.originalValues.feedRate ||
      t.stepdown !== t.originalValues.stepdown ||
      t.plungeRate !== t.originalValues.plungeRate ||
      t.diameter !== t.originalValues.diameter ||
      t.name !== t.originalValues.name
  ).length;

  // 710W Spindle Tuning handler
  const handleApplySpindleTuning = (options: SpindleTuningOptions) => {
    const profile = SPINDLE_PROFILES.find(p => p.id === options.profileId) || SPINDLE_PROFILES[0];

    const updatedTools = database.tools.map(tool => {
      const inScope =
        options.scope === 'all'
          ? true
          : options.scope === 'selected'
          ? selectedToolIds.includes(tool.id)
          : activeGroup === 'all' || tool.group === activeGroup;

      if (!inScope) return tool;

      // Scale RPM
      let newRpm = Math.round(tool.originalValues.spindleSpeed * options.rpmMultiplier);

      // Clamp to spindle safety limits
      if (options.clampRpm) {
        newRpm = Math.max(profile.minRpm, Math.min(profile.maxRpm, newRpm));
      }

      // Snap to router dial notches
      if (options.snapDial) {
        const nearest = snapToNearestDial(newRpm, profile.dials);
        newRpm = nearest.rpm;
      }

      // Scale Feeds, Stepdowns, Plunges in the tool's native unit
      const newFeed = Math.round(tool.originalValues.feedRate * options.feedMultiplier * 10) / 10;
      const newStepdown = Math.round(tool.originalValues.stepdown * options.stepdownMultiplier * 1000) / 1000;
      const newPlunge = Math.round(tool.originalValues.plungeRate * options.plungeMultiplier * 10) / 10;

      return {
        ...tool,
        spindleSpeed: newRpm,
        feedRate: newFeed,
        stepdown: newStepdown,
        plungeRate: newPlunge,
      };
    });

    pushHistory(updatedTools);
  };

  // Revert scope to original
  const handleResetToOriginal = (scope: 'all' | 'selected' | 'filtered') => {
    const updatedTools = database.tools.map(tool => {
      const inScope =
        scope === 'all'
          ? true
          : scope === 'selected'
          ? selectedToolIds.includes(tool.id)
          : activeGroup === 'all' || tool.group === activeGroup;

      if (!inScope) return tool;

      return {
        ...tool,
        diameter: tool.originalValues.diameter,
        param2: tool.originalValues.param2,
        stepdown: tool.originalValues.stepdown,
        spindleSpeed: tool.originalValues.spindleSpeed,
        feedRate: tool.originalValues.feedRate,
        plungeRate: tool.originalValues.plungeRate,
        name: tool.originalValues.name || tool.name,
        notes: tool.originalValues.notes || tool.notes,
      };
    });

    pushHistory(updatedTools);
  };

  // Advanced Bulk Math
  const handleApplyBulkOperation = (config: BulkOperationConfig) => {
    const updatedTools = database.tools.map(tool => {
      const inScope =
        config.scope === 'all'
          ? true
          : config.scope === 'selected'
          ? selectedToolIds.includes(tool.id)
          : activeGroup === 'all' || tool.group === activeGroup;

      if (!inScope) return tool;

      let currentVal = Number(tool[config.field]) || 0;
      let newVal = currentVal;

      switch (config.action) {
        case 'multiply':
          newVal = currentVal * config.value;
          break;
        case 'divide':
          if (config.value !== 0) newVal = currentVal / config.value;
          break;
        case 'percent':
          newVal = currentVal * (1 + config.value / 100);
          break;
        case 'add':
          newVal = currentVal + config.value;
          break;
        case 'subtract':
          newVal = Math.max(0, currentVal - config.value);
          break;
        case 'set':
          newVal = config.value;
          break;
        case 'clamp':
          newVal = Math.max(config.minValue ?? 0, Math.min(config.maxValue ?? 100000, currentVal));
          break;
        case 'round':
          if (config.roundIncrement && config.roundIncrement > 0) {
            newVal = Math.round(currentVal / config.roundIncrement) * config.roundIncrement;
          }
          break;
      }

      if (config.field === 'spindleSpeed' || config.field === 'toolNo') {
        newVal = Math.round(newVal);
      } else if (config.field === 'feedRate' || config.field === 'plungeRate') {
        newVal = Math.round(newVal * 10) / 10;
      } else {
        newVal = Math.round(newVal * 10000) / 10000;
      }

      return {
        ...tool,
        [config.field]: newVal,
      };
    });

    pushHistory(updatedTools);
  };

  // Convert bit units (mm <-> inch)
  const handleConvertToolUnits = (
    toolIds: string[],
    targetUnit: 'mm' | 'inch',
    scaleValues: boolean = true
  ) => {
    const updatedTools = database.tools.map(tool => {
      if (!toolIds.includes(tool.id)) return tool;

      if (targetUnit === 'mm') {
        const needsScale = scaleValues && tool.unit !== 'mm';
        const newDiam = needsScale ? Math.round(tool.diameter * 25.4 * 100) / 100 : tool.diameter;
        const newStep = needsScale ? Math.round(tool.stepdown * 25.4 * 100) / 100 : tool.stepdown;
        const newFeed = needsScale ? Math.round(tool.feedRate * 25.4) : tool.feedRate;
        const newPlunge = needsScale ? Math.round(tool.plungeRate * 25.4) : tool.plungeRate;

        return {
          ...tool,
          unit: 'mm' as const,
          unitFlag: 1,
          diameter: newDiam,
          stepdown: newStep,
          feedRate: newFeed,
          plungeRate: newPlunge,
          feedUnit: 2,
          plungeUnit: 2,
        };
      } else {
        const needsScale = scaleValues && tool.unit !== 'inch';
        const newDiam = needsScale ? Math.round((tool.diameter / 25.4) * 10000) / 10000 : tool.diameter;
        const newStep = needsScale ? Math.round((tool.stepdown / 25.4) * 10000) / 10000 : tool.stepdown;
        const newFeed = needsScale ? Math.round((tool.feedRate / 25.4) * 10) / 10 : tool.feedRate;
        const newPlunge = needsScale ? Math.round((tool.plungeRate / 25.4) * 10) / 10 : tool.plungeRate;

        return {
          ...tool,
          unit: 'inch' as const,
          unitFlag: 0,
          diameter: newDiam,
          stepdown: newStep,
          feedRate: newFeed,
          plungeRate: newPlunge,
          feedUnit: 4,
          plungeUnit: 3,
        };
      }
    });

    pushHistory(updatedTools);
  };

  // Bulk convert units handler from BulkModifierModal
  const handleBulkConvertUnits = (
    scope: 'all' | 'selected' | 'filtered',
    targetUnit: 'mm' | 'inch',
    scaleValues: boolean
  ) => {
    const ids =
      scope === 'selected'
        ? selectedToolIds
        : scope === 'filtered' && activeGroup !== 'all'
        ? database.tools.filter(t => t.group === activeGroup).map(t => t.id)
        : database.tools.map(t => t.id);

    handleConvertToolUnits(ids, targetUnit, scaleValues);
  };

  // One-click correction for unit scale mistakes
  const handleFixUnitSwap = (action: 'div254' | 'mul254' | 'setMetric' | 'setImperial') => {
    const updatedTools = database.tools.map(tool => {
      let diam = tool.diameter;
      let step = tool.stepdown;
      let feed = tool.feedRate;
      let plunge = tool.plungeRate;
      let unit = tool.unit;
      let unitFlag = tool.unitFlag;

      if (action === 'div254') {
        diam = Math.round((diam / 25.4) * 10000) / 10000;
        step = Math.round((step / 25.4) * 10000) / 10000;
        unit = 'mm';
        unitFlag = 1;
      } else if (action === 'mul254') {
        diam = Math.round((diam * 25.4) * 100) / 100;
        step = Math.round((step * 25.4) * 100) / 100;
        unit = 'mm';
        unitFlag = 1;
      } else if (action === 'setMetric') {
        unit = 'mm';
        unitFlag = 1;
        if (diam <= 1.0) {
          diam = Math.round((diam * 25.4) * 100) / 100;
          step = Math.round((step * 25.4) * 100) / 100;
          if (feed <= 150) feed = Math.round(feed * 25.4);
          if (plunge <= 100) plunge = Math.round(plunge * 25.4);
        }
      } else if (action === 'setImperial') {
        unit = 'inch';
        unitFlag = 0;
        if (diam > 1.2) {
          diam = Math.round((diam / 25.4) * 10000) / 10000;
          step = Math.round((step / 25.4) * 10000) / 10000;
          if (feed >= 300) feed = Math.round((feed / 25.4) * 10) / 10;
          if (plunge >= 100) plunge = Math.round((plunge / 25.4) * 10) / 10;
        }
      }

      return {
        ...tool,
        diameter: diam,
        param2: diam,
        stepdown: step,
        feedRate: feed,
        plungeRate: plunge,
        unit,
        unitFlag,
      };
    });

    pushHistory(updatedTools);
  };

  // Find & Replace in names/notes
  const handleApplyFindReplace = (
    findText: string,
    replaceText: string,
    target: 'name' | 'notes' | 'both'
  ) => {
    const updatedTools = database.tools.map(tool => {
      let name = tool.name;
      let notes = tool.notes;

      if (target === 'name' || target === 'both') {
        name = name.split(findText).join(replaceText);
      }
      if (target === 'notes' || target === 'both') {
        notes = notes.split(findText).join(replaceText);
      }

      return {
        ...tool,
        name,
        notes,
      };
    });

    pushHistory(updatedTools);
  };

  // Single tool updates
  const handleUpdateTool = (toolId: string, updates: Partial<CarvecoTool>) => {
    const updatedTools = database.tools.map(t => {
      if (t.id === toolId) {
        return { ...t, ...updates };
      }
      return t;
    });
    pushHistory(updatedTools);
  };

  // Delete tool
  const handleDeleteTool = (toolId: string) => {
    const updatedTools = database.tools.filter(t => t.id !== toolId);
    pushHistory(updatedTools);
  };

  // Duplicate tool
  const handleDuplicateTool = (toolId: string) => {
    const original = database.tools.find(t => t.id === toolId);
    if (!original) return;

    const cloned: CarvecoTool = {
      ...original,
      id: `tool-${Date.now()}`,
      name: `${original.name} (Copy)`,
      toolNo: original.toolNo + 1,
    };

    const index = database.tools.findIndex(t => t.id === toolId);
    const updatedTools = [...database.tools];
    updatedTools.splice(index + 1, 0, cloned);
    pushHistory(updatedTools);
  };

  // Revert single tool
  const handleRevertTool = (toolId: string) => {
    const updatedTools = database.tools.map(t => {
      if (t.id === toolId) {
        return {
          ...t,
          diameter: t.originalValues.diameter,
          param2: t.originalValues.param2,
          stepdown: t.originalValues.stepdown,
          spindleSpeed: t.originalValues.spindleSpeed,
          feedRate: t.originalValues.feedRate,
          plungeRate: t.originalValues.plungeRate,
          name: t.originalValues.name || t.name,
          notes: t.originalValues.notes || t.notes,
        };
      }
      return t;
    });
    pushHistory(updatedTools);
  };

  // Add new tool
  const handleAddNewTool = () => {
    setIsAddToolOpen(true);
  };

  const handleCreateToolFromWizard = (newTool: CarvecoTool) => {
    newTool.toolNo = database.tools.length + 1;
    const updatedTools = [newTool, ...database.tools];
    pushHistory(updatedTools);
    setActiveDetailTool(newTool);
  };

  // Selection handlers
  const handleToggleSelectTool = (toolId: string) => {
    setSelectedToolIds(prev =>
      prev.includes(toolId) ? prev.filter(id => id !== toolId) : [...prev, toolId]
    );
  };

  const handleSelectAllTools = (toolIds: string[]) => {
    setSelectedToolIds(toolIds);
  };

  const handleClearSelection = () => {
    setSelectedToolIds([]);
  };

  const handleLoadBrandPreset = (presetId: string) => {
    const preset = BRAND_PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    const tools = JSON.parse(JSON.stringify(preset.tools)) as CarvecoTool[];
    const groupsSet = new Set<string>();
    tools.forEach(t => groupsSet.add(t.group));
    const rawBuffer = base64ToArrayBuffer(SAMPLE_TDB_BASE64);
    setDatabase({
      fileName: `${preset.brandName} Tool Database.${preset.unit === 'metric' ? 'tbd' : 'tdb'}`,
      format: 'carveco_binary',
      tools,
      groups: Array.from(groupsSet),
      rawBuffer,
      history: [tools],
      historyIndex: 0,
      detectedFileUnit: preset.unit,
    });
    setSelectedToolIds([]);
    setActiveGroup('all');
    setUnitMode(preset.unit === 'metric' ? 'metric' : 'imperial');
  };

  return (
    <div className="flex min-h-[85vh] w-full flex-col bg-zinc-950 text-zinc-100 select-none overflow-visible rounded-xl border border-slate-800/80 shadow-2xl">
      {/* Precision Navigation Header */}
      <CncHeader
        database={database}
        unitMode={unitMode}
        onChangeUnitMode={setUnitMode}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={database.historyIndex > 0}
        canRedo={database.historyIndex < database.history.length - 1}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenPrint={() => setIsPrintOpen(true)}
        onOpenBulkModal={() => setIsBulkMathOpen(true)}
        onOpenSpindleTuner={() => setIsSpindleTunerOpen(prev => !prev)}
        onOpenHelp={() => openHelpWithTab('quickstart')}
        onFixUnitSwap={handleFixUnitSwap}
        onLoadBrandPreset={handleLoadBrandPreset}
        modifiedCount={modifiedCount}
      />

      {/* Preferred Partner Banner */}
      <div className="bg-gradient-to-r from-cyan-950/90 via-slate-900 to-amber-950/80 border-b border-cyan-500/30 px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 border border-cyan-500/40 uppercase tracking-wide">
            ★ Preferred Partner
          </span>
          <span className="text-zinc-100 font-semibold">
            Official SainSmart (Genmitsu) CNC Bit Studio & Database
          </span>
          <span className="hidden lg:inline text-zinc-400">
            — Pre-tuned for Genmitsu 3018-PRO, 3020-PRO MAX, 4040-PRO & PROVerXL series
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleLoadBrandPreset('genmitsu')}
            className="rounded bg-cyan-500 hover:bg-cyan-400 text-zinc-950 px-3 py-1 text-[11px] font-bold transition-colors shadow-xs flex items-center gap-1"
          >
            <span>Load SainSmart Official Bits (28)</span>
          </button>
        </div>
      </div>

      {/* 710W Spindle Calibration Engine Bar */}
      <SpindleTunerBar
        tools={database.tools}
        fileName={database.fileName}
        selectedToolIds={selectedToolIds}
        activeGroup={activeGroup}
        onApplyTuning={handleApplySpindleTuning}
        onResetToOriginal={handleResetToOriginal}
        isOpen={isSpindleTunerOpen}
        onToggleOpen={() => setIsSpindleTunerOpen(prev => !prev)}
        onOpenHelpPhysics={() => openHelpWithTab('spindle_physics')}
      />

      {/* Primary Tool Table View */}
      <ToolTable
        tools={database.tools}
        groups={database.groups}
        selectedToolIds={selectedToolIds}
        activeGroup={activeGroup}
        onSelectGroup={setActiveGroup}
        onToggleSelectTool={handleToggleSelectTool}
        onSelectAllTools={handleSelectAllTools}
        onClearSelection={handleClearSelection}
        onUpdateTool={handleUpdateTool}
        onDeleteTool={handleDeleteTool}
        onDuplicateTool={handleDuplicateTool}
        onRevertTool={handleRevertTool}
        onAddNewTool={handleAddNewTool}
        onOpenToolDetail={tool => setActiveDetailTool(tool)}
        onConvertToolUnits={(ids, target) => handleConvertToolUnits(ids, target, true)}
        onFixUnitSwap={handleFixUnitSwap}
        onOpenUpload={() => setIsUploadOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        unitMode={unitMode}
      />

      {/* Modals */}
      <BulkModifierModal
        isOpen={isBulkMathOpen}
        onClose={() => setIsBulkMathOpen(false)}
        tools={database.tools}
        selectedToolIds={selectedToolIds}
        activeGroup={activeGroup}
        onApplyBulkOperation={handleApplyBulkOperation}
        onApplyFindReplace={handleApplyFindReplace}
        onConvertUnits={handleBulkConvertUnits}
      />

      <ToolDetailModal
        tool={activeDetailTool}
        isOpen={activeDetailTool !== null}
        onClose={() => setActiveDetailTool(null)}
        onSave={(toolId, updates) => {
          handleUpdateTool(toolId, updates);
          setActiveDetailTool(null);
        }}
        unitSystem={unitMode === 'imperial' ? 'imperial' : 'metric'}
      />

      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onLoadDatabase={newState => {
          setDatabase(newState);
          setSelectedToolIds([]);
          setActiveGroup('all');
          const metricCount = newState.tools.filter(t => isToolMetric(t)).length;
          setUnitMode(metricCount > newState.tools.length / 2 ? 'metric' : 'imperial');
        }}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        tools={database.tools}
        fileName={database.fileName}
        rawBuffer={database.rawBuffer}
        modifiedCount={modifiedCount}
      />

      <PrintCheatsheetModal
        isOpen={isPrintOpen}
        onClose={() => setIsPrintOpen(false)}
        tools={database.tools}
        fileName={database.fileName}
        unitMode={unitMode}
      />

      <AddToolModal
        isOpen={isAddToolOpen}
        onClose={() => setIsAddToolOpen(false)}
        onAddTool={handleCreateToolFromWizard}
        groups={database.groups}
        activeGroup={activeGroup}
        unitMode={unitMode}
      />

      <HelpAssistanceModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
        initialTab={helpTab}
      />
    </div>
  );
}

export default CarvecoToolManager;
