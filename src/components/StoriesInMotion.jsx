import React, { useState, useRef } from 'react';
import { Play, Sparkles, Film, ArrowUpRight } from 'lucide-react';

function ReelCard({ project, onSelectProject }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
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
      className="group flex flex-col cursor-pointer transition-transform duration-300 ease-out hover:scale-105 z-10 hover:z-20 will-change-transform"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProject && onSelectProject(project)}
    >
      {/* 9:16 Vertical Reel-Format Video Container */}
      <div className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-charcoalDark border border-white/10 group-hover:border-neonCyan/70 transition-all duration-300 shadow-2xl group-hover:shadow-[0_15px_40px_rgba(0,242,254,0.25)]">
        
        {/* Static Thumbnail Poster (Displayed by default) */}
        <img
          src={project.posterUrl}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />

        {/* Looping Video (Triggered to play on hover) */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={project.videoUrl} type="video/mp4" />
        </video>

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

        {/* Viewfinder Badges / Metadata */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 font-mono text-[9px] text-white/70 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-recRed animate-rec-blink"></span>
          <span>9:16 REEL</span>
        </div>

        <div className="absolute top-3.5 right-3.5 font-mono text-[9px] text-neonCyan bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 pointer-events-none">
          {project.badge}
        </div>

        {/* Floating Play Indicator on Hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-12 h-12 rounded-full bg-black/75 border border-white/20 group-hover:border-neonCyan group-hover:bg-neonCyan/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
            isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-70'
          }`}>
            <Play size={16} className="text-white group-hover:text-neonCyan ml-0.5 transition-colors" fill="currentColor" />
          </div>
        </div>

        {/* Bottom Tag Badge inside Card */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white/60 font-mono text-[10px] pointer-events-none">
          <span>{project.tag}</span>
          <span className="flex items-center gap-1 text-white/40 group-hover:text-neonCyan transition-colors">
            <span>Play</span>
            <ArrowUpRight size={11} />
          </span>
        </div>
      </div>

      {/* Left-Aligned Text Beneath the Video Container */}
      <div className="mt-4 flex flex-col items-start text-left px-1">
        <h3 className="font-syncopate font-bold text-sm sm:text-base uppercase text-white group-hover:text-neonCyan transition-colors duration-200 tracking-wider">
          {project.title}
        </h3>
        <p className="mt-1 font-inter text-xs text-white/50 font-light leading-snug">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function StoriesInMotion({ onSelectProject }) {
  const projects = [
    {
      id: 'dtdl-cricket',
      number: '01',
      title: 'DTDL Cricket Anthem',
      subtitle: 'Sports Commercial • 9:16 High-Octane Reel',
      badge: '4K 60FPS',
      tag: 'CRICKET LEAGUE',
      videoUrl: '/videos/dtdl%20cricket%20website%20upload.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=85',
      category: 'Sports & Commercial Narrative',
      description: 'High-octane cricket cinematography capturing raw athletic power, stadium lights, and match momentum.',
    },
    {
      id: 'apex-velocity',
      number: '02',
      title: 'Apex Velocity',
      subtitle: 'Automotive Campaign • Anamorphic Night Drive',
      badge: 'ANAMORPHIC',
      tag: 'SUPERCAR REEL',
      videoUrl: '/videos/hero.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=85',
      category: 'Automotive & High-Speed',
      description: 'Ultra high-speed night tracking with bespoke anamorphic lens flares capturing electric performance cars.',
    },
    {
      id: 'kinnaur-expedition',
      number: '03',
      title: 'Kinnaur Expedition',
      subtitle: 'Travel & Documentary • 35mm Highland Visuals',
      badge: '35MM RAW',
      tag: 'HIMALAYAN REEL',
      videoUrl: '/videos/hero.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=85',
      category: 'Cinematic Travel & Adventure',
      description: 'Spiti Valley and Kinnaur high-altitude cinematography blending raw nature with intimate human stories.',
    },
    {
      id: 'urban-rhythm',
      number: '04',
      title: 'Urban Rhythm',
      subtitle: 'Culture & Fashion • Natural Light Editorial',
      badge: 'DIRECTOR CUT',
      tag: 'STREET CINEMA',
      videoUrl: '/videos/hero.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=85',
      category: 'Editorial & Brand Identity',
      description: 'Natural light portraiture and urban street narrative capturing the pulse of modern music and fashion culture.',
    },
  ];

  return (
    <section 
      id="work" 
      className="relative z-20 py-24 sm:py-32 bg-black overflow-hidden border-t border-white/10"
    >
      {/* Ambient Lighting Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-neonCyan/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-neonCyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neonCyan"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
                Vertical Cinema • 9:16 Lab
              </span>
              <Sparkles size={11} className="text-neonCyan" />
            </div>
            
            <h2 className="font-syncopate font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              STORIES IN <span className="text-white/40">MOTION.</span>
            </h2>
          </div>

          <p className="font-inter text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            High-impact 9:16 vertical cinema capturing commercial campaigns, brand stories, athlete profiles, and cinematic moments engineered for the digital generation.
          </p>
        </div>

        {/* Responsive Horizontal Grid: Row of Four 9:16 Aspect Ratio Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
          {projects.map((project) => (
            <ReelCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
