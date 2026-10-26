import React from 'react';

const PHOTOS = [
  {
    id: 'scenic-1',
    number: '01',
    location: 'Sólheimasandur, Iceland',
    title: 'Basalt Horizon & Black Coast',
    camera: 'Hasselblad H6D-100c',
    lens: '35mm f/2.8',
    settings: '1/250s • ISO 64',
    format: 'vertical',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'scenic-2',
    number: '02',
    location: 'Tre Cime di Lavaredo, Italy',
    title: 'Dolomites Alpine Solitude',
    camera: 'Fujifilm GFX 100 II',
    lens: '45-100mm f/4',
    settings: '1/500s • ISO 100',
    format: 'tall-vertical',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'scenic-3',
    number: '03',
    location: 'Val d\'Orcia, Tuscany',
    title: 'Dawn Mist Over San Quirico',
    camera: 'Leica SL2',
    lens: 'Summilux-SL 50mm f/1.4',
    settings: '1/160s • ISO 50',
    format: 'horizontal',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'scenic-4',
    number: '04',
    location: 'Namib-Naukluft, Namibia',
    title: 'The Solitary Acacia at Deadvlei',
    camera: 'Phase One IQ4 150MP',
    lens: 'Schneider Kreuznach 80mm',
    settings: '1/400s • ISO 50',
    format: 'square',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85',
  },
  {
    id: 'scenic-5',
    number: '05',
    location: 'Reinefjorden, Lofoten',
    title: 'Sub-Zero Arctic Reflections',
    camera: 'Sony FX9 Cinema Line',
    lens: 'Cooke Anamorphic /i 40mm',
    settings: '1/48s • ISO 800',
    format: 'horizontal',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85',
  }
];

export default function ScenicGallery({ onSelectPhoto }) {
  return (
    <section id="scenic" className="py-24 sm:py-36 relative bg-charcoal border-t border-borderDark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-neonCyan"></span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neonCyan">
              Aurelia Vance x Framemotion Series
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-serifExpressive italic font-bold text-3xl sm:text-6xl lg:text-7xl tracking-tight text-white">
              SCENIC & LANDSCAPES
            </h2>
            <p className="text-white/60 font-inter text-sm sm:text-base max-w-lg leading-relaxed">
              A masterclass in medium-format atmospheric cinematography & still storytelling. High-contrast, graded plates captured across six continents.
            </p>
          </div>
        </div>

        {/* Asymmetrical Photographic Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="md:col-span-5" onClick={() => onSelectPhoto(PHOTOS[0])}>
            <EditorialCard photo={PHOTOS[0]} heightClass="h-[480px] sm:h-[560px]" />
          </div>

          <div className="md:col-span-7 md:-mt-8" onClick={() => onSelectPhoto(PHOTOS[1])}>
            <EditorialCard photo={PHOTOS[1]} heightClass="h-[520px] sm:h-[620px]" />
          </div>

          <div className="md:col-span-8 mt-4" onClick={() => onSelectPhoto(PHOTOS[2])}>
            <EditorialCard photo={PHOTOS[2]} heightClass="h-[360px] sm:h-[440px]" />
          </div>

          <div className="md:col-span-4 mt-4" onClick={() => onSelectPhoto(PHOTOS[3])}>
            <EditorialCard photo={PHOTOS[3]} heightClass="h-[360px] sm:h-[440px]" />
          </div>

          <div className="md:col-span-12 mt-4" onClick={() => onSelectPhoto(PHOTOS[4])}>
            <EditorialCard photo={PHOTOS[4]} heightClass="h-[320px] sm:h-[420px]" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electricPurple"></span>
            <span>COLOR WORKFLOW: ACES 1.3 REC.709 D65 / KODAK 2383 PRINT EMULATION</span>
          </div>
          <div>LIMITED PRINT & SYNDICATION ARCHIVE</div>
        </div>

      </div>
    </section>
  );
}

function EditorialCard({ photo, heightClass }) {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-pitch border border-white/10 hover:border-white/40 transition-all duration-700"
      data-cursor="INSPECT"
    >
      <div className={`relative w-full ${heightClass} overflow-hidden`}>
        <img
          src={photo.image}
          alt={photo.title}
          loading="lazy"
          className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2.5 py-1 rounded-full bg-pitch/80 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white tracking-widest uppercase">
            EXIF / EXPAND ↗
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="flex items-baseline justify-between border-b border-white/20 pb-2 mb-2">
            <span className="font-serifExpressive italic text-xl sm:text-2xl text-white group-hover:text-neonCyan transition-colors">
              {photo.title}
            </span>
            <span className="font-mono text-xs text-neonCyan font-bold tracking-widest">
              {photo.number}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-white/60">
            <span>{photo.location}</span>
            <span className="text-white/40">{photo.camera} • {photo.lens}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
