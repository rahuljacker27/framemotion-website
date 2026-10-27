import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenContact, onToggleLetterbox, letterboxActive, audioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#contact' && onOpenContact) {
      onOpenContact();
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo Wordmark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-8 h-8 rounded border border-white/20 bg-charcoal flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-neonCyan group-hover:shadow-[0_0_15px_rgba(0,242,254,0.35)]">
              <div className="w-4 h-3 border border-white/80 rounded-[2px] relative flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neonCyan"></div>
                <span className="absolute -top-1 -right-1 w-1 h-1 bg-recRed rounded-full animate-rec-blink"></span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-syncopate font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-neonCyan transition-colors">
                  FRAMEMOTION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neonCyan animate-pulse"></span>
              </div>
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/40 -mt-0.5 hidden sm:block">
                Cinematic Production
              </span>
            </div>
          </a>

          {/* Right: Nav Links [About, Work, Capabilities, Contact] */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wider uppercase text-white/70 hover:text-white transition-all duration-200 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-neonCyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_8px_#00f2fe]"></span>
              </a>
            ))}

            {/* Audio Ambient Toggle */}
            <button
              onClick={onToggleAudio}
              className={`ml-3 px-2.5 py-1.5 rounded-md border text-xs font-mono flex items-center gap-1.5 transition-all duration-200 ${
                audioPlaying 
                  ? 'border-neonCyan text-neonCyan bg-neonCyan/10 shadow-[0_0_10px_rgba(0,242,254,0.3)]' 
                  : 'border-white/10 text-white/50 hover:text-white hover:border-white/30'
              }`}
              title="Toggle Cinematic Ambient Soundscape"
            >
              {audioPlaying ? <Volume2 size={13} className="animate-pulse" /> : <VolumeX size={13} />}
              <span className="hidden xl:inline text-[11px]">{audioPlaying ? 'SOUND ON' : 'SOUND'}</span>
            </button>

            {/* Start CTA */}
            <button
              onClick={() => {
                if (onOpenContact) onOpenContact();
                else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="ml-2 px-4 py-1.5 rounded-md bg-white hover:bg-neonCyan text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] flex items-center gap-1.5 group"
            >
              <span>Start</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded border text-xs ${
                audioPlaying ? 'border-neonCyan text-neonCyan' : 'border-white/10 text-white/60'
              }`}
              aria-label="Toggle Sound"
            >
              {audioPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-base font-syncopate tracking-wider uppercase text-white/80 hover:text-neonCyan transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
                else document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 bg-white text-black font-semibold text-sm tracking-widest uppercase rounded hover:bg-neonCyan transition-colors"
            >
              Start the Production
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
