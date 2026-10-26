import React from 'react';

export default function Hero({ onOpenReel, onScrollToWork }) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 saturate-[0.85] transition-transform duration-[10000ms] ease-out hover:scale-100"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fog-over-the-mountain-peaks-42998-large.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-mist-in-the-mountains-2746/1080p.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/60 to-pitch/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-pitch/80 via-transparent to-pitch/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-pitch/40 to-pitch"></div>
      </div>

      {/* Camera Viewfinder Corner Grid Brackets */}
      <div className="pointer-events-none absolute inset-3 sm:inset-12 z-20 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="text-neonCyan/40 font-mono text-[10px] sm:text-xs">
            <div>┌ [ 4K RAW ]</div>
            <div className="text-[9px] sm:text-[10px] text-white/30 hidden min-[400px]:block">LUT: ARRI_709_V3</div>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 bg-pitch/60 backdrop-blur-md px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-white/10 font-mono text-[10px] sm:text-xs">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-recRed animate-rec-blink"></span>
            <span className="font-bold tracking-widest text-white">REC</span>
            <span className="text-white/40">●</span>
            <span className="text-neonCyan tracking-wider text-[9px] sm:text-xs">00:04:12:18</span>
            <span className="text-white/30">┐</span>
          </div>
        </div>

        <div className="hidden sm:flex justify-between items-end">
          <div className="text-white/30 font-mono text-xs">
            <div>└ SENSOR: FULL FRAME 35MM</div>
            <div className="text-[10px] text-neonCyan/50">AUDIO: CH1 -18dB | CH2 -20dB</div>
          </div>
          <div className="text-white/30 font-mono text-xs text-right">
            <div>BATTERY: 94% [14.4V]</div>
            <div className="text-[10px]">FPS: 24.000 ┘</div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center my-auto">
        
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-surface/60 border border-white/10 backdrop-blur-md mb-6 animate-pulse-slow max-w-full">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neonCyan flex-shrink-0"></span>
          <span className="font-mono text-[9px] min-[360px]:text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white/80 truncate">
            A Creative Production House
          </span>
          <span className="text-white/30 text-xs">/</span>
          <span className="text-[9px] sm:text-[10px] font-mono text-neonCyan flex-shrink-0">EST. 2024</span>
        </div>

        {/* Expressive H1 */}
        <div className="relative mb-4 group cursor-default select-none max-w-full w-full flex items-center justify-center">
          <h1 className="font-syne font-black text-[clamp(2.1rem,9.3vw,11rem)] tracking-tight leading-none text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] break-normal">
            Framemotion
          </h1>
          <div className="absolute inset-0 font-serifExpressive italic font-bold text-[clamp(2.1rem,9.3vw,11rem)] tracking-tight leading-none text-transparent text-stroke-white opacity-20 pointer-events-none transform translate-y-0.5 sm:translate-y-1 flex items-center justify-center">
            Framemotion
          </div>
        </div>

        <p className="font-inter font-medium text-xs min-[380px]:text-sm sm:text-xl md:text-2xl tracking-[0.15em] sm:tracking-[0.25em] uppercase text-white/85 max-w-3xl mb-8 sm:mb-10 drop-shadow-md px-2">
          Every Frame Has Emotion
        </p>

        {/* Center Play Button Overlay */}
        <div className="my-2 mb-12 relative flex items-center justify-center">
          <button
            onClick={onOpenReel}
            data-cursor="PLAY REEL"
            className="relative group w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-pitch/70 border border-neonCyan/50 backdrop-blur-md flex items-center justify-center hover:scale-110 hover:border-neonCyan transition-all duration-300 shadow-[0_0_30px_rgba(0,242,254,0.3)] focus:outline-none"
          >
            <span className="absolute -inset-2 rounded-full border border-neonCyan/30 animate-ping opacity-60"></span>
            <span className="absolute -inset-4 rounded-full border border-electricPurple/20 animate-pulse"></span>
            
            <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white group-hover:border-l-neonCyan ml-1.5 transition-colors duration-200"></div>
            
            <svg className="absolute inset-0 w-full h-full animate-radar-spin pointer-events-none" viewBox="0 0 100 100">
              <path id="circlePathHero" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[7.5px] font-mono uppercase tracking-[0.22em] fill-white/50">
                <textPath xlinkHref="#circlePathHero">
                  • CINEMATIC SHOWREEL 2026 • 4K DCI •
                </textPath>
              </text>
            </svg>
          </button>
        </div>

        {/* Call to Actions */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenReel}
              data-cursor="PLAY"
              className="relative group overflow-hidden rounded-full p-[1.5px] focus:outline-none transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neonCyan via-electricPurple to-neonCyan rounded-full opacity-80 group-hover:opacity-100 blur-[2px] transition-all"></span>
              <span className="relative flex items-center gap-2.5 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-pitch transition-all duration-300 group-hover:bg-pitch/90 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white group-hover:text-neonCyan">
                <span className="w-2 h-2 rounded-full bg-neonCyan animate-ping"></span>
                <span>View Reel</span>
                <span className="text-white/40 group-hover:text-neonCyan font-mono">[02:14]</span>
              </span>
            </button>

            <button
              onClick={onScrollToWork}
              data-cursor="EXPLORE"
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full border border-white/20 hover:border-white/60 bg-white/[0.02] hover:bg-white/[0.08] backdrop-blur-sm text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-white transition-all duration-300"
            >
              Work
            </button>
          </div>

          <div className="hidden md:flex items-center gap-6 text-left font-mono text-xs text-white/50">
            <div>
              <div className="text-white font-bold text-sm">85M+</div>
              <div className="text-[10px] tracking-wider uppercase text-white/40">Organic Views</div>
            </div>
            <div className="w-[1px] h-6 bg-white/10"></div>
            <div>
              <div className="text-white font-bold text-sm">42+</div>
              <div className="text-[10px] tracking-wider uppercase text-white/40">Global Brands</div>
            </div>
            <div className="w-[1px] h-6 bg-white/10"></div>
            <div>
              <div className="text-neonCyan font-bold text-sm">8K RAW</div>
              <div className="text-[10px] tracking-wider uppercase text-white/40">Master Grading</div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div 
        onClick={onScrollToWork}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group focus:outline-none"
        data-cursor="SCROLL"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/40 group-hover:text-neonCyan transition-colors">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-neonCyan flex items-start justify-center p-1 transition-colors">
          <span className="w-1 h-2 rounded-full bg-neonCyan animate-bounce"></span>
        </div>
      </div>

    </section>
  );
}
