import React, { useState, useEffect, useRef } from 'react';

export default function BehindTheScenes() {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const clientMouse = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const [isInside, setIsInside] = useState(false);
  const isInsideRef = useRef(false);
  const rafId = useRef(null);

  // 7 Asymmetrical, gritty South Indian action cinema BTS cards
  const btsItems = [
    {
      id: 'bts-1',
      title: "DIRECTOR'S RAW CAM // ROLL 04",
      category: 'ARRI ALEXA LF • MASTER SHOT 24FPS',
      index: '01',
      gridSpan: 'col-span-12 md:col-span-7 md:row-span-2 min-h-[360px] md:min-h-[490px]',
      negativeMargin: 'z-10',
      image: '/bts/bts_card_1.png',
      fallbackGrad: 'from-amber-950 via-zinc-900 to-black',
      videoSrc: '/videos/hero.mp4',
      startTime: 2.0,
      endTime: 5.0,
      badge: 'RAW MONSTRO // 180° SHUTTER',
      techParams: 'TC 00:14:28:19 • ISO 3200 • ACES RAW',
      lens: 'COOKE S7/i 40MM T2.0',
    },
    {
      id: 'bts-2',
      title: 'HIGH-SPEED CABLE RIG // 85 KM/H',
      category: 'FPV DUAL OP • KINETIC CHASE',
      index: '02',
      gridSpan: 'col-span-12 sm:col-span-6 md:col-span-5 md:row-span-1 min-h-[230px] md:min-h-[240px]',
      negativeMargin: 'md:-ml-3 z-20',
      image: '/bts/bts_card_2.png',
      fallbackGrad: 'from-orange-950 via-stone-900 to-black',
      videoSrc: '/videos/dtdl%20cricket%20website%20upload.mp4',
      startTime: 8.5,
      endTime: 11.5,
      badge: 'WIRE TENSION 12.4 kN',
      techParams: '120 FPS HIGH SPEED • T1.8',
      lens: 'LEICA SUMMILUX-C 21MM',
    },
    {
      id: 'bts-3',
      title: 'GAFFER PYRO CANNON // 50KW',
      category: 'HAZE & EMBERS • NIGHT COMBAT',
      index: '03',
      gridSpan: 'col-span-12 sm:col-span-6 md:col-span-5 md:row-span-2 min-h-[380px] md:min-h-[470px]',
      negativeMargin: 'md:-mt-4 z-15',
      image: '/bts/bts_card_3.png',
      fallbackGrad: 'from-red-950 via-zinc-900 to-black',
      videoSrc: '/videos/hero.mp4',
      startTime: 14.0,
      endTime: 17.0,
      badge: '5600K RAW TUNGSTEN MIX',
      techParams: 'DENSE ATMOSPHERE // BEAM 15°',
      lens: 'ANGENIEUX OPTIMO 24-290',
    },
    {
      id: 'bts-4',
      title: 'RONIN 4D STUNT HARNESS',
      category: 'CLOSE COMBAT • 4-AXIS GYRO LOCK',
      index: '04',
      gridSpan: 'col-span-12 sm:col-span-6 md:col-span-4 md:row-span-2 min-h-[360px] md:min-h-[450px]',
      negativeMargin: 'md:-mr-3 md:-mt-6 z-25',
      image: '/bts/bts_card_4.png',
      fallbackGrad: 'from-stone-950 via-neutral-900 to-black',
      videoSrc: '/videos/dtdl%20cricket%20website%20upload.mp4',
      startTime: 21.0,
      endTime: 24.0,
      badge: 'STUNT OPERATOR // CRASH RIG',
      techParams: 'PAYLOAD 8.8 LBS • ACTIVE STEER',
      lens: 'ZEISS SUPREME PRIME 29MM',
    },
    {
      id: 'bts-5',
      title: 'ANAMORPHIC GLASS // 2X SQUEEZE',
      category: 'COOKE SPECIAL FLARE • 35MM',
      index: '05',
      gridSpan: 'col-span-12 sm:col-span-6 md:col-span-3 md:row-span-1 min-h-[210px] md:min-h-[230px]',
      negativeMargin: 'z-10',
      image: '/bts/bts_card_5.png',
      fallbackGrad: 'from-cyan-950 via-zinc-900 to-black',
      videoSrc: '/videos/hero.mp4',
      startTime: 29.0,
      endTime: 32.0,
      badge: 'COBALT HORIZON FLARE',
      techParams: '1/8 BLACK PRO-MIST • T2.3',
      lens: 'COOKE ANAMORPHIC /i 35MM',
    },
    {
      id: 'bts-6',
      title: 'TECHNO-CRANE 50FT // DIVE',
      category: 'ARENA SWEEP • ELEVATION +45FT',
      index: '06',
      gridSpan: 'col-span-12 sm:col-span-6 md:col-span-3 md:row-span-1 min-h-[210px] md:min-h-[230px]',
      negativeMargin: 'md:-ml-4 z-20',
      image: '/bts/bts_card_6.png',
      fallbackGrad: 'from-amber-950 via-stone-900 to-black',
      videoSrc: '/videos/dtdl%20cricket%20website%20upload.mp4',
      startTime: 37.0,
      endTime: 40.0,
      badge: 'TRACK SPEED 4.2 M/S',
      techParams: 'ROLL AXIS 360° CONTRAST',
      lens: 'FUJINON PREMISTA 28-100',
    },
    {
      id: 'bts-7',
      title: 'RESOLVE COLOR SUITE // KGF GRADE',
      category: 'SOUTH INDIAN ACTION CONTRAST MATRIX',
      index: '07',
      gridSpan: 'col-span-12 md:col-span-7 md:row-span-1 min-h-[200px] md:min-h-[230px]',
      negativeMargin: 'md:-mt-4 z-20',
      image: '/bts/bts_card_7.png',
      fallbackGrad: 'from-yellow-950 via-zinc-900 to-black',
      videoSrc: '/videos/hero.mp4',
      startTime: 54.0,
      endTime: 57.0,
      badge: 'CRUSHED BLACKS • HIGHLIGHT BLOOM',
      techParams: 'ACEScc AP1 • 16.5 STOPS DR',
      lens: 'BARCO 4K LASER MASTERING',
    },
    {
      id: 'bts-8',
      title: 'PYRO SFX UNIT // 60 FPS NITRO',
      category: 'CONTROLLED BLAST • STUNT COLLISION',
      index: '08',
      gridSpan: 'col-span-12 sm:col-span-6 md:col-span-5 md:row-span-2 min-h-[380px] md:min-h-[470px]',
      negativeMargin: 'md:-ml-4 md:-mt-4 z-20',
      image: '/bts/bts_card_8.png',
      fallbackGrad: 'from-orange-950 via-red-950 to-black',
      videoSrc: '/videos/dtdl%20cricket%20website%20upload.mp4',
      startTime: 45.0,
      endTime: 48.0,
      badge: 'BLAST RADIUS 15M // DETONATOR',
      techParams: 'HIGH IMPACT RIG // 60 FPS',
      lens: 'HAWK V-LITE 28MM T2.2',
    },
  ];

  // Continuous accurate relative tracking loop
  useEffect(() => {
    const loop = () => {
      if (sectionRef.current && isInsideRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const targetX = clientMouse.current.x - rect.left;
        const targetY = clientMouse.current.y - rect.top;

        // Smooth trailing inertia (0.16)
        currentPos.current.x += (targetX - currentPos.current.x) * 0.16;
        currentPos.current.y += (targetY - currentPos.current.y) * 0.16;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
        }
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  const handleMouseMove = (e) => {
    clientMouse.current = { x: e.clientX, y: e.clientY };
    if (!isInsideRef.current && sectionRef.current) {
      isInsideRef.current = true;
      setIsInside(true);
      const rect = sectionRef.current.getBoundingClientRect();
      currentPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };

  const handleMouseEnter = (e) => {
    isInsideRef.current = true;
    setIsInside(true);
    clientMouse.current = { x: e.clientX, y: e.clientY };
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      currentPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };

  const handleMouseLeave = () => {
    isInsideRef.current = false;
    setIsInside(false);
  };

  return (
    <section
      id="bts"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[#050505] text-white overflow-hidden py-20 sm:py-28 border-t border-white/10 select-none cursor-none"
      style={{ cursor: 'none' }}
    >
      {/* Strict CSS Rule to hide system cursor over this entire section and its children */}
      <style>{`
        #bts, #bts * {
          cursor: none !important;
        }
      `}</style>

      {/* Background Gritty Ambient Light & Dust */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#FF6B4A]/[0.035] rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[300px] bg-amber-500/[0.025] rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute inset-0 cinema-grid-bg opacity-20 pointer-events-none"></div>

      {/* SECTION HEADER: South Indian Action Cinema Aesthetic */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        
        {/* Top Technical Tape Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF6B4A]/15 border border-[#FF6B4A]/40 text-[#FF6B4A] font-mono text-[10px] tracking-[0.25em] uppercase font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FF6B4A] animate-pulse"></span>
            CLASSIFIED ARCHIVES // ON-SET CHAOS & KINETIC GRIT
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 border border-white/15 text-white/50 font-mono text-[9px] tracking-widest uppercase">
            <span>ROLL: 04 // TAKE: 09</span>
            <span>•</span>
            <span className="text-red-500 font-bold">RAW LOG</span>
          </div>
        </div>

        {/* Massive Gangster / Action Cinema Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-syncopate font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.95]">
              BEHIND THE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-white/60">
                SCENES.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-mono text-xs sm:text-sm text-white/60 uppercase tracking-wider leading-relaxed border-l-2 border-[#FF6B4A] pl-4">
              RAW TAKES. HIGH-SPEED RIGS. EXPLOSIVE FRAMES.{' '}
              <span className="text-[#FF7A59] font-bold">
                NO FILTER UNTIL YOU TOUCH IT.
              </span>
            </p>
          </div>
        </div>

      </div>

      {/* THE ASYMMETRICAL CHAOTIC GRID: Zero Gaps & Slight Overlaps */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 grid-flow-row-dense gap-0 relative">
          {btsItems.map((item) => (
            <BTSCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* INDUSTRIAL HAZARD FOOTER BAR */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 mt-12 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest border-t border-white/10 pt-6">
        <div className="flex items-center gap-2">
          <span className="text-[#FF6B4A]">⊕</span>
          <span>FRAMEMOTION KINETIC UNIT // ALL RIGHTS RESERVED 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span>DP: RITIK SAXENA</span>
          <span>•</span>
          <span className="text-[#FF6B4A]">8K MONSTRO HELIUM</span>
          <span>•</span>
          <span>ISO 3200 RAW</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CUSTOM CURSOR: Precision Cinema Reticle Viewfinder         */}
      {/* Smooth Trailing Inertia HUD Reticle                        */}
      {/* ========================================================= */}
      <div
        ref={cursorRef}
        className={`pointer-events-none absolute top-0 left-0 z-50 transition-opacity duration-300 hidden md:block ${
          isInside ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: 'translate3d(-1000px, -1000px, 0)',
          willChange: 'transform',
        }}
      >
        {/* Precision Center Crosshair Viewfinder */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <div className="w-6 h-6 border border-white/70 rounded-full flex items-center justify-center backdrop-blur-xs">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] shadow-[0_0_10px_#FF6B4A]"></div>
          </div>
          {/* Viewfinder cross marks */}
          <div className="absolute w-10 h-10 pointer-events-none">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-2 bg-white/80"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-2 bg-white/80"></span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-2 bg-white/80"></span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-2 bg-white/80"></span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// INDIVIDUAL BTS CARD COMPONENT
// Default: Gritty Monochromatic
// Hover: Instant Full Color + 2-3s Rapid Looping Action Video
// ==========================================
function BTSCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.volume = 0;
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      try {
        if (video.readyState >= 1) {
          video.currentTime = item.startTime;
        } else {
          video.addEventListener(
            'loadedmetadata',
            () => {
              try {
                video.currentTime = item.startTime;
              } catch (e) {}
            },
            { once: true }
          );
        }
      } catch (e) {}

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      if (videoRef.current.currentTime >= item.endTime || videoRef.current.currentTime < item.startTime - 0.5) {
        videoRef.current.currentTime = item.startTime;
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered((prev) => !prev)}
      className={`group relative overflow-hidden bg-black border border-white/10 ${item.gridSpan} ${item.negativeMargin} transition-all duration-300 hover:z-30 hover:scale-[1.015] hover:border-[#FF6B4A]/90 hover:shadow-[0_25px_60px_rgba(0,0,0,0.95)]`}
      style={{
        cursor: 'none',
      }}
    >
      {/* Container with CSS Filter Transition:
          Default: Intense Moody Monochromatic
          Hover: Transition to Full Raw Color */}
      <div
        className="relative w-full h-full"
        style={{
          filter: isHovered
            ? 'grayscale(0%) contrast(115%) brightness(105%) saturate(125%)'
            : 'grayscale(100%) contrast(165%) brightness(85%)',
          transition: 'filter 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Static BTS Fallback Background / Image */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.fallbackGrad}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Hidden Background Action Video (Loops 2-3s On-Set Cut when Hovered) */}
        <video
          ref={videoRef}
          src={item.videoSrc}
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* High-Contrast South Indian Film Grain / Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/30 pointer-events-none"></div>

        {/* Stamped Corner Crosshairs */}
        <div className="absolute top-2 left-2 text-white/30 font-mono text-xs pointer-events-none select-none">
          +
        </div>
        <div className="absolute top-2 right-2 text-white/30 font-mono text-xs pointer-events-none select-none">
          +
        </div>
        <div className="absolute bottom-2 left-2 text-white/30 font-mono text-xs pointer-events-none select-none">
          +
        </div>
        <div className="absolute bottom-2 right-2 text-white/30 font-mono text-xs pointer-events-none select-none">
          +
        </div>

        {/* Top Badges & Stencil Index */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 font-mono text-[9px] uppercase tracking-wider text-white/80 group-hover:border-[#FF6B4A]/50 group-hover:text-[#FF7A59] transition-colors">
              {item.badge}
            </span>
            <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">
              {item.lens}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-syncopate font-black text-2xl sm:text-3xl text-white/20 group-hover:text-[#FF6B4A] transition-colors select-none">
              {item.index}
            </span>
            {isHovered && (
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            )}
          </div>
        </div>

        {/* Bottom Technical Description */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 pointer-events-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]"></span>
            <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#FF7A59] font-bold">
              {item.category}
            </p>
          </div>

          <h3 className="font-syncopate font-bold text-sm sm:text-base md:text-lg text-white uppercase leading-snug tracking-tight mb-1 group-hover:text-white transition-colors">
            {item.title}
          </h3>

          <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-white/50 tracking-wider">
            <span>{item.techParams}</span>
            <span className="text-[#FF7A59] group-hover:translate-x-1 transition-transform">
              REC ●
            </span>
          </div>
        </div>

        {/* Fiery rim accent on hover */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            isHovered
              ? 'opacity-100 ring-1 ring-[#FF6B4A] shadow-[inset_0_0_30px_rgba(255,107,74,0.3)]'
              : 'opacity-0'
          }`}
        ></div>
      </div>
    </div>
  );
}
