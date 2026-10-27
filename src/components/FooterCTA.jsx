import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Send, CheckCircle2, Clock, Globe, Instagram, Linkedin, Video } from 'lucide-react';

export default function FooterCTA({ contactRef }) {
  const [formData, setFormData] = useState({
    name: '',
    scope: 'Event Coverage', // Dropdown: Event Coverage, Travel Campaign, AI/Vertical Retainer
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeUtc, setTimeUtc] = useState('');
  const [timeIst, setTimeIst] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(now.toUTCString().split(' ')[4] + ' UTC');
      setTimeIst(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <footer id="contact" ref={contactRef} className="relative py-28 sm:py-36 bg-black text-white border-t border-white/10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-neonCyan/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Giant Text */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-10">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70 mb-6">
                <span className="w-2 h-2 rounded-full bg-neonCyan animate-pulse"></span>
                <span>PRODUCTION INQUIRY // Q4</span>
              </div>

              {/* Giant Text reading: "Ready to craft the next frame? Let's talk." */}
              <h2 className="font-syncopate font-bold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.1]">
                Ready to craft the{' '}
                <span className="text-neonCyan drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                  next frame?
                </span>{' '}
                <br className="hidden sm:block" />
                Let's talk.
              </h2>

              <p className="font-inter text-base sm:text-lg text-white/60 font-light mt-6 max-w-lg leading-relaxed">
                Whether deploying 8K multi-cam crews for international summits or embarking on remote mountain expeditions, our directors translate vision into kinetic momentum.
              </p>
            </div>

            {/* Studio Coordinates & Quick Contacts */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-xs font-mono text-white/50">
                <div>
                  <span className="text-white/30 block mb-0.5">DIRECT ENQUIRIES</span>
                  <a href="mailto:hello@framemotion.com" className="text-white hover:text-neonCyan transition-colors">
                    hello@framemotion.com
                  </a>
                </div>
                <div>
                  <span className="text-white/30 block mb-0.5">BASE CAMP</span>
                  <span className="text-white">NEW DELHI / SPITI VALLEY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Minimalist High-End Inquiry Form */}
          <div className="lg:col-span-6 bg-charcoal/80 border border-white/10 rounded-lg sm:rounded-xl p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-neonCyan/10 border border-neonCyan flex items-center justify-center text-neonCyan shadow-[0_0_25px_rgba(0,242,254,0.4)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-syncopate font-bold text-xl uppercase text-white">
                  Frame Initialized
                </h3>
                <p className="font-inter text-sm text-white/70 max-w-sm font-light leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your brief for <span className="text-neonCyan">{formData.scope}</span> has been logged. Our executive producer will respond within 4 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', scope: 'Event Coverage', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                    01 // What is your name or enterprise? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera or Apex Media"
                    className="w-full bg-black/60 border border-white/15 focus:border-neonCyan rounded-md px-4 py-3.5 text-white placeholder-white/25 text-sm font-inter outline-none transition-colors duration-300 focus:ring-1 focus:ring-neonCyan"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                    02 // Scope of Project *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 focus:border-neonCyan rounded-md px-4 py-3.5 text-white text-sm font-inter outline-none transition-colors duration-300 focus:ring-1 focus:ring-neonCyan appearance-none cursor-pointer"
                    >
                      <option value="Event Coverage" className="bg-black text-white">Event Coverage</option>
                      <option value="Travel Campaign" className="bg-black text-white">Travel Campaign</option>
                      <option value="AI/Vertical Retainer" className="bg-black text-white">AI/Vertical Retainer</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
                      ▼
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-white/70 mb-2">
                    03 // Project Vision & Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the timeline, target locations, deliverables, or brand narrative..."
                    className="w-full bg-black/60 border border-white/15 focus:border-neonCyan rounded-md px-4 py-3 text-white placeholder-white/25 text-sm font-inter outline-none transition-colors duration-300 focus:ring-1 focus:ring-neonCyan resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-md bg-white hover:bg-neonCyan text-black font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.45)] flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="font-mono text-xs">ENCRYPTING TRANSMISSION...</span>
                  ) : (
                    <>
                      <span>Transmit Brief</span>
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Line: Copyright, Social Links, and Small Time-Stamp Graphic */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="font-mono text-xs text-white/40 tracking-wider">
            © Framemotion. All rights reserved.
          </div>

          {/* Social Links (Instagram, LinkedIn, Vimeo) */}
          <div className="flex items-center space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-neonCyan transition-colors"
            >
              <Instagram size={14} />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-neonCyan transition-colors"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white/60 hover:text-neonCyan transition-colors"
            >
              <Video size={14} />
              <span>Vimeo</span>
            </a>
          </div>

          {/* Small Time-Stamp Graphic */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-charcoal border border-white/10 font-mono text-[11px] text-white/60">
            <Clock size={12} className="text-neonCyan" />
            <span className="text-white/40">{timeUtc}</span>
            <span className="text-white/20">|</span>
            <span className="text-neonCyan">{timeIst}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neonCyan animate-ping ml-1"></span>
          </div>

        </div>

      </div>
    </footer>
  );
}
