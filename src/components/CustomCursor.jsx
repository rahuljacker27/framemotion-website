import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setHovered(true);
        setHoverText(target.getAttribute('data-cursor') || '');
      } else {
        const clickable = e.target.closest('a, button, input, textarea, select, [role="button"]');
        setHovered(!!clickable);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div 
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        left: 0,
        top: 0
      }}
    >
      {/* Reticle Center Dot */}
      <div className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 flex items-center justify-center ${
        hovered 
          ? 'w-12 h-12 bg-neonCyan/15 border border-neonCyan backdrop-blur-sm' 
          : 'w-4 h-4 bg-neonCyan/40 border border-neonCyan/80'
      }`}>
        <div className="w-1.5 h-1.5 rounded-full bg-neonCyan"></div>
        {hoverText && (
          <span className="absolute -bottom-6 text-[9px] font-mono tracking-widest text-neonCyan uppercase font-bold whitespace-nowrap bg-black/80 px-1.5 py-0.5 rounded border border-neonCyan/40">
            {hoverText}
          </span>
        )}
      </div>
      {/* Corner Crosshairs */}
      <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none transition-opacity duration-300 ${
        hovered ? 'opacity-90 scale-125' : 'opacity-40'
      }`}>
        <span className="absolute top-0 left-0 w-2 h-[1px] bg-neonCyan"></span>
        <span className="absolute top-0 left-0 h-2 w-[1px] bg-neonCyan"></span>
        <span className="absolute top-0 right-0 w-2 h-[1px] bg-neonCyan"></span>
        <span className="absolute top-0 right-0 h-2 w-[1px] bg-neonCyan"></span>
        <span className="absolute bottom-0 left-0 w-2 h-[1px] bg-neonCyan"></span>
        <span className="absolute bottom-0 left-0 h-2 w-[1px] bg-neonCyan"></span>
        <span className="absolute bottom-0 right-0 w-2 h-[1px] bg-neonCyan"></span>
        <span className="absolute bottom-0 right-0 h-2 w-[1px] bg-neonCyan"></span>
      </div>
    </div>
  );
}
