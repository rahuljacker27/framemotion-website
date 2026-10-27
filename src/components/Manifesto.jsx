import React, { useState } from 'react';
import { Eye, Zap, Flame, Compass } from 'lucide-react';

export default function Manifesto() {
  const [activeKeyword, setActiveKeyword] = useState(null);

  return (
    <section id="about" className="relative py-32 sm:py-44 bg-black overflow-hidden border-t border-b border-white/5">
      
      {/* Background Subdued Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neonCyan/[0.03] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Top Marker */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16 sm:mb-24">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-neonCyan rounded-full animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              The Manifesto // 03
            </span>
          </div>
          <div className="font-mono text-xs text-white/40 tracking-widest hidden sm:block">
            PHILOSOPHY & ETHOS
          </div>
        </div>

        {/* Massive 80% Width Typography Block */}
        <div className="w-full lg:w-[85%] mx-auto">
          <blockquote className="font-syncopate font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] text-white uppercase leading-[1.2] sm:leading-[1.18] tracking-tight">
            “We believe in the power of{' '}
            <span 
              onMouseEnter={() => setActiveKeyword('momentum')}
              onMouseLeave={() => setActiveKeyword(null)}
              className="text-neonCyan transition-all duration-300 relative inline-block cursor-default hover:drop-shadow-[0_0_25px_rgba(0,242,254,0.6)]"
            >
              visual momentum.
            </span>{' '}
            From asset-light quick-commerce campaigns to the{' '}
            <span 
              onMouseEnter={() => setActiveKeyword('himalayas')}
              onMouseLeave={() => setActiveKeyword(null)}
              className="text-white hover:text-neonCyan transition-colors duration-300 underline decoration-neonCyan/40 decoration-2 underline-offset-8 cursor-default"
            >
              highest peaks of the Himalayas,
            </span>{' '}
            Framemotion bridges the gap between{' '}
            <span className="text-white/60 hover:text-white transition-colors duration-300">
              raw reality
            </span>{' '}
            and{' '}
            <span 
              onMouseEnter={() => setActiveKeyword('perfection')}
              onMouseLeave={() => setActiveKeyword(null)}
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neonCyan to-white hover:drop-shadow-[0_0_20px_rgba(0,242,254,0.5)] cursor-default transition-all"
            >
              cinematic perfection.
            </span>”
          </blockquote>

          {/* Subtext Grid underneath */}
          <div className="mt-16 sm:mt-24 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-left">
            <div>
              <div className="font-mono text-xs text-neonCyan mb-2 uppercase tracking-widest flex items-center gap-2">
                <Zap size={14} />
                <span>Fluid Velocity</span>
              </div>
              <p className="font-inter text-sm text-white/60 font-light leading-relaxed">
                Every sequence is cut with rhythmic momentum, rejecting static tropes to keep viewers captivated across any medium.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs text-neonCyan mb-2 uppercase tracking-widest flex items-center gap-2">
                <Compass size={14} />
                <span>Expedition Ready</span>
              </div>
              <p className="font-inter text-sm text-white/60 font-light leading-relaxed">
                Lightweight, high-altitude production workflows capable of scaling from Spiti mountain passes to studio soundstages.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs text-neonCyan mb-2 uppercase tracking-widest flex items-center gap-2">
                <Flame size={14} />
                <span>Commercial Precision</span>
              </div>
              <p className="font-inter text-sm text-white/60 font-light leading-relaxed">
                Merging cinema-grade color science, generative AI pre-vis, and high-retention formats engineered for conversion.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
