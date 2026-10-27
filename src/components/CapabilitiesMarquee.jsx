import React from 'react';

export default function CapabilitiesMarquee() {
  const tickerItems = [
    "CINEMATIC COMMERCIALS",
    "MULTI-CAMERA EVENTS",
    "9:16 SHORT-FORM",
    "TRAVEL EXPEDITIONS",
    "AI VIDEO TRANSITIONS",
    "BRAND STORYTELLING",
  ];

  // Repeat sequence 4 times for infinite fluid looping
  const fullList = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="relative w-full py-8 sm:py-10 bg-black border-y border-white/10 overflow-hidden select-none">
      
      {/* Edge Shadow Vignettes for seamless gradient fade */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Infinite Scrolling Ticker Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {fullList.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 px-3 sm:px-5">
            <span className="font-syncopate font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider text-white whitespace-nowrap hover:text-neonCyan transition-colors duration-300">
              {item}
            </span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neonCyan shadow-[0_0_12px_#00f2fe] flex-shrink-0 animate-pulse"></span>
          </div>
        ))}
      </div>

    </section>
  );
}
