import React from 'react';

export default function LightboxModal({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/60 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        data-cursor="CLOSE"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center">
        <div className="relative max-h-[75vh] overflow-hidden rounded-xl border border-white/20 shadow-2xl">
          <img
            src={photo.image}
            alt={photo.title}
            className="max-h-[75vh] w-auto object-contain"
          />
        </div>

        <div className="w-full mt-4 p-4 rounded-xl bg-surface/90 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-neonCyan font-bold mr-2">{photo.number}</span>
            <span className="font-serifExpressive italic text-lg text-white mr-3">{photo.title}</span>
            <span className="text-white/50">{photo.location}</span>
          </div>
          <div className="flex items-center gap-4 text-white/60 text-[11px]">
            <span>{photo.camera}</span>
            <span>•</span>
            <span>{photo.lens}</span>
            <span>•</span>
            <span className="text-neonCyan">{photo.settings}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
