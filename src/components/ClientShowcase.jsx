import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

// Client logos using actual image files from the "Client logo" folder with their actual colors
const clientLogos = [
  {
    name: 'ITC Limited',
    logoUrl: '/Client%20logo/itc-cropped.png',
    scale: 1.25,
    sizeClass: 'max-h-11 sm:max-h-13 max-w-[130px] sm:max-w-[150px]',
  },
  {
    name: 'Ambrane',
    logoUrl: '/Client%20logo/images%20(1).png',
  },
  {
    name: 'Hyundai',
    logoUrl: '/Client%20logo/images%20(2).png',
  },
  {
    name: 'FlixBus',
    logoUrl: '/Client%20logo/FlixBus_Logo.png',
  },
  {
    name: 'Tata Motors',
    logoUrl: '/Client%20logo/images.png',
  },
  {
    name: 'Delhi Metro',
    logoUrl: '/Client%20logo/Delhi_Metro_full_logo.svg.webp',
  },
  {
    name: 'Nike',
    logoUrl: '/Client%20logo/nike-cropped.png',
    scale: 1.25,
    sizeClass: 'max-h-10 sm:max-h-12 max-w-[135px] sm:max-w-[155px]',
  },
  {
    name: 'Zingbus',
    logoUrl: '/Client%20logo/zingbus-name-logo.webp',
  },
  {
    name: 'JJ Valaya',
    logoUrl: '/Client%20logo/jjvalaya-crest-only.png',
  },
  {
    name: 'Global Spa',
    logoUrl: '/Client%20logo/globalspa-transparent.png',
    scale: 1.25,
    sizeClass: 'max-h-9 sm:max-h-11 max-w-[145px] sm:max-w-[170px]',
  },
  {
    name: 'Kidzee',
    logoUrl: '/Client%20logo/kidzee-transparent.png',
    scale: 1.2,
    sizeClass: 'max-h-10 sm:max-h-12 max-w-[140px] sm:max-w-[165px]',
  },
  {
    name: 'Qutab Golf Course',
    logoUrl: '/Client%20logo/cropped-Qutab-Golf-Course-DDA-Logo-2.webp',
    scale: 1.35,
    sizeClass: 'max-h-11 sm:max-h-13 max-w-[155px] sm:max-w-[185px]',
  },
];

// Row 1: Left to Right
const row1Clients = [
  clientLogos[0], // ITC
  clientLogos[1], // Ambrane
  clientLogos[2], // Hyundai
  clientLogos[3], // FlixBus
  clientLogos[4], // Tata Motors
  clientLogos[5], // Delhi Metro
  clientLogos[6], // Nike
  clientLogos[7], // Zingbus
];

// Row 2: Right to Left
const row2Clients = [
  clientLogos[8], // JJ Valaya
  clientLogos[9], // Global Spa
  clientLogos[10], // Kidzee
  clientLogos[11], // Qutab Golf Course
  clientLogos[3], // FlixBus
  clientLogos[2], // Hyundai
  clientLogos[1], // Ambrane
  clientLogos[0], // ITC
];

// Row 3: Left to Right
const row3Clients = [
  clientLogos[4], // Tata Motors
  clientLogos[6], // Nike
  clientLogos[0], // ITC
  clientLogos[2], // Hyundai
  clientLogos[7], // Zingbus
  clientLogos[5], // Delhi Metro
  clientLogos[8], // JJ Valaya
  clientLogos[1], // Ambrane
];

function LogoCard({ client }) {
  const [hovered, setHovered] = useState(false);
  const baseScale = client.scale || 1;
  const currentScale = hovered ? baseScale * 1.06 : baseScale;

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center h-16 sm:h-20 min-w-[180px] sm:min-w-[210px] px-5 sm:px-6 py-3 rounded-xl bg-white hover:bg-white/95 border border-white/20 hover:border-neonCyan/80 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,242,254,0.35)] select-none whitespace-nowrap cursor-default overflow-hidden"
    >
      {/* Actual Logo with Authentic Brand Colors */}
      <img
        src={client.logoUrl}
        alt={client.name}
        style={{
          transform: `scale(${currentScale})`,
        }}
        className={`${
          client.sizeClass || 'max-h-8 sm:max-h-10 max-w-[130px] sm:max-w-[155px]'
        } w-auto object-contain transition-transform duration-300`}
        loading="lazy"
      />
    </div>
  );
}

export default function ClientShowcase() {
  // Duplicating arrays 4 times ensures a continuous, gapless marquee that loops seamlessly on all screen widths
  const row1Items = [...row1Clients, ...row1Clients, ...row1Clients, ...row1Clients];
  const row2Items = [...row2Clients, ...row2Clients, ...row2Clients, ...row2Clients];
  const row3Items = [...row3Clients, ...row3Clients, ...row3Clients, ...row3Clients];

  return (
    <section 
      id="clients" 
      className="relative z-20 py-24 sm:py-32 bg-black overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Ambient Lighting Accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-neonCyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neonCyan"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">
                Commercial & Enterprise Showcase
              </span>
              <Sparkles size={11} className="text-neonCyan" />
            </div>

            <h2 className="font-syncopate font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-white">
              CLIENTS IN <span className="text-white/40">MOTION.</span>
            </h2>
          </div>

          <p className="font-inter text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed">
            Trusted by global enterprises, mobility pioneers, and consumer tech disruptors for high-impact commercial cinematography and brand storytelling.
          </p>
        </div>

        {/* Cinematographer Proof Points */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left font-mono">
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest">Experience</div>
            <div className="text-base sm:text-lg font-bold text-white mt-0.5">7+ Years</div>
          </div>
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest">Brands & Creators</div>
            <div className="text-base sm:text-lg font-bold text-neonCyan mt-0.5">100+ Commercials</div>
          </div>
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest">Format</div>
            <div className="text-base sm:text-lg font-bold text-white mt-0.5">Commercial & 9:16</div>
          </div>
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest">Specialization</div>
            <div className="text-base sm:text-lg font-bold text-white mt-0.5">DoP • Drone • Grade</div>
          </div>
        </div>
      </div>

      {/* Marquee Wrapper: Continuous Non-Stop Scrolling (Does NOT pause on hover) */}
      <div className="relative w-full overflow-hidden space-y-5 sm:space-y-6">
        
        {/* Left & Right Edge Vignettes for Seamless Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

        {/* ROW 1: Scroll continuously from Left to Right */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="flex items-center gap-5 sm:gap-6 w-max animate-marquee-right will-change-transform">
            {row1Items.map((client, idx) => (
              <LogoCard key={`row1-${client.name}-${idx}`} client={client} />
            ))}
          </div>
        </div>

        {/* ROW 2: Scroll continuously from Right to Left */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="flex items-center gap-5 sm:gap-6 w-max animate-marquee-left will-change-transform">
            {row2Items.map((client, idx) => (
              <LogoCard key={`row2-${client.name}-${idx}`} client={client} />
            ))}
          </div>
        </div>

        {/* ROW 3: Scroll continuously from Left to Right */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="flex items-center gap-5 sm:gap-6 w-max animate-marquee-right will-change-transform" style={{ animationDuration: '40s' }}>
            {row3Items.map((client, idx) => (
              <LogoCard key={`row3-${client.name}-${idx}`} client={client} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
