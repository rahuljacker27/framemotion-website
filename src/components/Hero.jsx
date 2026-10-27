import React from 'react';
import { ArrowDown, Play, Sparkles } from 'lucide-react';

export default function Hero({ onOpenReel, onScrollToWork, onStartProduction }) {
  const handleScrollDown = () => {
    if (onScrollToWork) {
      onScrollToWork();
    } else {
      const target = document.getElementById('work');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartCTA = () => {
    if (onStartProduction) {
      onStartProduction();
    } else {
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black pt-24 pb-10">
      
      {/* Background Cinematic Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-125 saturate-[0.8] transition-transform duration-[12000ms] ease-out"
        >
          {/* Sweeping cinematic drone shots over Spiti Valley & Meghalaya rugged mountains */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fog-over-the-mountain-peaks-42998-large.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-mist-in-the-mountains-2746/1080p.mp4" type="video/mp4" />
        </video>

        {/* Darkening & Cinematic Vignette Overlays for Maximum Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>
      </div>

      {/* Cinematic Viewfinder HUD Overlay */}
      <div className="pointer-events-none absolute inset-4 sm:inset-10 z-10 flex flex-col justify-between opacity-70">
        <div className="flex justify-between items-start">
          <div className="text-white/40 font-mono text-[10px] sm:text-xs tracking-widest">
            <div>┌ [ 4K RAW ] CINEMATIC 2.39:1</div>
            <div className="text-neonCyan/70 text-[9px] sm:text-[10px] mt-0.5">LOCATION: SPITI VALLEY // 32.24° N, 78.03° E</div>
          </div>
          
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 font-mono text-[10px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-recRed animate-rec-blink"></span>
            <span className="font-bold tracking-widest text-white">REC</span>
            <span className="text-white/30">|</span>
            <span className="text-neonCyan tracking-wider">00:04:12:18</span>
            <span className="text-white/30">┐</span>
          </div>
        </div>

        <div className="hidden sm:flex justify-between items-end">
          <div className="text-white/40 font-mono text-[11px] tracking-widest">
            <div>└ SENSOR: ARRI ALEXA LF • 35MM FULL FRAME</div>
            <div className="text-[10px] text-white/30">LUT: EMOTION_DARK_HIGH_CONTRAST</div>
          </div>
          <div className="text-white/40 font-mono text-[11px] text-right tracking-widest">
            <div>FPS: 24.000 • SHUTTER: 180°</div>
            <div className="text-neonCyan/70 text-[10px]">PULSE LEVEL: OPTIMAL ┘</div>
          </div>
        </div>
      </div>

      {/* Center Screen Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center text-center my-auto">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 hover:border-neonCyan/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-neonCyan animate-ping"></span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/80">
            Enterprise Media Production
          </span>
          <Sparkles size={12} className="text-neonCyan" />
        </div>

        {/* Massive, screen-filling H1: "EVERY FRAME HAS EMOTION." */}
        <h1 className="font-syncopate font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight sm:tracking-wider uppercase text-white leading-[1.05] sm:leading-[1.0] max-w-5xl drop-shadow-2xl">
          EVERY FRAME <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 hover:to-neonCyan transition-all duration-500">
            HAS EMOTION.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 font-inter text-base sm:text-xl lg:text-2xl text-white/75 font-light max-w-3xl leading-relaxed tracking-wide">
          Capturing the pulse of travel, commercial storytelling, and the digital frontier.
        </p>

        {/* CTA Button Block */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Primary CTA: "Start the Production" (solid white button with black text) */}
          <button
            onClick={handleStartCTA}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-white hover:bg-neonCyan text-black font-semibold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Start the Production
          </button>

          {/* Secondary CTA: Watch Showreel */}
          <button
            onClick={onOpenReel}
            className="w-full sm:w-auto px-6 py-4 rounded-md bg-charcoal/80 hover:bg-charcoal text-white/90 hover:text-white border border-white/15 hover:border-neonCyan/60 font-mono text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            <div className="w-5 h-5 rounded-full bg-neonCyan/20 text-neonCyan flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={10} fill="currentColor" />
            </div>
            <span>Watch Showreel (2025)</span>
          </button>
        </div>

      </div>

      {/* Bottom: Subtle Bouncing Vertical Arrow indicating "Scroll to Flow" */}
      <div className="relative z-20 flex flex-col items-center justify-center mt-6">
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-2 text-white/50 hover:text-neonCyan transition-colors duration-300 focus:outline-none"
          aria-label="Scroll to Flow"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/60 group-hover:text-neonCyan transition-colors">
            Scroll to Flow
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-neonCyan flex items-center justify-center animate-bounce transition-colors">
            <ArrowDown size={14} className="text-white group-hover:text-neonCyan transition-colors" />
          </div>
        </button>
      </div>

    </section>
  );
}
