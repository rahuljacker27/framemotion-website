import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, Sparkles, Smartphone, Eye, Heart, Share2, ChevronUp, ChevronDown } from 'lucide-react';

export default function DigitalFlow({ onSelectReel }) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const [touchStartY, setTouchStartY] = useState(null);
  const [isMobileReelsView, setIsMobileReelsView] = useState(false);
  const videoRefs = useRef({});

  const reels = [
    {
      id: 'ai-product',
      title: 'AI-Enhanced Product Intros',
      tag: 'Higgsfield AI / Morphing Transitions',
      category: 'Innovation Lab',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-holographic-lines-41584-large.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      views: '1.4M',
      likes: '92.4K',
      client: 'Futura Wearables',
      description: 'Generative AI latent space interpolation blended seamlessly with physical product lighting passes.',
    },
    {
      id: 'darjeeling-logs',
      title: 'Darjeeling Travel Logs',
      tag: 'Social First',
      category: 'Expedition Short-Form',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-green-mountain-valley-41098-large.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
      views: '2.8M',
      likes: '184K',
      client: 'Eastern Highlands Tourism',
      description: 'Handheld morning light aesthetics, misty valley drones, and rapid-fire audio cuts.',
    },
    {
      id: 'high-retention-ads',
      title: 'High-Retention E-commerce Ads',
      tag: 'Quick-Commerce',
      category: 'Growth & Ads',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-with-a-vertical-screen-42971-large.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      views: '940K',
      likes: '64.1K',
      client: 'Veloce Hyper-Delivery',
      description: 'Sub-3 second hook architecture engineered for high retention across Instagram Reels and TikTok.',
    },
    {
      id: 'behind-the-lens',
      title: 'Behind the Lens',
      tag: 'BTS / Sony ZV-E1 Setup',
      category: 'Director BTS',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-cameraman-filming-in-a-studio-setting-42992-large.mp4',
      posterUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
      views: '580K',
      likes: '48.9K',
      client: 'Framemotion Lab',
      description: 'Rig configurations, gimbal balancing, and real-time LUT monitoring on rugged location shoots.',
    },
  ];

  // Auto-play silently on hover for desktop
  const handleMouseEnter = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
    }
  };

  // Mobile vertical swipe touch handlers
  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;

    if (diff > 45) {
      // Swiped Up -> Next reel
      setActiveMobileIndex((prev) => (prev < reels.length - 1 ? prev + 1 : 0));
    } else if (diff < -45) {
      // Swiped Down -> Prev reel
      setActiveMobileIndex((prev) => (prev > 0 ? prev - 1 : reels.length - 1));
    }
    setTouchStartY(null);
  };

  // Trigger modal
  const handleCardClick = (reel) => {
    if (onSelectReel) {
      onSelectReel(reel);
    }
  };

  return (
    <section id="capabilities" className="relative py-28 sm:py-36 bg-black text-white overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neonCyan/[0.04] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <Smartphone size={13} className="text-neonCyan" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
                The Innovation Lab & Digital Flow
              </span>
            </div>
            <h2 className="font-syncopate font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
              SEAMLESS <span className="text-white/40">DIGITAL FLOW.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-inter text-sm sm:text-base text-white/60 max-w-sm font-light leading-relaxed">
              Native 9:16 short-form cinema designed for maximum retention on Instagram Reels and TikTok.
            </p>
          </div>
        </div>

        {/* Desktop 4-Column Masonry / Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onMouseEnter={() => handleMouseEnter(reel.id)}
              onMouseLeave={() => handleMouseLeave(reel.id)}
              onClick={() => handleCardClick(reel)}
              className="group relative aspect-[9/16] rounded-md sm:rounded-lg overflow-hidden bg-charcoal border border-white/10 hover:border-neonCyan transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:-translate-y-1.5"
            >
              {/* Video Element */}
              <video
                ref={(el) => (videoRefs.current[reel.id] = el)}
                loop
                muted
                playsInline
                preload="metadata"
                poster={reel.posterUrl}
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:brightness-105 transition-all duration-500"
              >
                <source src={reel.videoUrl} type="video/mp4" />
              </video>

              {/* Gradient Scrims for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none"></div>

              {/* Top Meta Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-neonCyan tracking-wider uppercase">
                  {reel.tag}
                </span>
                <div className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:text-neonCyan transition-colors">
                  <Play size={10} fill="currentColor" />
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="flex items-center gap-1.5 text-neonCyan font-mono text-[10px] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neonCyan animate-ping"></span>
                  <span>9:16 FEED</span>
                </div>
                <h4 className="font-syncopate font-bold text-sm sm:text-base text-white uppercase group-hover:text-neonCyan transition-colors leading-snug">
                  {reel.title}
                </h4>
                <p className="font-inter text-xs text-white/60 line-clamp-2 mt-1.5 font-light">
                  {reel.description}
                </p>

                {/* Social metrics pill */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/50">
                  <span className="flex items-center gap-1">
                    <Eye size={11} className="text-white/40" />
                    {reel.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart size={11} className="text-recRed" />
                    {reel.likes}
                  </span>
                </div>
              </div>

              {/* Hover Glow Reticle */}
              <div className="absolute inset-0 border border-neonCyan/0 group-hover:border-neonCyan/40 rounded-md sm:rounded-lg pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Mobile View: High-End Instagram Reels/TikTok Native Swipe Container */}
        <div className="block md:hidden">
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-white/60">
            <span className="text-neonCyan flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-neonCyan animate-rec-blink"></span>
              SWIPE VERTICALLY (REELS MODE)
            </span>
            <span>{activeMobileIndex + 1} / {reels.length}</span>
          </div>

          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative aspect-[9/16] w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-charcoal border border-white/20 shadow-2xl touch-pan-y"
          >
            {reels.map((reel, idx) => (
              <div
                key={reel.id}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  idx === activeMobileIndex
                    ? 'opacity-100 translate-y-0 scale-100 z-20 pointer-events-auto'
                    : idx < activeMobileIndex
                    ? 'opacity-0 -translate-y-full scale-95 z-10 pointer-events-none'
                    : 'opacity-0 translate-y-full scale-95 z-10 pointer-events-none'
                }`}
              >
                {/* Active Mobile Video */}
                <video
                  autoPlay={idx === activeMobileIndex}
                  loop
                  muted
                  playsInline
                  poster={reel.posterUrl}
                  className="w-full h-full object-cover object-center"
                >
                  <source src={reel.videoUrl} type="video/mp4" />
                </video>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 pointer-events-none"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-neonCyan uppercase">
                    {reel.tag}
                  </span>
                  <button 
                    onClick={() => handleCardClick(reel)}
                    className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20"
                  >
                    <Play size={12} fill="currentColor" />
                  </button>
                </div>

                {/* Right Side Interaction Bar (Instagram Reels style) */}
                <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 z-20">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-recRed border border-white/10">
                      <Heart size={18} fill="currentColor" />
                    </div>
                    <span className="font-mono text-[9px] text-white/80 mt-1">{reel.likes}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                      <Eye size={18} />
                    </div>
                    <span className="font-mono text-[9px] text-white/80 mt-1">{reel.views}</span>
                  </div>

                  <div 
                    onClick={() => handleCardClick(reel)}
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer shadow-lg"
                  >
                    <Play size={16} fill="currentColor" />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-4 left-4 right-16 z-10">
                  <div className="font-mono text-[9px] text-neonCyan mb-1">
                    {reel.category}
                  </div>
                  <h4 className="font-syncopate font-bold text-base text-white uppercase leading-snug">
                    {reel.title}
                  </h4>
                  <p className="font-inter text-xs text-white/70 line-clamp-2 mt-1 font-light">
                    {reel.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Mobile Vertical Navigation Arrows */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
              <button
                onClick={() => setActiveMobileIndex((prev) => (prev > 0 ? prev - 1 : reels.length - 1))}
                className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/10"
                aria-label="Previous Reel"
              >
                <ChevronUp size={14} />
              </button>
              <button
                onClick={() => setActiveMobileIndex((prev) => (prev < reels.length - 1 ? prev + 1 : 0))}
                className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/10"
                aria-label="Next Reel"
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Indicator Dots */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-30">
              {reels.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeMobileIndex ? 'w-6 bg-neonCyan' : 'w-1.5 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
