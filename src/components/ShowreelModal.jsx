import React from 'react';

export default function ShowreelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/60 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        data-cursor="CLOSE"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative w-full max-w-5xl aspect-video bg-pitch rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(0,242,254,0.3)]">
        <div className="absolute top-0 left-0 right-0 z-20 bg-pitch/90 backdrop-blur-md px-6 py-3 border-b border-white/10 flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-recRed animate-rec-blink"></span>
            <span className="font-bold text-white">REEL_2026_MASTER_4K.MOV</span>
          </div>
          <div className="text-white/50 hidden sm:block">
            ACEScc • PRORES 4444 • 24.000 FPS
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
        </video>
      </div>
    </div>
  );
}
