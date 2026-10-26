import React, { useState, useRef } from 'react';

const ITEMS = [
  {
    id: 'work-1',
    title: 'URBAN NIGHTS • BRAND',
    category: 'Commercial',
    views: '142.8K',
    duration: '0:15',
    aspect: '9:16',
    badge: '4K DCI',
    tagline: 'Cyberpunk nocturnal neon aesthetic for luxury sportswear.',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42777-large.mp4',
    director: 'Aurelia Vance',
  },
  {
    id: 'work-2',
    title: 'THE MUSE • FASHION',
    category: 'Reels',
    views: '320.5K',
    duration: '0:22',
    aspect: '9:16',
    badge: 'PRORES',
    tagline: 'Haute couture high-speed portraiture with anamorphic flare.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-woman-with-neon-lights-on-her-face-41443-large.mp4',
    director: 'Kaelen Thorne',
  },
  {
    id: 'work-3',
    title: 'SPEED • REEL',
    category: 'Commercial',
    views: '512.1K',
    duration: '0:18',
    aspect: '9:16',
    badge: '120 FPS',
    tagline: 'High-octane trackside adrenaline for electric hypercars.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-car-drifting-on-a-racetrack-42775-large.mp4',
    director: 'Marcus Reid',
  },
  {
    id: 'work-4',
    title: 'CINEMATIC BRAND • Commercial',
    category: 'Commercial',
    views: '89.4K',
    duration: '0:30',
    aspect: '9:16',
    badge: 'ACES 35MM',
    tagline: 'Moody indoor architectural lighting and artisanal watchcraft.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-hands-adjusting-the-lens-of-a-camera-42866-large.mp4',
    director: 'Aurelia Vance',
  },
  {
    id: 'work-5',
    title: 'NEBULA • MUSIC VIDEO',
    category: 'Narrative',
    views: '245.0K',
    duration: '0:28',
    aspect: '9:16',
    badge: 'ATMOS',
    tagline: 'Surreal laser prisms and kinetic rhythm design.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-laser-lights-at-a-music-concert-42841-large.mp4',
    director: 'Elena Rostova',
  },
  {
    id: 'work-6',
    title: 'SOLITUDE • NARRATIVE',
    category: 'Narrative',
    views: '76.2K',
    duration: '0:45',
    aspect: '9:16',
    badge: 'MONOCHROME',
    tagline: 'Muted tones, sweeping glacial solitude, and human longing.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
    previewVideo: 'https://assets.mixkit.co/videos/preview/mixkit-solitary-tree-in-a-snow-covered-field-42997-large.mp4',
    director: 'Kaelen Thorne',
  }
];

export default function SelectedWork({ onSelectReel }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Commercial', 'Reels', 'Narrative'];
  const filteredItems = filter === 'All' ? ITEMS : ITEMS.filter(it => it.category === filter);

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-pitch border-t border-borderDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neonCyan block mb-2">
              Social Media Reels & Commercials
            </span>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
              SELECTED WORK
            </h2>
            <p className="text-white/50 text-sm mt-2 max-w-md">
              Crafted for high-retention feeds, television broadcasts, and vertical cinematic storytelling.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-surface rounded-full border border-white/10 self-start md:self-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-cursor="FILTER"
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? 'bg-white text-pitch shadow-lg shadow-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dense 9:16 Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <WorkCard key={item.id} item={item} onSelect={() => onSelectReel(item)} />
          ))}
        </div>

        {/* Bottom Grid Metric Tracker */}
        <div className="mt-16 p-6 rounded-2xl bg-surface/40 border border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white/50">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-neonCyan"></span>
            <span>ASPECT RATIO: 9:16 VERTICAL NATIVE</span>
          </div>
          <div className="flex items-center gap-4">
            <span>COLOR SPACE: REC.2020 / HDR10</span>
            <span>•</span>
            <span>FRAME RATE: 24.00 / 60.00 FPS</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function WorkCard({ item, onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="PLAY REEL"
      className="group relative cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-charcoal border border-white/10 hover:border-neonCyan transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] transform hover:-translate-y-1.5"
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-surface">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />

        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={item.previewVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-pitch/60 via-transparent to-transparent"></div>

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 font-mono text-[10px]">
          <span className="px-2 py-0.5 rounded bg-pitch/80 backdrop-blur-md border border-white/10 text-white/80">
            [{item.duration}]
          </span>
          <span className="px-2 py-0.5 rounded bg-neonCyan/20 backdrop-blur-md border border-neonCyan/40 text-neonCyan font-bold">
            {item.aspect}
          </span>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center z-10 transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <div className="w-14 h-14 rounded-full bg-neonCyan/20 border border-neonCyan backdrop-blur-md flex items-center justify-center text-neonCyan shadow-[0_0_20px_rgba(0,242,254,0.6)]">
            <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="text-[10px] font-mono text-neonCyan uppercase tracking-widest block mb-1">
            {item.category} • DIR. {item.director}
          </span>
          <h3 className="font-syne font-bold text-lg sm:text-xl text-white group-hover:text-neonCyan transition-colors">
            {item.title}
          </h3>
          <p className="text-white/60 text-xs mt-1 line-clamp-2 leading-relaxed">
            {item.tagline}
          </p>
        </div>

        <span className="absolute top-2 left-2 text-[9px] font-mono text-white/20 group-hover:text-neonCyan transition-colors">┌</span>
        <span className="absolute top-2 right-2 text-[9px] font-mono text-white/20 group-hover:text-neonCyan transition-colors">┐</span>
        <span className="absolute bottom-2 left-2 text-[9px] font-mono text-white/20 group-hover:text-neonCyan transition-colors">└</span>
        <span className="absolute bottom-2 right-2 text-[9px] font-mono text-white/20 group-hover:text-neonCyan transition-colors">┘</span>
      </div>

      <div className="p-4 bg-surface/80 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50">
        <div className="flex items-center gap-1.5">
          <span>{item.views} 👁️</span>
          <span className="text-white/20">•</span>
          <span className="text-neonCyan/80">{item.badge}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-white/70 group-hover:text-white transition-colors">
          <span>WATCH REEL</span>
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
}
