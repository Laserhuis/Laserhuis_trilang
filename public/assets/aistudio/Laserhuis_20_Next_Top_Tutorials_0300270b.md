# Laserhuis — 20 Next High-Value Tutorial Briefs

## Purpose
This file defines 20 new tutorial opportunities for Laserhuis. These are **content briefs**, not claims that Laserhuis has physically tested the settings. Google AI Studio should compare each brief with the current tutorial dataset before implementation and skip or merge any topic that materially duplicates an existing tutorial.

## Non-negotiable editorial rules
- Preserve the approved Laserhuis Grade A+++ tutorial structure.
- Never invent Laserhuis testing, measurements, machine ownership, manufacturer relationships, or sources.
- Numerical settings without traceable evidence must be labeled `REFERENCE_STARTING_POINT` and treated as calibration starting points only.
- Teach a material test or calibration workflow instead of presenting universal magic settings.
- Do not prescribe universal laser-safety eyewear OD values. Follow the machine manufacturer and a competent laser-safety assessment.
- Never recommend processing PVC, chlorinated plastics, or unidentified plastics.
- Separate MOPA and conventional Q-switched workflows where pulse-width control differs.
- Preserve existing routes if a similar tutorial already exists. Do not introduce keyword-cannibalizing duplicates.
- Prefer practical explanation: ACTION / WHY / LOOK FOR / POSSIBLE FAILURE.

---

## Priority 1 — Fiber Laser Settings for Stainless Steel: Marking, Annealing and Engraving
**Suggested ID:** `fiber-stainless-steel-settings-guide`  
**Primary intent:** fiber laser settings stainless steel  
**Laser:** Fiber / MOPA  
**Difficulty:** Intermediate  
**Why it matters:** High-intent reference topic that can connect Laserhuis settings, Fiber hub, reviews and future machine testing.

### Required coverage
- Difference between annealing, dark marking and material-removing engraving.
- 304 vs 316 and why alloy/surface finish matter.
- Q-switched vs MOPA parameter controls.
- Speed, power, frequency, hatch spacing, passes and focus.
- How to build a controlled parameter matrix.
- How to recognize ablation when the target was annealing.
- Brushed vs polished surface considerations.
- Cleaning before/after marking.

### Calibration workflow
Keep hatch and focus constant first. Vary speed and frequency; on MOPA add pulse width as a separate refinement stage. Evaluate tone, tactile roughness and consistency under different viewing angles.

### Troubleshooting focus
Brown instead of black; gray/rough mark; visible scan lines; warping; inconsistent color; edge overheating.

---

## Priority 2 — MOPA Color Marking on Stainless Steel: Building a Repeatable Color Matrix
**Suggested ID:** `mopa-stainless-color-matrix`  
**Primary intent:** MOPA laser color settings stainless steel  
**Laser:** MOPA Fiber  
**Difficulty:** Advanced

### Required coverage
- Thin-oxide/interference concept without pretending colors are universal recipes.
- Why alloy, polish, lens, focus and ambient consistency matter.
- Pulse width, frequency, speed, power and hatch relationships.
- How to create a labeled matrix rather than copying an internet recipe.
- Importance of repeatability on the same material lot.
- Photographing results consistently.

### Calibration workflow
Create a conservative grid varying only two variables per run. Lock the winning region, then refine pulse width or hatch separately.

### Troubleshooting focus
Color shifts between runs; dull gray result; ablation; rainbow gradients; heat distortion; color changes after cleaning.

---

## Priority 3 — Deep Engraving Brass with a Fiber Laser
**Suggested ID:** `fiber-deep-engraving-brass`  
**Primary intent:** fiber laser deep engraving brass settings  
**Laser:** Fiber / MOPA  
**Difficulty:** Advanced

### Required coverage
- Marking versus real material removal.
- Heat accumulation and multi-pass strategy.
- Hatch angle rotation between passes.
- Focus maintenance as material is removed.
- Debris handling/extraction.
- Why depth claims require measurement.
- Measuring depth with suitable metrology when available.

### Calibration workflow
Use a small sacrificial test block; establish a clean ablation profile before increasing pass count. Record elapsed time and measured depth only if actually measured.

### Troubleshooting focus
Recast/debris, black soot, rough walls, excessive heat, shallow engraving, distorted fine detail.

---

## Priority 4 — Fiber Laser Engraving Aluminum: Bare, Anodized and Coated Aluminum
**Suggested ID:** `fiber-laser-aluminum-guide`  
**Primary intent:** fiber laser settings aluminum  
**Laser:** Fiber / MOPA  
**Difficulty:** Intermediate

### Required coverage
- Bare aluminum vs anodized aluminum vs coated aluminum.
- Marking coating removal versus interacting with base metal.
- Alloy and surface-finish variability.
- High-contrast marking and QR/serial applications.
- Material-test strategy for different aluminum finishes.

### Troubleshooting focus
Low contrast; damaged anodizing; rough base metal; incomplete coating removal; unreadable QR codes.

---

## Priority 5 — Black Marking Anodized Aluminum Without Damaging the Base Metal
**Suggested ID:** `anodized-aluminum-black-marking`  
**Primary intent:** laser engrave anodized aluminum settings  
**Laser:** Fiber, diode where appropriate to coating  
**Difficulty:** Intermediate

### Required coverage
- Explain that results depend on anodizing/coating system.
- Difference between color removal, bleaching and base-metal ablation.
- Fine-text and QR-code workflow.
- Line interval and focus checks.
- Contrast verification after cleaning.

### Calibration workflow
Small grayscale/contrast coupon using same batch and finish. Optimize for contrast before speed.

---

## Priority 6 — Fiber Laser Lens Guide: 70×70, 110×110, 150×150 and Larger Fields
**Suggested ID:** `fiber-laser-f-theta-lens-guide`  
**Primary intent:** fiber laser lens size guide  
**Laser:** Fiber / MOPA  
**Difficulty:** Intermediate

### Required coverage
- F-theta lens purpose.
- Working field vs spot size vs usable focus range trade-offs.
- Why exact values depend on lens/source combination.
- Calibration file/lens correction implications.
- When smaller fields suit fine detail and when larger fields suit production.
- Lens change safety and contamination control.

### Avoid
Do not invent spot sizes, focal lengths or depth-of-focus values for generic lenses.

---

## Priority 7 — LightBurn Galvo Setup for Fiber Lasers: From Device Creation to First Test Grid
**Suggested ID:** `lightburn-galvo-fiber-setup`  
**Primary intent:** LightBurn fiber laser setup  
**Laser:** Fiber / MOPA Galvo  
**Difficulty:** Intermediate

### Required coverage
- Confirm supported hardware before configuration.
- Device setup concept.
- Lens/field calibration files where applicable.
- Framing/red-light alignment.
- Hatch settings.
- Frequency/pulse-width controls only if exposed by source.
- First material-test grid.
- Saving machine-specific libraries without pretending portability.

### Troubleshooting focus
Wrong field size; distorted geometry; shifted framing; no frequency control; poor focus; unexpected power response.

---

## Priority 8 — EZCAD Fiber Laser Settings Explained
**Suggested ID:** `ezcad-fiber-settings-explained`  
**Primary intent:** EZCAD fiber laser settings  
**Laser:** Fiber / MOPA  
**Difficulty:** Intermediate

### Required coverage
- Speed, power, frequency, hatch, loops, line spacing.
- Pulse width only where supported.
- Lens/field context.
- Why delay settings are machine-dependent and must not be copied blindly.
- Controlled test-matrix workflow.
- Saving parameter libraries responsibly.

---

## Priority 9 — Rotary Engraving a Stainless Steel Tumbler with a Fiber Laser
**Suggested ID:** `fiber-rotary-stainless-tumbler`  
**Primary intent:** fiber laser rotary tumbler engraving  
**Laser:** Fiber / MOPA  
**Difficulty:** Advanced

### Required coverage
- Chuck vs roller rotary.
- Diameter/circumference measurement.
- Calibration and steps per rotation.
- Seam placement.
- Focus across curvature.
- Powder-coated vs bare stainless distinctions.
- Frame test before marking.
- Avoid combining bare-metal annealing settings with coating-removal settings.

---

## Priority 10 — LightBurn Rotary Setup: Roller vs Chuck, Calibration and Common Errors
**Suggested ID:** `lightburn-rotary-setup-calibration`  
**Primary intent:** LightBurn rotary setup  
**Laser:** Multiple  
**Difficulty:** Intermediate

### Required coverage
- Roller and chuck differences.
- Diameter vs circumference.
- Rotary enable/disable discipline.
- Steps per rotation calibration.
- Object slip and taper.
- Test pattern for dimensional accuracy.
- Returning the machine to flat-bed operation safely.

---

## Priority 11 — Photo Engraving on Wood in LightBurn: Image Preparation, Dithering and Testing
**Suggested ID:** `lightburn-photo-engraving-wood`  
**Primary intent:** LightBurn photo engraving wood settings  
**Laser:** Diode / CO2  
**Difficulty:** Intermediate

### Required coverage
- Source-image selection.
- Crop, exposure, contrast, tonal compression and sharpening.
- Stucki, Jarvis, Floyd-Steinberg and other modes without declaring one universal winner.
- Line Interval / LPI relationship.
- LightBurn Interval Test.
- Material Test.
- Overscanning on supported GCode devices.
- Wood consistency, grain and glue layers.

### Differentiation from existing Stucki coaster tutorial
This must be a broad image-preparation and calibration reference, not another coaster project.

---

## Priority 12 — Slate Engraving with a Diode Laser: High-Contrast Coasters and Photos
**Suggested ID:** `diode-slate-engraving-guide`  
**Primary intent:** laser engraving slate settings  
**Laser:** Diode; CO2 may be discussed separately  
**Difficulty:** Beginner

### Required coverage
- Natural slate variability.
- Cleaning and flatness.
- Why laser marks can become lighter than substrate.
- Image inversion/negative workflow where applicable.
- Photo vs vector settings methodology.
- Optional finishing coatings only with proper product/use disclaimers.

---

## Priority 13 — Cutting Birch Plywood with a Diode Laser: Material Tests, Air Assist and Glue Variability
**Suggested ID:** `diode-cutting-birch-plywood`  
**Primary intent:** diode laser plywood cutting settings  
**Laser:** Diode  
**Difficulty:** Beginner / Intermediate

### Required coverage
- Baltic birch vs generic craft plywood.
- Glue layers, voids, moisture and warping.
- Air assist.
- One clean pass vs multiple passes trade-offs.
- Focus strategy.
- Char reduction.
- Fire watch.
- How to build a speed/power/pass matrix.

---

## Priority 14 — CO2 Laser Cutting Acrylic: Cast vs Extruded, Clean Edges and Kerf Testing
**Suggested ID:** `co2-cutting-acrylic-guide`  
**Primary intent:** CO2 laser acrylic cutting settings  
**Laser:** CO2  
**Difficulty:** Intermediate

### Required coverage
- Cast vs extruded PMMA.
- Actual thickness measurement.
- Focus and air-assist trade-offs.
- Blade/slat/pin support and flashback reduction.
- Measured kerf and test coupons.
- Cleaning and residual-stress caution.
- Protective masking considerations.

### Differentiation
This is a general cutting reference, not a duplicate of the edge-lit sign project.

---

## Priority 15 — CO2 Laser Cutting Plywood: Reduce Char and Improve Edge Quality
**Suggested ID:** `co2-plywood-cutting-clean-edges`  
**Primary intent:** CO2 laser plywood cutting settings  
**Laser:** CO2  
**Difficulty:** Intermediate

### Required coverage
- Glue chemistry and internal voids.
- Focus, air assist and exhaust.
- Protective masking trade-offs.
- Single-pass vs multi-pass.
- Lens cleanliness.
- Bed flashback.
- Char diagnosis.

---

## Priority 16 — Laser Engraving Leather Safely: Vegetable-Tanned vs Coated and Synthetic Materials
**Suggested ID:** `laser-engraving-leather-guide`  
**Primary intent:** laser engraving leather settings  
**Laser:** CO2 / diode  
**Difficulty:** Intermediate

### Required coverage
- Vegetable-tanned, chrome-tanned and synthetic products must not be treated as interchangeable.
- Material identification and supplier information.
- Ventilation and odor/fume considerations.
- Engraving vs cutting.
- Masking and residue cleanup.
- Test coupon workflow.
- Avoid unsafe certainty about unknown treatments/coatings.

---

## Priority 17 — Powder-Coated Tumblers: Clean Coating Removal Without Damaging Stainless Steel
**Suggested ID:** `laser-powder-coated-tumbler-guide`  
**Primary intent:** laser engraving powder coated tumbler settings  
**Laser:** CO2 / diode / Fiber depending coating and workflow  
**Difficulty:** Intermediate

### Required coverage
- Coating removal vs base-metal marking.
- Rotary calibration.
- Coating variation.
- Contrast and residue cleanup.
- Test patch in inconspicuous area or sacrificial blank.
- Avoid assuming one laser type/settings profile covers all coatings.

---

## Priority 18 — Laser Engraving Glass: Rotary Tumblers, Coatings and Fracture Control
**Suggested ID:** `laser-engraving-glass-rotary`  
**Primary intent:** laser engrave glass tumbler rotary  
**Laser:** CO2 primarily; diode only where a compatible surface method is explicitly described  
**Difficulty:** Intermediate / Advanced

### Required coverage
- Thermal-fracture risk.
- Glass composition variability.
- Rotary setup and focus.
- Surface preparation.
- Conservative test patches.
- Why different glass types respond differently.
- Cleaning and inspection for cracks/chips.

### Avoid
Do not promise that any coating or wet-paper method universally prevents cracking.

---

## Priority 19 — Laser Kerf Testing in LightBurn: Accurate Slots, Tabs and Finger Joints
**Suggested ID:** `lightburn-laser-kerf-test-guide`  
**Primary intent:** LightBurn kerf test / laser kerf compensation  
**Laser:** Diode / CO2  
**Difficulty:** Beginner / Intermediate

### Required coverage
- What kerf is.
- Why kerf changes with material, thickness, focus and settings.
- Closed-shape offset concept.
- Positive vs negative offset in LightBurn.
- Test coupon methodology.
- Press fit vs sliding fit.
- Measuring with calipers.
- Finger-joint workflow.

### Strong internal links
Plywood box, acrylic cutting and wood-inlay tutorials.

---

## Priority 20 — QR Codes, Serial Numbers and Data Matrix Codes with a Fiber Laser
**Suggested ID:** `fiber-laser-qr-serial-data-matrix`  
**Primary intent:** fiber laser QR code settings / laser serial number marking  
**Laser:** Fiber / MOPA  
**Difficulty:** Intermediate

### Required coverage
- Contrast vs material removal.
- Module/cell size and practical scanner readability.
- Quiet zone and design cleanliness.
- Fine-detail focus.
- Hatch/line spacing implications.
- Marking coated vs bare metals.
- Verification with multiple scanners/cameras.
- Serial-number and batch workflows.
- Do not invent permanence/compliance certifications.

### Calibration workflow
Create progressively smaller test codes, verify with more than one reader and preserve a conservative size margin rather than optimizing only for minimum size.

---

# Recommended implementation order

## Batch A — Commercially valuable Fiber/MOPA
1. fiber-stainless-steel-settings-guide
2. mopa-stainless-color-matrix
3. fiber-deep-engraving-brass
4. fiber-laser-aluminum-guide
5. anodized-aluminum-black-marking

## Batch B — Fiber software / optics / rotary
6. fiber-laser-f-theta-lens-guide
7. lightburn-galvo-fiber-setup
8. ezcad-fiber-settings-explained
9. fiber-rotary-stainless-tumbler
10. lightburn-rotary-setup-calibration

## Batch C — High-volume material searches
11. lightburn-photo-engraving-wood
12. diode-slate-engraving-guide
13. diode-cutting-birch-plywood
14. co2-cutting-acrylic-guide
15. co2-plywood-cutting-clean-edges

## Batch D — Projects and precision workflows
16. laser-engraving-leather-guide
17. laser-powder-coated-tumbler-guide
18. laser-engraving-glass-rotary
19. lightburn-laser-kerf-test-guide
20. fiber-laser-qr-serial-data-matrix

---

# Google AI Studio instructions for this file

Before creating any tutorial from this roadmap:

1. Load the current Laserhuis tutorial dataset.
2. Compare the proposed tutorial against all existing tutorials by:
   - topic;
   - search intent;
   - laser technology;
   - material;
   - process;
   - current slug;
   - semantic overlap.
3. If an existing tutorial already serves substantially the same intent, **upgrade that existing tutorial instead of creating a duplicate**.
4. Preserve the existing URL in that case and report the proposed ID as `SKIPPED_DUPLICATE`.
5. If two pages can serve distinct intents, explain the intended distinction and internal-link relationship before creating the new page.
6. Process a maximum of **5 new tutorials per execution**.
7. Stop after each batch and return the quality-gate and build report.

## Required Grade A+++ format
Each created tutorial should use the approved Laserhuis schema and include where relevant:
- title and summary;
- project overview;
- prerequisites;
- compatible/limited laser types;
- material selection;
- design preparation;
- machine setup;
- optics with unknown values left null;
- extraction / air-assist guidance without invented CFM or PSI;
- provenance-aware starting settings;
- material-test or calibration workflow;
- numbered ACTION / WHY / LOOK FOR / POSSIBLE FAILURE steps;
- first test run;
- result interpretation;
- at least five useful troubleshooting entries when warranted;
- finishing;
- quality-control checklist;
- optimization;
- FAQs;
- real internal links only;
- safety guidance;
- Article or HowTo JSON-LD only when appropriate;
- clean canonical URL;
- prerender verification.

## Final publishing rule
A tutorial must not be marked as `LASERHUIS_TESTED` unless a genuine Laserhuis physical test record exists. Until then, numerical values created without a traceable manufacturer/community source are `REFERENCE_STARTING_POINT` and `physicallyTested: false`.
