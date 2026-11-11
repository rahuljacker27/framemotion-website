import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Pause, X, CheckCircle2, Shield, FileText } from 'lucide-react';

export default function FooterCTA({ contactRef }) {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const [mouseOffset, setMouseOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeHoverId, setActiveHoverId] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState(null); // 'privacy' | 'terms' | null

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Commercial Campaign',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Resize check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll-triggered rotation calculation with full responsive travel
  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Full travel calculation from section entering bottom of viewport to bottom of document
      const maxScrollTravel = Math.max(1, rect.height);
      const currentTravel = windowHeight - rect.top;
      const rawProgress = currentTravel / maxScrollTravel;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(clamped);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const norm = (e.clientX / window.innerWidth) - 0.5; // -0.5 to +0.5
    setMouseOffset(norm * 6); // ±3 degrees interactive sway
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  // 7 Cinematic showcase cards
  const showcaseCards = [
    {
      id: 'card-1',
      title: 'DMRC Transit Pulse',
      category: 'Metro Odyssey',
      type: 'photo',
      tag: 'DOCUMENTARY',
      accent: '#FF5252',
      grad: 'from-rose-950/80 via-stone-900 to-black',
      previewIcon: '🚇',
    },
    {
      id: 'card-2',
      title: 'Kinnaur Ridge Flight',
      category: 'Himalayan Aerials',
      type: 'photo',
      tag: 'FPV DUAL OP',
      accent: '#00F2FE',
      grad: 'from-sky-950/80 via-neutral-900 to-black',
      previewIcon: '🏔️',
    },
    {
      id: 'card-3',
      title: 'DTDL Cricket Anthem',
      category: 'Sports & Commercial',
      type: 'video',
      videoSrc: '/videos/dtdl%20cricket%20website%20upload.mp4',
      tag: 'RED MONSTRO 8K',
      accent: '#FF7A59',
      grad: 'from-amber-950/80 via-zinc-900 to-black',
    },
    {
      id: 'card-4',
      title: 'Framemotion Master Cut',
      category: 'Cinematography Showreel',
      type: 'video',
      videoSrc: '/videos/hero.mp4',
      tag: 'ARRI ALEXA LF',
      accent: '#00F2FE',
      grad: 'from-cyan-950/80 via-gray-900 to-black',
    },
    {
      id: 'card-5',
      title: 'Apex Velocity Sprint',
      category: 'Automotive EV Campaign',
      type: 'photo',
      tag: 'COMMERCIAL 9:16',
      accent: '#FF6B4A',
      grad: 'from-orange-950/80 via-stone-900 to-black',
      previewIcon: '⚡',
    },
    {
      id: 'card-6',
      title: 'Royal Haute Couture',
      category: 'JJ Valaya Heritage',
      type: 'photo',
      tag: 'FASHION FILM',
      accent: '#E040FB',
      grad: 'from-purple-950/80 via-zinc-900 to-black',
      previewIcon: '👑',
    },
    {
      id: 'card-7',
      title: 'Spiti Valley Starlight',
      category: 'Remote Expeditions',
      type: 'photo',
      tag: 'ANAMORPHIC RAW',
      accent: '#69F0AE',
      grad: 'from-emerald-950/80 via-neutral-900 to-black',
      previewIcon: '✨',
    },
  ];

  // Mathematical circular path geometry: moderately larger diameter and wider fanned layout
  const radius = isMobile ? 390 : 560;
  const angularStep = isMobile ? 23.5 : 22.5;
  const centerIndex = 3;

  // Exact vertical anchor and horizon line metrics
  const anchorY = isMobile ? 160 : 230;
  const showcaseHeight = isMobile ? 285 : 390;

  // Enhanced scroll-driven rotation: increased speed and travel across the circular arc
  const scrollRotation = (scrollProgress - 0.5) * (isMobile ? 28.0 : 36.0);
  const scrollShiftX = (scrollProgress - 0.5) * (isMobile ? 80.0 : 120.0);
  const scrollShiftY = -(scrollProgress - 0.5) * (isMobile ? 25.0 : 35.0);

  return (
    <footer
      id="contact"
      ref={(el) => {
        sectionRef.current = el;
        if (contactRef) {
          if (typeof contactRef === 'function') contactRef(el);
          else contactRef.current = el;
        }
      }}
      className="relative min-h-[860px] sm:min-h-[960px] bg-[#070707] text-white overflow-hidden pt-20 sm:pt-28 pb-6 flex flex-col justify-between border-t border-white/10 select-none"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] bg-[#FF6B4A]/[0.045] rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[350px] bg-neonCyan/[0.025] rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute inset-0 cinema-grid-bg opacity-30 pointer-events-none"></div>

      {/* TOP CENTER: Content and Hero */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        
        {/* White Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-300 hover:scale-105">
            <img
              src="/Frame%20Motion%20Logo/framemotion-emblem.png?v=white"
              alt="Frame Motion Logo"
              className="h-12 sm:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            />
          </div>
        </div>

        {/* Large Centered Heading */}
        <h2 className="font-syncopate font-bold text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.12] mb-8 sm:mb-10">
          Ready to Move{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
            Forward?
          </span>
        </h2>

        {/* Orange-Peach Button: "Let's talk" */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-[#FF6B4A] hover:bg-[#FF5530] text-white font-inter font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-[0_12px_35px_rgba(255,107,74,0.38)] hover:shadow-[0_18px_50px_rgba(255,107,74,0.6)] hover:scale-105 active:scale-98"
          >
            <span>Let's talk</span>
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={15} />
            </span>
          </button>
        </div>

      </div>

      {/* LOWER HALF: Interactive Showcase - Circular Rotating Media Cards */}
      <div
        onMouseMove={handleMouseMove}
        className="relative z-10 w-full overflow-hidden pointer-events-auto select-none mt-8 sm:mt-12"
        style={{ height: `${showcaseHeight}px` }}
      >
        {/* Invisible circular rotation anchor */}
        <div className="relative w-full h-full">
          {showcaseCards.map((card, idx) => {
            const k = idx - centerIndex;
            const baseAngle = k * angularStep;
            const currentAngle = baseAngle + scrollRotation + mouseOffset;
            const rad = (currentAngle * Math.PI) / 180;

            // Compute exact circular path position
            const posX = radius * Math.sin(rad) + scrollShiftX + (mouseOffset * 2.5);
            const posY = radius * (1 - Math.cos(rad)) + scrollShiftY;
            const isHovered = activeHoverId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveHoverId(card.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                style={{
                  left: '50%',
                  top: `${anchorY}px`,
                  transform: `translate(-50%, -50%) translate3d(${posX}px, ${posY}px, 0) rotate(${currentAngle}deg) scale(${
                    isHovered ? 1.06 : 1
                  })`,
                  zIndex: isHovered ? 50 : 20 + (10 - Math.abs(k)),
                  transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                className={`absolute w-[160px] sm:w-[195px] md:w-[210px] h-[250px] sm:h-[300px] md:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-black/90 border ${
                  isHovered ? 'border-[#FF7A59]/80 shadow-[0_30px_70px_rgba(255,107,74,0.35)]' : 'border-white/15 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9)]'
                }`}
              >
                {/* Background media / Video / Photo */}
                <div className={`relative w-full h-full bg-gradient-to-b ${card.grad}`}>
                  {card.type === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={card.videoSrc}
                        loop
                        muted
                        playsInline
                        autoPlay
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25"></div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <div className="text-4xl sm:text-5xl mb-3 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                        {card.previewIcon || '🎬'}
                      </div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
                        Cinematic Still
                      </span>
                    </div>
                  )}

                  {/* Top Eyebrow Tag */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[9px] uppercase tracking-wider text-white/70">
                      {card.tag}
                    </span>
                    {card.type === 'video' && (
                      <span className="w-5 h-5 rounded-full bg-[#FF6B4A]/90 text-white flex items-center justify-center shadow-[0_0_10px_rgba(255,107,74,0.6)]">
                        <Play size={10} className="fill-white translate-x-[0.5px]" />
                      </span>
                    )}
                  </div>

                  {/* Gradient Overlay for bottom text */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/75 to-transparent pointer-events-none"></div>

                  {/* Bottom Text Description */}
                  <div className="absolute bottom-0 inset-x-0 p-4 z-10 pointer-events-none">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF7A59] mb-1 font-semibold">
                      {card.category}
                    </p>
                    <h4 className="font-syncopate font-bold text-xs sm:text-sm text-white uppercase leading-snug line-clamp-2">
                      {card.title}
                    </h4>
                  </div>

                  {/* Glowing border highlight on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
                      isHovered ? 'opacity-100 ring-1 ring-[#FF7A59]' : 'opacity-0'
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* HORIZON BASELINE: Crisp luminous line where outer cards disappear below */}
      <div className="relative w-full z-20 pointer-events-none">
        {/* Full-width crisp horizontal datum line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"></div>
        {/* Warm peach center glow on the line */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[2px] w-72 sm:w-[500px] h-[5px] bg-gradient-to-r from-transparent via-[#FF6B4A]/50 to-transparent blur-[2px]"></div>
        {/* Broad atmospheric haze */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-[700px] h-12 bg-white/[0.025] blur-xl"></div>
      </div>

      {/* FOOTER: Very Bottom Dark-Mode Footer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        
        {/* Centered links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-6 font-mono text-xs uppercase tracking-wider text-white/60">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="hover:text-[#FF7A59] transition-colors duration-200"
          >
            Get in touch
          </button>
          <span className="text-white/20 select-none">•</span>
          <button
            onClick={() => setActiveLegalModal('privacy')}
            className="hover:text-[#FF7A59] transition-colors duration-200"
          >
            Privacy Policy
          </button>
          <span className="text-white/20 select-none">•</span>
          <button
            onClick={() => setActiveLegalModal('terms')}
            className="hover:text-[#FF7A59] transition-colors duration-200"
          >
            Terms of Use
          </button>
        </div>

        {/* Centered copyright text */}
        <p className="font-mono text-xs text-white/40 tracking-wider">
          © 2026 FrameMotion Film. All rights reserved.
        </p>
      </div>

      {/* ========================================== */}
      {/* MODAL: Contact Inquiry ("Let's talk")      */}
      {/* ========================================== */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
          <div
            className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B4A]/10 border border-[#FF6B4A]/30 font-mono text-[11px] text-[#FF7A59] uppercase tracking-widest mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A] animate-pulse"></span>
                <span>Initiate Production</span>
              </div>
              <h3 className="font-syncopate font-bold text-2xl uppercase text-white">
                Let's Talk.
              </h3>
              <p className="font-inter text-xs sm:text-sm text-white/60 font-light mt-1">
                Tell us about your next visual campaign or expedition.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FF6B4A]/20 border border-[#FF6B4A] text-[#FF7A59] flex items-center justify-center mx-auto text-2xl shadow-[0_0_25px_rgba(255,107,74,0.4)]">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="font-syncopate font-bold text-lg uppercase text-white">
                  Brief Transmitted
                </h4>
                <p className="font-inter text-xs sm:text-sm text-white/70 max-w-xs mx-auto font-light leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our lead director will review your brief and connect within 4 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setIsContactModalOpen(false);
                    setFormData({ name: '', email: '', scope: 'Commercial Campaign', message: '' });
                  }}
                  className="mt-3 px-6 py-2.5 rounded-full bg-[#FF6B4A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#FF5530] transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-inter text-sm">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Your Name or Brand *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ritik Saxena / Brand Name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-xs sm:text-sm outline-none focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@enterprise.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-xs sm:text-sm outline-none focus:border-[#FF7A59] focus:ring-1 focus:ring-[#FF7A59] transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Scope of Production *
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm outline-none focus:border-[#FF7A59] transition-all cursor-pointer"
                  >
                    <option value="Commercial Campaign">Commercial Ad & Brand Anthem</option>
                    <option value="High Altitude Expedition">High Altitude & Drone Expedition</option>
                    <option value="Event & Sports Master">Sports & Arena Event Coverage</option>
                    <option value="9:16 Vertical Retainer">9:16 Kinetic Media Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-1.5">
                    Brief & Vision
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Timeline, locations, camera package or deliverables..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/30 text-xs sm:text-sm outline-none focus:border-[#FF7A59] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-[#FF6B4A] hover:bg-[#FF5530] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_10px_25px_rgba(255,107,74,0.35)] flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Production Brief ↗'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* MODAL: Legal (Privacy Policy / Terms)      */}
      {/* ========================================== */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300">
          <div
            className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl text-left font-inter"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 font-mono text-xs text-[#FF7A59] uppercase tracking-widest mb-3">
              {activeLegalModal === 'privacy' ? <Shield size={14} /> : <FileText size={14} />}
              <span>{activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}</span>
            </div>

            <h3 className="font-syncopate font-bold text-xl uppercase text-white mb-4">
              {activeLegalModal === 'privacy' ? 'Data & Content Privacy' : 'Production Terms'}
            </h3>

            <div className="space-y-3 text-xs text-white/70 font-light leading-relaxed max-h-60 overflow-y-auto pr-2">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    FrameMotion Film values your confidentiality. Any project briefs, raw footages, storyboards, or enterprise contact information submitted to us are strictly safeguarded under non-disclosure standards.
                  </p>
                  <p>
                    We do not sell, license, or transmit your contact data to third parties. Information collected is solely utilized to formulate production proposals and communicate deliverables.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All cinematographic assets, drone aerials, soundscapes, and project masters produced by FrameMotion are licensed subject to individualized commercial production agreements.
                  </p>
                  <p>
                    Safety and regulatory compliance govern all UAV drone operations. High-altitude operations in Spiti and Kinnaur comply with DGCA aviation standards and environmental conservation protocols.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider uppercase transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
