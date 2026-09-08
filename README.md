# Laserhuis — Precision Laser Crafting & Engineering Hub

Laserhuis is a comprehensive web platform for laser engraving, cutting, and industrial marking. Designed for hobbyists, makers, and production workshops, it features tested material parameter databases, technical tutorials, hands-on hardware reviews, interactive utilities (Dithering Matrix Studio, Rotary Calculators), and an AI Laser Assistant powered by Gemini.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18 or higher
- **npm**: v9 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd laserhuis
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   Provide your Gemini API key in `.env` if you wish to run the AI Laser Assistant:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build & Production

To compile the application for production deployment:

```bash
npm run build
npm start
```

---

## ✨ Features

- 📐 **Material Settings Database**: Power, speed, pass, and air assist settings for Diode, CO2, and Fiber lasers with automatic wattage scaling.
- 🖼️ **Dithering Studio Guide**: Visual comparisons for JJN, Stucki, Atkinson, and Floyd-Steinberg photo dithering algorithms with material presets.
- ⌨️ **LightBurn Cheat Sheet**: Essential keyboard shortcuts, standard layer color conventions (C00-C02, T1/T2), and production vector cut order rules.
- 🛡️ **Laser Safety & Toxic Material Protocol**: Optical Density (OD6+) wavelength guide and strict safety ban list (PVC/Vinyl, Teflon, ABS).
- 🤖 **AI Laser Advisor**: Intelligent assistant powered by Gemini 3.6 Flash for instant parameter troubleshooting, focal depth advice, and LightBurn help.
- 👥 **Facebook Community Hub**: Official links and cheat sheets for 15,000+ laser makers.

---

## 📄 License

© 2026 Laserhuis.com — All rights reserved.
