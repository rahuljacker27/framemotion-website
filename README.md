# Framemotion — Cinematic Creative Agency Portfolio

An ultra-modern, dark-mode, video-first digital cinematic experience designed for **Framemotion**, a high-end creative agency specializing in commercial cinematography, 9:16 social media reels, and editorial visual storytelling.

---

## 🌟 Highlights & Key Features

- **Instant Zero-Setup Preview**: Open `index.html` directly in any web browser (Safari, Chrome, Arc, Edge) with full React 18, Tailwind CSS, custom fonts, interactive audio synthesis, and video streaming.
- **Vite & Modular React Project**: Complete `src/` modular components (`Navbar`, `Hero`, `SelectedWork`, `ScenicGallery`, `ServicesProcess`, `CollaborateFooter`, `ShowreelModal`, `ReelModal`, `LightboxModal`, `CustomCursor`, `AudioEngine`).
- **Web Audio API Soundscape**: Dynamic, synthesized binaural cinematic drone pad (dual low-frequency oscillators with automated LFO filter sweep) requiring zero external audio file dependencies.
- **Cinematic Camera HUD Reticle**:
  - Live 24fps ticking timecode (`00:00:06:35` → `00:09:33:38`)
  - Blinking `REC [•]` recording indicator
  - Viewfinder corner brackets (`┌ ┐ └ ┘`)
  - 2.39:1 Anamorphic cinema scope letterbox mode toggle
  - Custom camera reticle crosshair cursor with contextual hover cues
- **Vertical 9:16 Masonry Grid ("The Social & Short-form Lab")**:
  - Seamless category filters with sliding state ("All", "Commercial", "Reels", "Narrative")
  - Native 9:16 aspect ratio vertical cards with neon cyan hover borders
  - Hover silent preview video playback with pulsing play badge
  - Interactive 9:16 full-screen social reel player modal with duration, director credits, and view count
- **Scenic & Landscapes ("Editorial Imagery")**:
  - Asymmetric medium-format photographic masonry with abundant negative space
  - Aurelia Vance x Framemotion series markers
  - Click-to-inspect darkroom lightbox with full EXIF data (camera model, lens, exposure, ISO)
- **3-Column Production Pipeline & Services**:
  - Phase 01: Pre-Production & Creative Treatment
  - Phase 02: Cinematography & Event Coverage (ARRI / RED / FPV)
  - Phase 03: Post-Production, ACES Color Grading & Dolby Atmos VFX
- **Interactive Collaboration Terminal**:
  - Dynamic inquiry form (Project Type dropdown, Budget range, Narrative brief)
  - Live studio timezone tracking clock & active hub status (Los Angeles, Tokyo, London)
  - Pulsing neon cyan submit state with animated transmission feedback

---

## 🎨 Global Design & Style Tokens

| Token | Hex / Value | Purpose |
|---|---|---|
| **Pitch Black** | `#050505` | Primary cinematic backdrop |
| **Deep Charcoal** | `#0F0F11` | Secondary elevation / card surface |
| **Surface Dark** | `#151518` | Interactive glass panels and inputs |
| **Neon Cyan / Teal** | `#00f2fe` | Primary highlight, glowing borders, active state |
| **Electric Purple** | `#7f00ff` | Secondary hover accents, gradient flares |
| **REC Red** | `#ff0055` | Camera recording indicator, pulsing status dots |
| **Display Font** | `Syne` / `Playfair Display` | High-contrast expressive motion headings |
| **Body Font** | `Inter` | Clean, modern UI copy |
| **Camera HUD Font** | `Space Mono` | Timecodes, frame rates, lens specs, EXIF |

---

## 🚀 How to Run & Preview

### Option 1: Instant Standalone (Recommended)
Simply double-click or open `index.html` in your browser. All styles, fonts, icons, React logic, and media playback run immediately with zero installation.

```bash
# On macOS:
open index.html
```

### Option 2: Vite Development Server (when Node.js is installed)
```bash
# Install dependencies
npm install

# Start Vite hot-reload server
npm run dev

# Build for production
npm run build
```

---

## 📁 File Structure

```text
ritikwebsite/
├── index.html                   # Standalone production single-page application
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Custom Tailwind theme tokens & animations
├── vite.config.js               # Vite build configuration
├── README.md                    # Project documentation
└── src/
    ├── main.jsx                 # React DOM mount
    ├── App.jsx                  # Main application orchestrator
    ├── index.css                # Global styles, fonts & film grain
    └── components/
        ├── Navbar.jsx           # Top header, camera timecode, audio & scope toggles
        ├── Hero.jsx             # Cinematic full-bleed video hero, play reel CTA
        ├── SelectedWork.jsx     # 9:16 vertical masonry grid & category filters
        ├── ScenicGallery.jsx    # Editorial landscape masonry & EXIF metadata
        ├── ServicesProcess.jsx  # 3-column production services & turnaround timeline
        ├── CollaborateFooter.jsx# Interactive dynamic form, timezone clock & socials
        ├── ShowreelModal.jsx    # Fullscreen 4K showreel player
        ├── ReelModal.jsx        # 9:16 vertical social video player modal
        ├── LightboxModal.jsx    # High-resolution photographic darkroom zoom
        ├── CustomCursor.jsx     # Cinema crosshair reticle cursor
        └── AudioEngine.js       # Web Audio API ambient drone synthesizer
```

---

© 2026 Framemotion Studios Inc. Directed by Emotion.
