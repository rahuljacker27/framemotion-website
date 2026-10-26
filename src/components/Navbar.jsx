import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenContact, onToggleLetterbox, letterboxActive, audioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timecode, setTimecode] = useState("00:00:06:35");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    let frame = 35;
    let sec = 6;
    let min = 0;
    const interval = setInterval(() => {
      frame++;
      if (frame >= 24) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
        }
      }
      const fStr = frame.toString().padStart(2, '0');
      const sStr = sec.toString().padStart(2, '0');
      const mStr = min.toString().padStart(2, '0');
      setTimecode(`00:${mStr}:${sStr}:${fStr}`);
    }, 1000 / 24);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-pitch/85 backdrop-blur-md border-b border-borderDark py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-pitch via-pitch/70 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo Wordmark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none" data-cursor="HOME">
            <div className="relative w-8 h-8 rounded-lg border border-neonCyan/40 bg-surface/80 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-neonCyan group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)]">
              <div className="w-4 h-3 border border-white/80 rounded-sm relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neonCyan"></div>
                <span className="absolute -top-1 -right-1 w-1 h-1 bg-recRed rounded-full animate-rec-blink"></span>
              </div>
              <span className="absolute top-0.5 left-0.5 text-[7px] font-mono text-neonCyan/50 leading-none">┌</span>
              <span className="absolute bottom-0.5 right-0.5 text-[7px] font-mono text-neonCyan/50 leading-none">┘</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-syne font-extrabold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-neonCyan group-hover:to-white transition-all">
                  Framemotion
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan animate-pulse"></span>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/40 -mt-1 hidden sm:block">
                Cinematic Studio
              </span>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-surface/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
            {[
              { name: 'Work', href: '#work' },
              { name: 'Scenic', href: '#scenic' },
              { name: 'Services', href: '#services' },
              { name: 'Process', href: '#process' },
              { name: 'Journal', href: '#journal' },
              { name: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                data-cursor="NAV"
                className="px-3.5 py-1 text-xs font-medium tracking-wider text-white/70 hover:text-white hover:text-neonCyan transition-colors rounded-full hover:bg-white/5"
              >
                [{item.name}]
              </a>
            ))}
          </nav>

          {/* Right: Actions & Button */}
          <div className="flex items-center gap-3">
            
            {/* Audio Ambience Toggle */}
            <button
              onClick={onToggleAudio}
              title={audioPlaying ? "Mute Cinematic Ambience" : "Play Cinematic Ambience"}
              className={`hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider border transition-all ${
                audioPlaying 
                  ? 'border-neonCyan bg-neonCyan/10 text-neonCyan shadow-[0_0_12px_rgba(0,242,254,0.3)]' 
                  : 'border-white/10 text-white/50 hover:text-white hover:border-white/30'
              }`}
              data-cursor="SOUND"
            >
              <div className="flex items-end gap-0.5 h-3">
                <span className={`w-0.5 bg-current rounded-full transition-all ${audioPlaying ? 'h-3 animate-pulse' : 'h-1'}`}></span>
                <span className={`w-0.5 bg-current rounded-full transition-all ${audioPlaying ? 'h-2 animate-pulse' : 'h-1.5'}`}></span>
                <span className={`w-0.5 bg-current rounded-full transition-all ${audioPlaying ? 'h-3.5 animate-pulse' : 'h-2'}`}></span>
              </div>
              <span>{audioPlaying ? 'SFX ON' : 'AUDIO'}</span>
            </button>

            {/* Scope Toggle */}
            <button
              onClick={onToggleLetterbox}
              title="Toggle 2.39:1 Anamorphic Cinema Scope"
              className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider border transition-all ${
                letterboxActive 
                  ? 'border-electricPurple bg-electricPurple/15 text-white' 
                  : 'border-white/10 text-white/40 hover:text-white'
              }`}
              data-cursor="SCOPE"
            >
              <span>2.39:1</span>
            </button>

            {/* Glowing Neon Border Button: "Get in Touch" */}
            <button
              onClick={onOpenContact}
              data-cursor="CLICK"
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neonCyan via-electricPurple to-neonCyan rounded-full opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-pitch transition-all duration-300 group-hover:bg-pitch/80 text-xs sm:text-sm font-medium tracking-wide text-white group-hover:text-neonCyan">
                <span>Get in Touch</span>
                <svg className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Line: Timecodes & Camera Specs */}
        <div className="hidden sm:flex items-center justify-between pt-2.5 mt-2.5 border-t border-white/[0.06] text-[10px] font-mono text-white/40 tracking-wider">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neonCyan/80">
              <span className="w-1.5 h-1.5 rounded-full bg-recRed animate-rec-blink"></span>
              <span>TC: {timecode}</span>
            </span>
            <span className="text-white/20">|</span>
            <span>FPS: 24.000</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline">SHUTTER: 1/48</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline">ISO: 800</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-white/30">PRORES 422HQ • 4K DCI</span>
            <span className="hidden lg:inline text-white/20">|</span>
            <span>RANGE: 00:00:06:35 — 00:09:33:38</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pitch/95 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 font-syne text-lg">
            {[
              { name: 'Selected Work', href: '#work' },
              { name: 'Scenic & Landscapes', href: '#scenic' },
              { name: 'Services & Direction', href: '#services' },
              { name: 'Our Process', href: '#process' },
              { name: 'Journal', href: '#journal' },
              { name: 'Let’s Collaborate', href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-neonCyan transition-colors py-1 border-b border-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex items-center justify-between text-xs font-mono text-white/50">
            <button
              onClick={onToggleAudio}
              className="flex items-center gap-2 text-neonCyan"
            >
              <span>{audioPlaying ? '● SOUND PLAYING' : '○ AMBIENT SOUND'}</span>
            </button>
            <span>TC {timecode}</span>
          </div>
        </div>
      )}
    </header>
  );
}
