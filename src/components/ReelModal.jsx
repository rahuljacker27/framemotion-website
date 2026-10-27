import React, { useEffect } from 'react';
import { X, Play, Eye, Heart, Sparkles } from 'lucide-react';

export default function ReelModal({ reel, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (reel) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [reel, onClose]);

  if (!reel) return null;

  const isVertical = reel.aspectRatio === '9/16' || reel.tag || reel.views;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-in fade-in duration-300">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-neonCyan p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/15"
        aria-label="Close Modal"
      >
        <X size={20} />
      </button>

      <div className={`flex flex-col ${isVertical ? 'lg:flex-row' : 'w-full max-w-5xl'} items-center gap-6 max-h-[92vh] overflow-y-auto no-scrollbar`}>
        
        {/* Media Frame */}
        <div className={`relative overflow-hidden rounded-lg bg-charcoal border border-white/20 shadow-[0_0_50px_rgba(0,242,254,0.25)] ${
          isVertical ? 'h-[75vh] aspect-[9/16]' : 'w-full aspect-video'
        }`}>
          <video
            autoPlay
            loop
            controls
            playsInline
            className="w-full h-full object-cover"
            poster={reel.poster || reel.posterUrl}
          >
            <source src={reel.videoUrl || reel.previewVideo} type="video/mp4" />
          </video>
        </div>

        {/* Info Card */}
        <div className={`text-left bg-charcoal/90 p-6 sm:p-8 rounded-lg border border-white/15 font-mono text-xs space-y-4 backdrop-blur-md ${
          isVertical ? 'max-w-sm w-full' : 'w-full'
        }`}>
          <div className="flex items-center justify-between text-neonCyan font-bold">
            <span className="uppercase tracking-widest">{reel.category || 'FRAMEMOTION CUT'}</span>
            <span>{reel.tag || '4K MASTER'}</span>
          </div>

          <h3 className="font-syncopate font-bold text-xl sm:text-2xl text-white uppercase leading-snug">
            {reel.title}
          </h3>

          <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-inter font-light">
            {reel.description || reel.tagline}
          </p>

          <div className="pt-4 border-t border-white/10 space-y-2 text-white/50 text-[11px]">
            {reel.client && (
              <div className="flex justify-between">
                <span>CLIENT / PRODUCTION:</span>
                <span className="text-white">{reel.client}</span>
              </div>
            )}
            {reel.views && (
              <div className="flex justify-between">
                <span>ENGAGEMENT:</span>
                <span className="text-white">{reel.views} Views • {reel.likes} Likes</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>COLOR PROFILE:</span>
              <span className="text-neonCyan">ARRI LogC4 / Rec.709 Cine</span>
            </div>
            <div className="flex justify-between">
              <span>SOUND MIX:</span>
              <span className="text-white">Binaural Cinematic Master</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
