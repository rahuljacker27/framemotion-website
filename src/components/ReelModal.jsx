import React from 'react';

export default function ReelModal({ reel, onClose }) {
  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/60 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        data-cursor="CLOSE"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col lg:flex-row items-center gap-6 max-h-[90vh]">
        <div className="relative h-[78vh] aspect-[9/16] rounded-2xl overflow-hidden bg-pitch border border-neonCyan/50 shadow-[0_0_50px_rgba(0,242,254,0.3)]">
          <video
            autoPlay
            loop
            controls
            playsInline
            className="w-full h-full object-cover"
            poster={reel.image}
          >
            <source src={reel.previewVideo} type="video/mp4" />
          </video>
        </div>

        <div className="max-w-sm text-left bg-surface/90 p-6 rounded-2xl border border-white/10 font-mono text-xs space-y-4">
          <div className="flex items-center justify-between text-neonCyan font-bold">
            <span>{reel.category}</span>
            <span>{reel.badge}</span>
          </div>
          <h3 className="font-syne font-bold text-xl text-white">
            {reel.title}
          </h3>
          <p className="text-white/60 text-xs leading-relaxed font-inter">
            {reel.tagline}
          </p>
          <div className="pt-2 border-t border-white/10 space-y-2 text-white/50 text-[11px]">
            <div className="flex justify-between">
              <span>DIRECTOR:</span>
              <span className="text-white">{reel.director}</span>
            </div>
            <div className="flex justify-between">
              <span>VIEWS:</span>
              <span className="text-white">{reel.views}</span>
            </div>
            <div className="flex justify-between">
              <span>DURATION:</span>
              <span className="text-white">{reel.duration}</span>
            </div>
            <div className="flex justify-between">
              <span>ASPECT RATIO:</span>
              <span className="text-neonCyan">9:16 Vertical Native</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-neonCyan hover:text-pitch font-bold transition-colors text-white"
          >
            BACK TO GALLERY
          </button>
        </div>
      </div>
    </div>
  );
}
