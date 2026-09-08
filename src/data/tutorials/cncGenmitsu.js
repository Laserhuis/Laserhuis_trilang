import { IMG } from '../images.js';

export const CNC_TUTORIALS = [
  {
    "id": "surfacing-a-cnc-spoilboard",
    "title": "How to Flatten and Surface a Genmitsu MDF Spoilboard",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "8 min",
    "materials": [
      "MDF Spoilboard Sheet",
      "Screws or Double-Sided Tape"
    ],
    "tools": [
      "Genmitsu CNC Machine",
      "1/4 Inch Shank Surfacing Bit",
      "Digital Calipers",
      "Vacuum Dust Collection"
    ],
    "summary": "Learn how to prepare a perfectly flat and planar MDF spoilboard surface on your Genmitsu CNC router, essential for consistent depth across delicate engraving projects.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Secure the MDF Sheet",
        "detail": "Attach your MDF sheet tightly to the aluminum bed using countersunk screws or heavy-duty double-sided woodworking tape."
      },
      {
        "title": "Generate Surfacing Toolpath",
        "detail": "In Candle or your CAM software (e.g., Candle, Easel, or Carbide Create), set up a raster or pocket toolpath slightly larger than your work area using a flattening bit."
      },
      {
        "title": "Set Feeds and Speeds",
        "detail": "Configure a shallow depth of cut (0.2mm to 0.5mm per pass), spindle speed at 10,000 RPM, and feed rate at 1000-1200 mm/min."
      },
      {
        "title": "Zero the Z-Axis and Execute",
        "detail": "Zero the Z-axis on the lowest point of the board, power on your vacuum dust collector, and run the G-code to create a planar reference surface."
      }
    ],
    "proTips": [
      "Always take light depth passes (0.3mm max) to avoid strain on stock 775 or 300W Genmitsu spindles.",
      "Use grid pocketing with a 40% tool stepover for the smoothest finish."
    ],
    "safety": "Wear eye protection and a dust mask rated N95 or higher, as machining MDF produces fine particulate dust."
  },
  {
    "id": "understanding-feeds-and-speeds",
    "title": "Mastering Feeds, Speeds, and Chip Load for Genmitsu CNCs",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "10 min",
    "materials": [
      "Pine Softwood Block",
      "Acrylic Sheet Stock",
      "Aluminum Flat Bar"
    ],
    "tools": [
      "Genmitsu CNC Router",
      "1/8 Inch 2-Flute Carbide Flat End Mill",
      "Digital Calipers"
    ],
    "summary": "Master the fundamentals of feed rates, spindle RPM, and chip load calculations to optimize tool life and prevent bit breakage on desktop CNC routers.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Understand the Chip Load Formula",
        "detail": "Calculate chip load using the formula: Chip Load = Feed Rate / (RPM x Number of Flutes). Target 0.001 to 0.003 inches for small desktop mills."
      },
      {
        "title": "Establish Baseline Wood Settings",
        "detail": "For softwoods using a 1/8 inch 2-flute bit, start at 10,000 RPM, 800 mm/min feed rate, and 1.5mm Depth of Cut (DOC)."
      },
      {
        "title": "Perform a Test Feed Cut",
        "detail": "Run test slots on scrap wood while listening to spindle pitch and checking for wood burn or excessive chatter."
      },
      {
        "title": "Adjust According to Chips",
        "detail": "Inspect cut debris: replace fine dust with distinct wooden chips by increasing feed rate or decreasing spindle RPM."
      }
    ],
    "proTips": [
      "If you see smoke or burn marks, your feed rate is too slow or RPM is too high.",
      "High chatter means your depth of cut is too aggressive or your workpiece clamp is loose."
    ],
    "safety": "Never adjust feed rates beyond stock structural capability; excessive tool engagement can snap carbide bits."
  },
  {
    "id": "cnc-bit-selection-guide",
    "title": "Beginner Guide to CNC Router Bits and End Mills",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "7 min",
    "materials": [
      "Hardwood Scrap",
      "Cast Acrylic Scrap"
    ],
    "tools": [
      "Genmitsu 3018-PRO/PROVerXL",
      "Upcut End Mill",
      "Downcut End Mill",
      "Single Flute O-Flute Bit",
      "V-Bit (60 Degree)"
    ],
    "summary": "Learn how to choose the right bitgeometry—upcut, downcut, compression, O-flute, or V-bit—for clean results across wood, plastic, and soft metals.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Identify Upcut vs Downcut Flutes",
        "detail": "Use upcut bits for deep slotting and chip removal; use downcut bits for clean top surfaces without splintering on plywood."
      },
      {
        "title": "Select Bits for Plastics",
        "detail": "Choose single-flute 'O-flute' bits when cutting acrylic to prevent chip re-welding and melted edge build-up."
      },
      {
        "title": "Select Bits for Detail and V-Carving",
        "detail": "Use 60° or 90° V-bits for fine text lettering and signmaking, and ball nose bits for smooth 3D contoured reliefs."
      },
      {
        "title": "Match Shank Diameter to Collet",
        "detail": "Ensure your Genmitsu ER11 or ER20 collet exactly matches bit shank size (1/8 inch or 4mm) to avoid runout."
      }
    ],
    "proTips": [
      "Never use downcut bits on deep blind holes because chips cannot escape and can snap the bit.",
      "Clean dirty bits with brass wire brushes and resin solvent to restore sharp cutting edges."
    ],
    "safety": "Ensure collet nuts are torqued down securely before operation; loose end mills can slip out during cutting."
  },
  {
    "id": "workpiece-holding-methods",
    "title": "Essential Workpiece Workholding Techniques for CNC",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "9 min",
    "materials": [
      "Painter's Tape",
      "CA Glue with Activator",
      "M6 T-Track Clamps"
    ],
    "tools": [
      "Genmitsu CNC Router",
      "T-Slot Aluminum Bed",
      "Microfiber Cloth"
    ],
    "summary": "Explore key workholding strategies—including hold-down clamps, painter's tape with CA glue, and low-profile painter tape grids—for zero-shift stability.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Use Mechanical T-Track Clamps",
        "detail": "Position step clamps at four corners on raw timber stock, ensuring toolpaths have at least 10mm clearance from clamp bodies."
      },
      {
        "title": "Apply Painter's Tape & CA Glue Method",
        "detail": "Apply blue painter's tape to both the spoilboard and workpiece bottom surface. Apply medium CA glue on top of one tape strip and spray activator on the other."
      },
      {
        "title": "Press and Bond Workpiece",
        "detail": "Firmly press stock down for 15 seconds to form a rigid, thin bond ideal for flat profile cutout operations without external clamps."
      },
      {
        "title": "Verify Hold Security",
        "detail": "Attempt to twist the workpiece manually. If any movement is felt, re-apply holding mechanism completely."
      }
    ],
    "proTips": [
      "Clean the spoilboard and material with isopropyl alcohol before using tape to maximize adhesion strength.",
      "The tape-and-CA-glue method leaves no residue and completely eliminates the need for holding tabs on shallow stock."
    ],
    "safety": "Insecure workpieces can throw debris or break end mills; always confirm full holding force before pressing cycle start."
  },
  {
    "id": "setting-xyz-zero-coordinates",
    "title": "How to Zero XYZ Work Coordinates Accurately",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "6 min",
    "materials": [
      "Standard Copy Paper Sheet",
      "Conductive Z-Probe Block"
    ],
    "tools": [
      "Genmitsu CNC Machine",
      "Genmitsu Z-Probe Touch Plate",
      "Candle Controller Software"
    ],
    "summary": "Master setting initial work coordinate offsets using paper thickness touch-methods and automated Genmitsu Z-probe tools for flawless cutting depth.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Set X and Y Work Zero",
        "detail": "Jog the spindle center directly over the front-left corner of your material and hit 'Zero XY' in your control software."
      },
      {
        "title": "Manual Paper Method for Z-Zero",
        "detail": "Place a thin sheet of paper between workpiece and bit. Lower Z in 0.1mm steps until the paper slightly grabs when tugged, then click 'Zero Z'."
      },
      {
        "title": "Connect Automatic Z Probe",
        "detail": "Attach probe magnet to the spindle collet, place aluminum block on top of workpiece, and ensure probe circuit tests positive."
      },
      {
        "title": "Execute Probe Command",
        "detail": "Click Z-Probe in Candle software. The bit will descend, touch the metal block, retract automatically, and register exact zero compensated for block thickness."
      }
    ],
    "proTips": [
      "Always verify magnet contact on metal collet prior to running probing routines to prevent tool crash into the block.",
      "For projects requiring exact top layer depth across stock variation, zero Z to the spoilboard instead of material top."
    ],
    "safety": "Keep hands clear of axes during automated probing command sequences."
  },
  {
    "id": "v-carving-custom-wooden-sign",
    "title": "Carving a Custom Wooden Nameplate with V-Bit Engraving",
    "category": "Project",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "12 min",
    "materials": [
      "Hardwood Blank (Oak or Cherry, 200x100x15mm)",
      "Dark Wood Stain",
      "Clear Polyurethane Spray"
    ],
    "tools": [
      "Genmitsu 3018 or PROVerXL",
      "60 Degree V-Carve Bit (1/8 Shank)",
      "Sandpaper (120, 220, 400 Grit)"
    ],
    "summary": "Create a carved hardwood desk sign with crisp lettering using V-carve toolpaths and contrast painting techniques.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Design Vector Graphic and Text",
        "detail": "Create design in software using crisp vector fonts. Generate a V-Carve toolpath specifying a 60-degree V-bit angle."
      },
      {
        "title": "Mount Material and Zero Machine",
        "detail": "Clamp hardwood flat to bed. Zero XYZ relative to material top surface center or lower-left corner."
      },
      {
        "title": "Run V-Carve Toolpath",
        "detail": "Execute G-Code at 10,000 RPM spindle speed and 600 mm/min feed rate, allowing variable Z depths to form sharp corners."
      },
      {
        "title": "Paint and Finish Detail",
        "detail": "Lightly seal surface with clear coat, paint deep carved grooves with acrylic paint, and sand top surface flush after dry."
      }
    ],
    "proTips": [
      "Apply a coat of sand-sanding sealer before carving to prevent acrylic paint from bleeding into raw wood fibers.",
      "V-carving depth changes automatically with vector width; make sure narrow letters aren't so small they disappear."
    ],
    "safety": "Ensure workpiece clamps do not collide with high Z-clearance rapid moves during V-bit retractions."
  },
  {
    "id": "milling-25d-pockets-and-islands",
    "title": "Machining 2.5D Pockets and Islands in Wood",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "10 min",
    "materials": [
      "Walnut or Maple Wood Block",
      "Wood Glue"
    ],
    "tools": [
      "Genmitsu CNC Router",
      "1/8 Inch 2-Flute Flat End Mill",
      "1/16 Inch Flat End Mill for Details"
    ],
    "summary": "Learn to execute clean multi-depth pocket paths while leaving raised text or logos (islands) intact inside recessed regions.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Define Pocket Geometry",
        "detail": "In CAM software, select outer boundary vectors and inner island vectors, setting a total depth of cut to 6mm."
      },
      {
        "title": "Set Stepover and Pass Depth",
        "detail": "Set stepover to 45% of bit diameter (1.4mm) and depth per pass to 1.5mm to allow multi-pass clearing."
      },
      {
        "title": "Execute Roughing Pocket",
        "detail": "Cut initial recess with 1/8 inch bit at 900 mm/min feed rate to clear out high-volume waste around islands."
      },
      {
        "title": "Perform Detail Rest Machining",
        "detail": "Switch bit to 1/16 inch flat end mill to clean up tight internal corners around raised island geometry."
      }
    ],
    "proTips": [
      "Use helical or ramp entry instead of straight plunging to protect end mill tip and extend cutter life.",
      "Always vacuum out deep pockets between roughing and finishing passes to stop chip recutting."
    ],
    "safety": "Keep hands out of working volume while clearing chips; use brush or vacuum nozzle only when paused."
  },
  {
    "id": "milling-acrylic-without-melting",
    "title": "Precision Milling Acrylic Sheets Without Edge Melting",
    "category": "Skill",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "11 min",
    "materials": [
      "Cast Acrylic Sheet (1/4 inch thickness)",
      "Double-Sided Tape"
    ],
    "tools": [
      "Genmitsu CNC Router Machine",
      "Single Flute 'O-Flute' Upcut Carbide Bit",
      "Air Blast Nozzle / Compressor"
    ],
    "summary": "Discover proper feed rates, spindle speed combinations, and bit selection to achieve flame-smooth acrylic edges without material melting.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Select Cast vs Extruded Acrylic",
        "detail": "Always choose Cast Acrylic over Extruded Acrylic; cast material has higher melting thresholds and cuts clean chips."
      },
      {
        "title": "Mount with Single Flute O-Flute Bit",
        "detail": "Install single-flute end mill to allow maximum chip clearance space per rotation, reducing friction heating."
      },
      {
        "title": "Configure High Feed and Moderate RPM",
        "detail": "Set spindle speed to 8,000-9,000 RPM and feed rate relatively fast (1200 mm/min) with 0.8mm depth per pass."
      },
      {
        "title": "Apply Continuous Compressed Air Blast",
        "detail": "Direct focused air stream onto bit tip during machining to clear chips immediately before friction heat mounts."
      }
    ],
    "proTips": [
      "Extruded acrylic will melt and re-weld behind bit; cast acrylic creates hard, dry granular chips.",
      "If edges appear frosty, perform a single finishing pass of 0.2mm depth at fast speed."
    ],
    "safety": "Flying plastic chips carry high static charges and travel far; wear safety goggles at all times."
  },
  {
    "id": "engraving-aluminum-plates",
    "title": "Light Engraving and Slotting Soft Aluminum Plates",
    "category": "Project",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "14 min",
    "materials": [
      "6061-T6 Aluminum Sheet (2mm thick)",
      "Cutting Fluid / WD-40 Lubricant"
    ],
    "tools": [
      "Genmitsu CNC Machine (PROVerXL or 3020-PRO)",
      "1-Flute or 2-Flute DLC Coated Carbide Bit",
      "Rigid Clamping Set"
    ],
    "summary": "Master basic aluminum non-ferrous metal machining on desktop Genmitsu mills through proper lubrication, rigid setups, and conservative parameters.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Ensure Total Workpiece Rigidity",
        "detail": "Secure metal sheet tightly using multiple direct hold-down clamps close to cut geometry to stop high-frequency chatter vibration."
      },
      {
        "title": "Configure Conservative Cut Parameters",
        "detail": "Set depth of cut to 0.15mm per pass, spindle speed to max (10,000 RPM), and feed rate to 400-500 mm/min."
      },
      {
        "title": "Apply Continuous Lubrication",
        "detail": "Spray WD-40 or non-ferrous cutting fluid along toolpath lines to prevent aluminum chip welding to end mill flutes."
      },
      {
        "title": "Monitor Operation and Clean Cuts",
        "detail": "Run toolpath, pausing if sound shifts to sharp squealing, and deburr sharp edge aluminum burrs with de-burring hand tool."
      }
    ],
    "proTips": [
      "Single-flute bits offer maximum chip relief space preventing gummy aluminum built-up edge (BUE).",
      "Never run metal dry; chip accumulation will break small carbide tools almost instantly."
    ],
    "safety": "Sharp aluminum burrs cause skin cuts; wear cut-resistant gloves when handling freshly cut metal parts."
  },
  {
    "id": "carving-a-3d-relief-sculpture",
    "title": "3D Relief Carving Techniques in Hardwood",
    "category": "Project",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "15 min",
    "materials": [
      "Cherry or Walnut Hardwood Block (150x150x25mm)",
      "Danish Oil or Paste Wax Finish"
    ],
    "tools": [
      "Genmitsu CNC Router",
      "1/8 Inch Flat End Mill (Roughing)",
      "1/16 Inch Ball Nose Bit (Finishing)",
      "3D Model File (STL format)"
    ],
    "summary": "Transform 3D STL mesh files into detailed wooden relief carvings using roughing and fine finishing ball-nose toolpaths.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Import STL and Set Model Heights",
        "detail": "Load 3D mesh model into CAM program (3D Relief module). Center design and leave 2mm floor buffer above spoilboard."
      },
      {
        "title": "Calculate 3D Roughing Pass",
        "detail": "Generate 3D roughing path using 1/8 flat end mill with 1.5mm stepdown and 50% stepover to remove bulk stock rapidly."
      },
      {
        "title": "Calculate 3D Finishing Pass",
        "detail": "Generate 3D raster finishing path with 1/16 ball nose end mill, applying tiny 8% to 10% stepover for smooth surface curvature."
      },
      {
        "title": "Execute Two-Stage Machining",
        "detail": "Run roughing pass, perform bit change, re-zero Z axis accurately with Z-probe, and run fine finishing toolpath."
      }
    ],
    "proTips": [
      "Smaller stepovers (8% or lower) eliminate hand sanding, preserving tight details on intricate facial contours.",
      "Raster along grain direction during finishing pass to achieve maximum surface smoothness."
    ],
    "safety": "3D reliefs require multi-hour runtimes; monitor motor temperatures regularly during long jobs."
  },
  {
    "id": "hardwood-brass-inlay-coasters",
    "title": "Precision Wood and Resin/Brass Inlay Coaster Creation",
    "category": "Project",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "13 min",
    "materials": [
      "Walnut Lumber (100x100x10mm)",
      "Brass Sheet / Epoxy Resin",
      "Epoxy Adhesive"
    ],
    "tools": [
      "Genmitsu CNC Router",
      "1/8 Inch Flat End Mill",
      "1/16 Inch Flat End Mill",
      "Sandpaper (180 to 800 Grit)"
    ],
    "summary": "Learn precise pocket fitting tolerances required for mating wooden or metallic inlays smoothly into hardwood surfaces.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Design Pocket and Plug Vectors",
        "detail": "Create pocket artwork on substrate piece and mirror vector image for plug workpiece if using angled pocket techniques."
      },
      {
        "title": "Cut Pocket in Base Wood",
        "detail": "Pocket base walnut material to depth of 3mm using 1/16 inch end mill for detailed interior corners."
      },
      {
        "title": "Mill Inlay Plug Component",
        "detail": "Cut inlay component material with a -0.1mm clearance tolerance allowance offset for tight push fit."
      },
      {
        "title": "Glue, Clamp, and Flush Cut",
        "detail": "Press inlay material into pocket with glue, clamp overnight, and mill top layer flat with surfacing toolpath."
      }
    ],
    "proTips": [
      "Apply 0.1mm negative vector offset on inlay male plug to accommodate epoxy film thickness.",
      "Always level glue surfaces before running flattening passes to avoid bit gumming."
    ],
    "safety": "Wear eye protection and dust mask during sanding step to block fine epoxy resin particulates."
  },
  {
    "id": "profile-cutting-and-holding-tabs",
    "title": "Mastering Profile Cutouts and Custom Holding Tabs",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "7 min",
    "materials": [
      "Birch Plywood (6mm thickness)"
    ],
    "tools": [
      "Genmitsu CNC Router",
      "1/8 Inch Downcut End Mill",
      "Flush Trim Hand Saw / Chisel"
    ],
    "summary": "Prevent parts from breaking loose during full cutout profiles by strategic tab placement and multi-pass profiling.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Design Outer Contour Vector",
        "detail": "Set up profile cut outside toolpath line in CAM software with total cut depth equal to stock thickness plus 0.2mm."
      },
      {
        "title": "Add Strategic Holding Tabs",
        "detail": "Place 3 to 4 holding tabs (4mm wide, 1.5mm tall) along non-critical straight edges of cut geometry."
      },
      {
        "title": "Set Downcut Toolpath Parameters",
        "detail": "Use 1/8 downcut end mill with 1.5mm pass depth to maintain down-pressure and splinter-free surface edges."
      },
      {
        "title": "Separate and Trim Part",
        "detail": "Remove job board, slice holding tabs carefully with flush-cut hand saw, and sand tab locations flat."
      }
    ],
    "proTips": [
      "3D triangular tabs are faster to cut than rectangular tabs because the Z-axis stays in continuous motion.",
      "Avoid placing tabs on delicate external corners or tight inner radius curves."
    ],
    "safety": "Parts without holding tabs will catch bit rotational force near final depth pass and launch across the room."
  },
  {
    "id": "milling-pcbs-copper-cladding",
    "title": "Milling Custom Printed Circuit Boards (PCBs)",
    "category": "Project",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "14 min",
    "materials": [
      "FR-1 Single/Double Sided PCB Blank",
      "Double-Sided Tape"
    ],
    "tools": [
      "Genmitsu 3018-PRO CNC",
      "30-Degree 0.1mm V-Tip PCB Engraving Bit",
      "1mm Corn Cob Cut Drill Bit",
      "Software Bed Auto-Leveler (Candle)"
    ],
    "summary": "Produce custom circuit boards on your Genmitsu mill using copper isolation routing, electronic auto-leveling, and hole drilling.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Prepare PCB Blank Stock",
        "detail": "Attach non-flexible FR-1 PCB sheet tightly to spoilboard using double-sided carpet tape to prevent height flexing."
      },
      {
        "title": "Perform Height Map Auto-Leveling",
        "detail": "Connect probe wires to copper board. Run Candle software Height Map probe grid (10x10) to map board height variations."
      },
      {
        "title": "Run Isolation Engraving Pass",
        "detail": "Execute isolation routing code using 0.1mm 30-degree V-bit at shallow 0.05mm depth utilizing applied height map matrix."
      },
      {
        "title": "Drill Holes and Profile Cut",
        "detail": "Swap bit to 1.0mm corn cob drill bit to bore component pad holes, then cut PCB perimeter boundary."
      }
    ],
    "proTips": [
      "Use FR-1 boards instead of FR-4 glass fiber; FR-4 dulls carbide bits rapidly and produces toxic dust.",
      "Always auto-level height maps because copper clad variations of even 0.03mm drastically widen isolation cuts."
    ],
    "safety": "Do not breathe dust generated by circuit board substrates; use vacuum collection during milling."
  },
  {
    "id": "dust-collection-and-enclosures",
    "title": "Setting Up Dust Boots and Enclosures for Genmitsu CNCs",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "8 min",
    "materials": [
      "Flexible Vacuum Hose",
      "Acrylic / Polycarbonate Sheets for Enclosure",
      "3D Printed Dust Shoe Assembly"
    ],
    "tools": [
      "Genmitsu Desktop CNC",
      "Shop Vacuum / HEPA Extractor",
      "Screwdriver Set"
    ],
    "summary": "Learn how to build and mount effective dust extraction boots and clear enclosures to reduce airborne particulate matter and damp acoustics.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Select Right Dust Shoe Geometry",
        "detail": "Choose transparent split-brush dust boot compatible with Genmitsu 42mm/52mm spindle mounts for high visibility."
      },
      {
        "title": "Install Brush Clearance",
        "detail": "Adjust brush skirt height so bristles compress slightly against wood before bit engages material."
      },
      {
        "title": "Route Hose Overhead",
        "detail": "Suspend vacuum hose overhead with elastic cords to avoid drag strain on Genmitsu X and Z carriage axes."
      },
      {
        "title": "Enclose Machine Base",
        "detail": "Place CNC inside clear acrylic box enclosure lined with acoustic foam to control chip scatter and lower decibels."
      }
    ],
    "proTips": [
      "Ground your vacuum hose with conductive wire to prevent static discharge from resetting CNC control boards.",
      "Avoid heavy hoses hanging off carriage, as off-center weight causes skipped steps on small NEMA17 stepper motors."
    ],
    "safety": "Uncontrolled dust build-up inside CNC electronics boxes can cause thermal short circuits or motor overheating."
  },
  {
    "id": "two-sided-flip-machining",
    "title": "Precision Two-Sided Flip Machining with Dowel Pins",
    "category": "Skill",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "12 min",
    "materials": [
      "Hardwood Blank (20mm thickness)",
      "6mm Wooden Alignment Dowel Pins"
    ],
    "tools": [
      "Genmitsu CNC Machine",
      "1/4 Inch or 1/8 Inch Flat End Mill",
      "Spoilboard with Grid Holes"
    ],
    "summary": "Master indexing techniques using asymmetry dowel pins to mill 3D objects accurately on both top and bottom sides.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Establish Asymmetric Dowel Holes",
        "detail": "In CAM software, place two 6mm alignment dowel holes along absolute center axis outside design perimeter."
      },
      {
        "title": "Mill Dowel Holes in Spoilboard and Material",
        "detail": "Drill dowel holes through workpiece block into spoilboard base in one operation, inserting tight wooden pins."
      },
      {
        "title": "Execute Side A Machining",
        "detail": "Run toolpaths for Side A face (pockets, contours, 3D relief details) referencing home coordinate origin."
      },
      {
        "title": "Flip Workpiece and Run Side B",
        "detail": "Remove stock, flip horizontally over dowels, re-clamp stock, load Side B toolpath program, and execute."
      }
    ],
    "proTips": [
      "Mirror design vectors in software precisely around geometric center axis used for hardware dowel pin placement.",
      "Keep dowels far apart to minimize slight angular alignment registration errors across length."
    ],
    "safety": "Ensure dowel pins sit completely below cutting depth plane so end mill flutes never collide with pins."
  },
  {
    "id": "carving-a-wooden-valet-tray",
    "title": "Carving a Wooden Catchall Valet Tray",
    "category": "Project",
    "difficulty": "Beginner",
    "laserType": "Project",
    "readTime": "11 min",
    "materials": [
      "Walnut or Hard Maple Block (250x150x25mm)",
      "Mineral Oil / Beeswax Polish"
    ],
    "tools": [
      "Genmitsu 3020-PRO or PROVerXL",
      "1/4 Inch Bowl and Tray Router Bit",
      "1/8 Inch Flat End Mill"
    ],
    "summary": "Design and cut a hardwood valet catchall tray featuring smoothly rounded interior dish pockets using specialty bowl bits.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Create Multi-Pocket Layout",
        "detail": "Design dish geometry featuring separate compartments for keys, wallet, and phone in CAD program."
      },
      {
        "title": "Rough Pocket Recesses",
        "detail": "Clear main volume of compartments leaving 1mm floor stock using 1/8 inch flat end mill at 1000 mm/min."
      },
      {
        "title": "Finish Pocket Floors with Bowl Bit",
        "detail": "Run smooth finishing path using radius-corner bowl & tray bit to form soft 3mm curved bottom fillets."
      },
      {
        "title": "Chamfer Edges and Apply Polish",
        "detail": "Run 45-degree chamfer path along top outer rim, sand to 320 grit, and treat with food-safe beeswax finish."
      }
    ],
    "proTips": [
      "Bowl bits require slower plunge rates due to larger surface contact areas on curved bit shoulders.",
      "Ramp entering into pockets eliminates burn marks in hardwood pocket corners."
    ],
    "safety": "Clamp workpiece directly to aluminum bed slots using heavy T-track clamps; deep pocket forces are significant."
  },
  {
    "id": "finger-joint-mdf-boxes",
    "title": "Making Joinery Finger Boxes with CNC Routers",
    "category": "Project",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "13 min",
    "materials": [
      "6mm Baltic Birch Plywood",
      "PVA Wood Glue"
    ],
    "tools": [
      "Genmitsu CNC Router Machine",
      "1/8 Inch Single Flute Downcut Bit",
      "Rubber Mallet"
    ],
    "summary": "Learn how to calculate dogbone and T-bone corner fillets to overcome tool radius limitations when cutting interlocking box joints.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Design Finger Joint Geometry",
        "detail": "Generate box panels with matching interlocking fingers equal to board material thickness (6mm)."
      },
      {
        "title": "Add Dogbone Overcuts to Inside Corners",
        "detail": "Place dogbone fillets on internal sharp corners in CAM software to clear space for round cutter bit radiuses."
      },
      {
        "title": "Cut Panels with Downcut End Mill",
        "detail": "Profile panels out using 1/8 inch downcut end mill to guarantee crisp veneer edges without tearout."
      },
      {
        "title": "Dry Fit and Assemble",
        "detail": "Test fit joints using rubber mallet, apply PVA glue to mating fingers, clamp box, and allow glue cure."
      }
    ],
    "proTips": [
      "Without dogbone corner relief overcuts, round bit geometry prevents square finger box tabs from fitting together flush.",
      "Measure board thickness with digital calipers; true plywood stock thickness rarely matches nominal labeled dimensions."
    ],
    "safety": "Keep fingers clear when dry-fitting tight box tabs; wood edges can pinch or split unexpectedly."
  },
  {
    "id": "milling-a-custom-brass-stamp",
    "title": "Precision Milling a Custom Brass Branding Stamp",
    "category": "Project",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "15 min",
    "materials": [
      "360 Free-Cutting Brass Block (25x25x10mm)",
      "Threaded Steel Handle / Rod"
    ],
    "tools": [
      "Genmitsu CNC Machine (PROVerXL/3020)",
      "1/8 Inch Flat End Mill (Roughing)",
      "0.5mm Tapered Ball Nose Bit (Finishing)",
      "Cutting Fluid"
    ],
    "summary": "Mill high-detail brass heat branding stamps with mirrored 3D vector artwork and deep relief clearances.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Prepare and Mirror Artwork",
        "detail": "Import logo or text vectors into software and horizontal mirror image so stamp impression reads correctly."
      },
      {
        "title": "Secure Brass Stock in Vise",
        "detail": "Mount brass block firmly in precision machinist vise bolted securely down to Genmitsu bed extrusion."
      },
      {
        "title": "Execute Deep Clearance Pocketing",
        "detail": "Clear unneeded background brass to 2mm depth around mirrored artwork with 1/8 flat bit at slow 250 mm/min feed."
      },
      {
        "title": "Detail Artwork Walls with Tapered Bit",
        "detail": "Run fine detail pass using 0.5mm radius tapered ball nose bit to form draft angle reinforcement on small letters."
      }
    ],
    "proTips": [
      "360 brass machines smoothly dry, but applying light fluid drops drastically extends bit tip life.",
      "Draft angles (tapered bit walls) prevent small metal letters from snapping under hot stamp pressure."
    ],
    "safety": "Brass hot-chips fly fast; always run enclosure door shut or wear full face shield."
  },
  {
    "id": "tramming-genmitsu-cnc-spindle",
    "title": "How to Tram and Align your CNC Spindle Axis",
    "category": "Skill",
    "difficulty": "Intermediate",
    "laserType": "CNC",
    "readTime": "10 min",
    "materials": [
      "Shimming Stock (0.05mm - 0.1mm Brass/Steel Strip)"
    ],
    "tools": [
      "Genmitsu CNC Router",
      "Dial Indicator with Spindle Mounting Bar",
      "Hex Wrench Set",
      "Glass Plate Ground Flat"
    ],
    "summary": "Eliminate unsightly ridges and ridges on pocket bottoms by squaring (tramming) your Z-axis spindle perpendicular to the bed.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Place Flat Reference Glass on Bed",
        "detail": "Set perfectly flat ground glass plate onto center spoilboard bed area."
      },
      {
        "title": "Mount Dial Indicator Rig",
        "detail": "Attach dual-point tramming bar or single dial indicator to spindle collet, extending stem 75mm out off-center."
      },
      {
        "title": "Sweep Indicator along X and Y Axes",
        "detail": "Lower Z axis until gauge pin reads contact. Rotate spindle manually 360 degrees, recording height variances across X and Y arcs."
      },
      {
        "title": "Adjust Carriage and Shim Spindle Mount",
        "detail": "Loosen spindle mount bolts and insert precision metal shim stock behind mount plate until sweep variation drops below 0.05mm."
      }
    ],
    "proTips": [
      "Even a tiny 0.2-degree tilt in spindle alignment causes visible step lines when using wide flattening bits.",
      "Always tram machine frame structures first before attempting to surface new spoilboards."
    ],
    "safety": "Disconnect power to spindle motor control before spinning indicator rig manually by hand."
  },
  {
    "id": "genmitsu-maintenance-and-belt-tensioning",
    "title": "Routine Maintenance and Belt Tensioning for Genmitsu CNCs",
    "category": "Skill",
    "difficulty": "Beginner",
    "laserType": "CNC",
    "readTime": "8 min",
    "materials": [
      "3-in-1 Machine Oil / PTFE Dry Lube",
      "Isopropyl Alcohol",
      "Cleaning Rags"
    ],
    "tools": [
      "Genmitsu 3018 / 4030 CNC Machine",
      "Metric Allen Wrench Key Set",
      "Belt Tension Gauge / Ruler"
    ],
    "summary": "Keep your Genmitsu machine running accurately with regular maintenance routines: lead-screw lubrication, belt tensioning, and axis checks.",
    "image": IMG.lab,
    "steps": [
      {
        "title": "Clean Guide Rods and Lead Screws",
        "detail": "Wipe away wood dust and chips from linear guide rods and T8 lead screws using alcohol wipes."
      },
      {
        "title": "Lubricate Lead Screws and Bearings",
        "detail": "Apply PTFE dry lube or light machine oil to brass anti-backlash nuts and stainless steel lead screws."
      },
      {
        "title": "Check and Adjust GT2 Belt Tension",
        "detail": "Pluck timing belts on X/Y axes: they should produce a low musical tone when flicked, without sagging or stretching tight."
      },
      {
        "title": "Inspect Frame Fasteners and Couplers",
        "detail": "Check grub screws on flexible motor shaft couplers and tighten all frame corner bracket bolts."
      }
    ],
    "proTips": [
      "Avoid heavy grease on open lead screws; grease attracts sawdust and creates abrasive grinding paste.",
      "Loose coupler set-screws are the single most common cause of sudden lost steps and offset layer cuts."
    ],
    "safety": "Disconnect power adapter completely before wiping moving mechanical parts or applying spray lubricants."
  }
];