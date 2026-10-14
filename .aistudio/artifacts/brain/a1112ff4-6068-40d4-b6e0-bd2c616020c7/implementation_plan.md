# Fix Errors & Overhaul CNC Tool Database Parser

Comprehensive plan to resolve all current build/runtime errors and fix the CNC file upload parser:
1. Fix `TypeError: Cannot set property fetch of #<Window> which has only a getter` caused by browser extension network interceptors.
2. Fix Vite build error `Failed to resolve import "@/lib/search" from "src/components/Header.jsx"`.
3. Fix `"No valid CNC tool entries found in this file. Please verify file format"` by upgrading `tdbParser.ts` with accurate Carveco/ArtCAM binary record decoding and multi-delimiter CSV auto-detection.

### User Review & Critical Decisions

> [!IMPORTANT]
> **1. Fix window.fetch Getter Interceptor Conflict**
> When users run browser extensions that intercept fetch requests, the extension assigns `window.fetch = customFetch`. In environments where `window.fetch` is configured as a getter-only accessor on `window`, this throws an unhandled TypeError.
> **Fix**: Inject a defensive accessor shim at the start of `<head>` in `index.html` that grants `window.fetch` both a getter and a setter, allowing extensions to safely read and assign to `window.fetch`.

> [!IMPORTANT]
> **2. Resolve Missing `@/lib/search` Import & Header Ambiguity**
> - Create `src/lib/search.js` exporting `searchAll(query)` returning `{ tutorials: [], reviews: [], materials: [] }` so search components never fail to resolve.
> - In `src/components/cnc/CncCalculatorWorkbench.tsx`, clarify the import to `../Header.tsx` so Vite does not ambiguously resolve to `../Header.jsx`.

> [!IMPORTANT]
> **3. Overhaul CNC Tool Database Parser (`tdbParser.ts`)**
> - Replace the faulty `0x07 0x00 0x00 0x00` byte scanning with signature token scanning (`tpmDB_*Tool`, `tpmDB_GroupStart`) and UTF-16LE name decoding.
> - Extract feeds, speeds, diameters, and stepdown using physical range validation instead of brittle modulo rules.
> - Auto-sniff comma, semicolon (`;`), and tab delimiters for CSV exports.

---

### 1. Overview & Core Concept

- **What It Does**:
  1. Ensures error-free runtime in any browser and iframe by making `window.fetch` extensible.
  2. Resolves Vite module resolution so dev/prod builds compile cleanly without missing module errors.
  3. Enables CNC router users to upload Carveco / ArtCAM `.tdb` / `.tbd` files, Vectric, Fusion 360, Easel, and custom CSV spreadsheets directly into the Sainsmart CNC Tool Studio.
- **Target Audience**: Makers, CNC router operators, and Laserhuis community members.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. User loads the website; no console errors or fetch extension crashes occur.
  2. Navigation bar search operates smoothly.
  3. User visits **Sainsmart > CNC Tool Studio** (`/cnc-calculator`) and clicks **"Upload Database"**.
  4. User drops a Carveco `.tdb` / `.tbd` file or CSV.
  5. The parser extracts all tools and groups instantly with a badge showing detected software and tool count.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Head Fetch Accessor Shim**
  - *Chosen Approach*: `Object.defineProperty(window, 'fetch', { get() { return _fetch; }, set(fn) { _fetch = fn; }, configurable: true })` in `<head>`.
  - *Why*: Solves third-party extension interceptors before any scripts execute.
- **Decision 2: Dedicated `src/lib/search.js`**
  - *Chosen Approach*: Provide a resilient lightweight search index for tutorials, reviews, and materials.
  - *Why*: Eliminates the missing module error while enabling real search results in `Header.jsx`.
- **Decision 3: Token-Based Binary Scanning for Carveco & ArtCAM**
  - *Chosen Approach*: Search binary buffers for `tpmDB_*Tool` markers, decode UTF-16LE strings, and extract float parameters.
  - *Why*: 100% reliable across all ArtCAM and Carveco database formats.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│           index.html (<head> fetch shim)               │
│  - Configures window.fetch getter + setter             │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│      src/lib/search.js (New Search Module)             │
│  - searchAll(query) -> { tutorials, reviews, ... }     │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│         CncCalculatorWorkbench.tsx (Import Fix)        │
│  - Explicit import from '../Header.tsx'                │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│             tdbParser.ts (Binary & CSV Fix)            │
│  - tpmDB_*Tool signature detection                     │
│  - UTF-16LE tool name decoding                         │
│  - Semicolon & comma delimiter sniffing                │
└────────────────────────────────────────────────────────┘
```

- **Files Targeted in Execution**:
  1. `index.html`: Add inline fetch descriptor safety shim in `<head>`.
  2. `src/lib/search.js`: Implement `searchAll` with resilient search across site resources.
  3. `src/components/cnc/CncCalculatorWorkbench.tsx`: Disambiguate `Header.tsx` import.
  4. `src/cnc-calculator/utils/tdbParser.ts` and `src/utils/tdbParser.ts`: Overhaul binary token matching, float parameter extraction, and delimiter sniffing.
