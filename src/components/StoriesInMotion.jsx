import React, { useState } from 'react';
import { Play, ArrowUpRight, Film, Radio, Compass, Sparkles } from 'lucide-react';

export default function StoriesInMotion({ onSelectProject }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 'main-event',
      number: '01',
      title: 'The Main Event',
      category: 'Commercial & Multi-Camera Production',
      description: 'Multi-camera precision and dynamic hybrid coverage for large-scale commercial events.',
      tags: ['Multi-Cam 8K', 'Hybrid Broadcast', 'Stage Lighting', 'Live Switched'],
      aspectRatio: '16:9',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-stage-lights-at-a-concert-4011-large.mp4',
      videoFallback: 'https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-at-a-music-festival-4010-large.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=85',
      client: 'Global Summit & Talent Exhibition',
      year: '2025',
      layout: 'text-left', // First project: text left, video right
    },
    {
      id: 'expedition-kinnaur',
      number: '02',
      title: 'Expedition Kinnaur',
      category: 'Cinematic Travel & Narrative',
      description: 'Raw, natural destination aesthetics blended with polished narrative execution.',
      tags: ['Expedition 35mm', 'Kalpa Valley', 'Anamorphic Grade', 'Highland Drones'],
      aspectRatio: '16:9',
      videoUrl: 'https://cdn.coverr.co/videos/coverr-mountains-under-the-clouds-5026/1080p.mp4',
      videoFallback: 'https://assets.mixkit.co/videos/preview/mixkit-mountain-landscape-with-winding-river-42999-large.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85',
      client: 'Himalayan Explorer Bureau',
      year: '2025',
      layout: 'text-right', // Second project: video left, text right
    },
  ];

  const handleOpen = (project) => {
    if (onSelectProject) {
      onSelectProject({
        title: project.title,
        category: project.category,
        description: project.description,
        videoUrl: project.videoUrl,
        poster: project.posterUrl,
        tags: project.tags,
      });
    }
  };

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-black overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-neonCyan/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-neonCyan/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neonCyan"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
                The Director's Cut
              </span>
            </div>
            <h2 className="font-syncopate font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              STORIES IN <span className="text-white/40">MOTION.</span>
            </h2>
          </div>
          <p className="font-inter text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            Curated marquee films executed with fluid momentum, bespoke anamorphic optics, and editorial pacing.
          </p>
        </div>

        {/* Alternating Project Feature Blocks */}
        <div className="space-y-24 sm:space-y-36">
          {projects.map((project, idx) => {
            const isTextLeft = project.layout === 'text-left';

            return (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`flex flex-col ${
                  isTextLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8 sm:gap-12 lg:gap-16 group`}
              >
                {/* Text Block */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  
                  {/* Project Meta Line */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-neonCyan font-bold tracking-widest">
                      [ {project.number} ]
                    </span>
                    <span className="h-[1px] w-8 bg-white/20"></span>
                    <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-syncopate font-bold text-2xl sm:text-4xl lg:text-5xl uppercase text-white leading-tight mb-4 group-hover:text-neonCyan transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="font-inter text-base sm:text-lg text-white/70 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-[4px] bg-charcoal border border-white/10 text-white/60 text-xs font-mono tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  <div>
                    <button
                      onClick={() => handleOpen(project)}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-white hover:bg-neonCyan text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]"
                    >
                      <Play size={12} fill="currentColor" />
                      <span>Play Film Reel</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Massive 16:9 Video Thumbnail Card */}
                <div className="w-full lg:w-7/12">
                  <div 
                    onClick={() => handleOpen(project)}
                    className="relative aspect-video w-full rounded-md sm:rounded-lg overflow-hidden bg-charcoal border border-white/10 group-hover:border-neonCyan/50 transition-all duration-500 cursor-pointer shadow-2xl group-hover:shadow-[0_0_35px_rgba(0,242,254,0.2)]"
                  >
                    {/* Looping Silent Video on Hover / Auto */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={project.posterUrl}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      <source src={project.videoFallback} type="video/mp4" />
                    </video>

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                    {/* Corner Viewfinder Brackets */}
                    <div className="absolute top-3 left-3 font-mono text-[10px] text-white/40 pointer-events-none">
                      ┌ 16:9 CINEMA
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono text-[9px] text-white/70 pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-recRed animate-rec-blink"></span>
                      <span>24 FPS</span>
                    </div>
                    <div className="absolute bottom-3 left-3 font-mono text-[10px] text-white/50 pointer-events-none">
                      └ {project.client}
                    </div>
                    <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/40 pointer-events-none">
                      {project.year} ┘
                    </div>

                    {/* Centered Play Reticle on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/70 border border-white/20 group-hover:border-neonCyan group-hover:bg-neonCyan/20 group-hover:scale-110 flex items-center justify-center backdrop-blur-md transition-all duration-300">
                        <Play size={24} className="text-white group-hover:text-neonCyan ml-1 transition-colors" fill="currentColor" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
