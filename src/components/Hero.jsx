import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Play, Sparkles } from 'lucide-react';

export default function Hero({ onOpenReel, onScrollToWork, onStartProduction }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const updateScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The scrollable distance inside this sticky track
      const scrollableDistance = rect.height - windowHeight;
      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      // rect.top is 0 at the start of hero and becomes negative as the user scrolls down
      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / scrollableDistance));
      setScrollProgress(progress);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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

  // Calculate dynamic dimensions for smooth shrink animation
  // Scales down to 95% width and 95% height, transitioning from sharp edges (0px) to rounded corners (28px)
  const currentWidth = 100 - scrollProgress * 5;
  const currentHeight = 100 - scrollProgress * 5;
  const currentRadius = scrollProgress * 28;

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      className="relative w-full h-[140vh] sm:h-[150vh] bg-black"
    >
      {/* Sticky Viewport Container: stays in the viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black z-10">
        
        {/* Hero Video Container with Scroll-Triggered Shrink Animation */}
        <div 
          className="relative overflow-hidden will-change-transform flex flex-col justify-between shadow-2xl transition-all duration-75 ease-out"
          style={{
            width: `${currentWidth}%`,
            height: `${currentHeight}%`,
            borderRadius: `${currentRadius}px`,
            border: scrollProgress > 0.02 ? '1px solid rgba(255, 255, 255, 0.16)' : '1px solid transparent',
            boxShadow: scrollProgress > 0.05 
              ? '0 30px 80px -15px rgba(0, 0, 0, 0.95), 0 0 45px rgba(0, 242, 254, 0.1)' 
              : 'none',
          }}
        >
          {/* Full-Screen Looping Background Video Layer - 100% Clear & Vibrant */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/dtdl%20cricket%20website%20upload.mp4" type="video/mp4" />
              <source src="./videos/dtdl%20cricket%20website%20upload.mp4" type="video/mp4" />
              <source src="videos/dtdl%20cricket%20website%20upload.mp4" type="video/mp4" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Subtle localized gradient only at the very top for navbar clarity */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
            {/* Subtle localized gradient only at the bottom for text contrast, leaving the video bright & clear */}
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>
          </div>

          {/* Cinematic Viewfinder HUD Overlay */}
          <div className="pointer-events-none relative z-10 w-full p-4 sm:p-8 md:p-10 flex justify-between items-start opacity-75">
            <div className="text-white/50 font-mono text-[10px] sm:text-xs tracking-widest">
              <div className="flex items-center gap-2">
                <span className="text-neonCyan">┌</span>
                <span className="font-bold text-white">[ 4K RAW ]</span>
                <span>CINEMATIC 2.39:1</span>
              </div>
              <div className="text-neonCyan/80 text-[9px] sm:text-[10px] mt-0.5 ml-3 font-mono">
                ARRI ALEXA LF // ANAMORPHIC GLASS
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 font-mono text-[10px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-recRed animate-rec-blink"></span>
              <span className="font-bold tracking-widest text-white">REC</span>
              <span className="text-white/30">|</span>
              <span className="text-neonCyan tracking-wider">00:04:12:18</span>
              <span className="text-white/40 hidden sm:inline">24.00 FPS</span>
              <span className="text-white/30">┐</span>
            </div>
          </div>

          {/* Large Bold Heading & Subheading Aligned to Bottom-Left of Hero Container */}
          <div className="relative z-20 w-full p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-end items-start text-left">
            
            {/* Cinematographer Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-md mb-4 sm:mb-6 hover:border-neonCyan/50 transition-colors shadow-lg">
              <span className="w-2 h-2 rounded-full bg-neonCyan animate-ping"></span>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/90">
                Director of Photography • Media Production
              </span>
              <Sparkles size={12} className="text-neonCyan" />
            </div>

            {/* Large, Bold Heading: 'the flow of culture' */}
            <h1 className="font-syne font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-[0.92] max-w-5xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] lowercase">
              the flow of culture<span className="text-neonCyan">.</span>
            </h1>

            {/* Brief Subheading Aligned to Bottom-Left */}
            <p className="mt-5 sm:mt-6 font-inter text-base sm:text-lg md:text-xl text-white/90 font-normal max-w-2xl leading-relaxed tracking-wide drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
              Framemotion is the visual studio of director & cinematographer. Framing human stories, commercial spectacles, and expedition cinema across the globe with 35mm depth and raw momentum.
            </p>

            {/* CTA & Interaction Controls Aligned to Bottom-Left */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary CTA: Watch Showreel */}
              <button
                onClick={onOpenReel}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-md bg-white hover:bg-neonCyan text-black font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5 group"
              >
                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={10} fill="currentColor" />
                </div>
                <span>Watch Showreel</span>
              </button>

              {/* Secondary CTA: Start Production */}
              <button
                onClick={handleStartCTA}
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-md bg-charcoal/80 hover:bg-charcoal text-white/90 hover:text-white border border-white/15 hover:border-neonCyan/60 font-mono text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300"
              >
                Start Production
              </button>

              {/* Scroll Down to 'Stories in Motion' */}
              <button
                onClick={handleScrollDown}
                className="hidden sm:inline-flex items-center gap-2 text-white/50 hover:text-neonCyan transition-colors font-mono text-xs tracking-wider uppercase ml-2 py-3"
                aria-label="Scroll to Stories in Motion"
              >
                <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center group-hover:border-neonCyan transition-colors">
                  <ArrowDown size={13} className="animate-bounce" />
                </span>
                <span>Stories in Motion</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
