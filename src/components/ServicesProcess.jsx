import React, { useState } from 'react';

const SERVICES = [
  {
    phase: 'PHASE 01',
    tag: 'DIRECTION & TREATMENT',
    title: 'Pre-Production / Direction',
    summary: 'From conceptual screenplay development to meticulous frame-by-frame treatment design.',
    points: [
      'Creative direction & visual identity scripting',
      'Full treatment design & dynamic storyboards',
      'Location scouting & international shoot permits',
      'Casting curation & wardrobe narrative styling'
    ],
    gear: 'RED MONSTRO 8K • COOKE S7/i PRIMES'
  },
  {
    phase: 'PHASE 02',
    tag: 'PRINCIPAL PHOTOGRAPHY',
    title: 'Cinematography & Event Coverage',
    summary: 'High-speed capture, cinema gimbal rigs, and multi-camera live broadcast arrays.',
    points: [
      'ARRI Alexa Mini LF / RED V-Raptor multi-cam sets',
      'High-speed Phantom Flex 4K capture up to 1000fps',
      'Certified FPV cinematic chase drone piloting',
      'Dynamic lighting design (Aputure, Astera tubes)'
    ],
    gear: 'ARRI ALEXA MINI LF • FPV RIGS • PHANTOM 4K'
  },
  {
    phase: 'PHASE 03',
    tag: 'FINISHING & SOUND',
    title: 'Post-Production, Color & VFX',
    summary: 'ACES color grading, bespoke sound design, Dolby Atmos mastering, and social cuts.',
    points: [
      'DaVinci Resolve studio color grading & film emulation',
      'Dolby Atmos spatial audio design & bespoke scoring',
      'Subtle CGI, 3D kinetic typography & cleanup VFX',
      'Multi-aspect deliveries (16:9 4K, 9:16 Social, 1:1, 4:5)'
    ],
    gear: 'DAVINCI RESOLVE ADVANCED • DOLBY ATMOS'
  }
];

export default function ServicesProcess() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 sm:py-36 relative bg-pitch border-t border-borderDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neonCyan block mb-2">
              End-to-End Production Studio
            </span>
            <h2 className="font-syne font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
              SERVICES & PROCESS
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-md font-mono">
            ENGINEERED FOR CINEMATIC SCALE AND SOCIAL PRECISION.
          </p>
        </div>

        {/* 3-Column Interactive Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((svc, idx) => (
            <div
              key={svc.phase}
              onMouseEnter={() => setActiveService(idx)}
              className={`group relative p-8 rounded-2xl transition-all duration-500 border ${
                activeService === idx
                  ? 'bg-surface/90 border-neonCyan shadow-[0_0_35px_rgba(0,242,254,0.18)] transform -translate-y-2'
                  : 'bg-surface/30 border-white/10 hover:border-white/30'
              }`}
              data-cursor="SERVICE"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-neonCyan tracking-widest">
                  {svc.phase}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  {svc.tag}
                </span>
              </div>

              <h3 className="font-syne font-bold text-2xl text-white group-hover:text-neonCyan transition-colors mb-4">
                {svc.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                {svc.summary}
              </p>

              <ul className="space-y-3 mb-10">
                {svc.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-neonCyan mt-1.5 flex-shrink-0"></span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/40">
                <span>HARDWARE / SUITE</span>
                <span className="text-neonCyan/80">{svc.gear}</span>
              </div>

              <span className="absolute top-2 left-2 text-[8px] font-mono text-white/20">┌</span>
              <span className="absolute top-2 right-2 text-[8px] font-mono text-white/20">┐</span>
            </div>
          ))}
        </div>

        {/* Process Timeline */}
        <div id="process" className="mt-20 p-8 rounded-2xl bg-surface/30 border border-white/5">
          <div className="font-mono text-xs uppercase tracking-widest text-white/50 mb-6">
            Standard Production Turnaround Timeline:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center font-mono text-xs">
            <div className="p-4 rounded-xl bg-pitch border border-white/5">
              <div className="text-neonCyan font-bold text-base mb-1">DAYS 01–05</div>
              <div className="text-white/80 font-medium">Concept & Moodboard</div>
              <div className="text-[10px] text-white/40 mt-1">Script locked & visual styleguide</div>
            </div>
            <div className="p-4 rounded-xl bg-pitch border border-white/5">
              <div className="text-neonCyan font-bold text-base mb-1">DAYS 06–12</div>
              <div className="text-white/80 font-medium">Principal Photography</div>
              <div className="text-[10px] text-white/40 mt-1">8K capture, lighting, live monitoring</div>
            </div>
            <div className="p-4 rounded-xl bg-pitch border border-white/5">
              <div className="text-neonCyan font-bold text-base mb-1">DAYS 13–18</div>
              <div className="text-white/80 font-medium">Assembly & Color</div>
              <div className="text-[10px] text-white/40 mt-1">First cut review & ACES grade</div>
            </div>
            <div className="p-4 rounded-xl bg-pitch border border-white/5">
              <div className="text-neonCyan font-bold text-base mb-1">DAY 20</div>
              <div className="text-white/80 font-medium">Master Delivery</div>
              <div className="text-[10px] text-white/40 mt-1">ProRes 4444XQ & social cutdowns</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
