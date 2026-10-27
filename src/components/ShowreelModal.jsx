import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-neonCyan p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/15"
        aria-label="Close Showreel"
      >
        <X size={20} />
      </button>

      <div className="relative w-full max-w-5xl aspect-video bg-charcoal rounded-lg overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,242,254,0.3)]">
        <div className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-md px-6 py-3 border-b border-white/10 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-recRed animate-rec-blink"></span>
            <span className="font-bold text-white tracking-widest font-syncopate">FRAMEMOTION_SHOWREEL_4K.MOV</span>
          </div>
          <div className="text-white/50 hidden sm:flex items-center gap-3 font-mono text-[11px]">
            <span>ARRI RAW • 24.000 FPS</span>
            <span className="text-neonCyan">BINAURAL AUDIO</span>
          </div>
        </div>

        <video
          autoPlay
          controls
          playsInline
          className="w-full h-full object-cover pt-10"
          poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fog-over-the-mountain-peaks-42998-large.mp4" type="video/mp4" />
          <source src="https://cdn.coverr.co/videos/coverr-mist-in-the-mountains-2746/1080p.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
