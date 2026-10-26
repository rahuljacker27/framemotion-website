import React, { useState, useEffect } from 'react';

export default function CollaborateFooter({ contactRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Campaign',
    budget: '$15,000 – $35,000',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <footer id="contact" ref={contactRef} className="pt-24 sm:pt-36 pb-16 relative bg-pitch border-t border-borderDark overflow-hidden">
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neonCyan/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-electricPurple/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-neonCyan">
              <span className="w-2 h-2 rounded-full bg-recRed animate-rec-blink"></span>
              <span>COMMISSIONS OPEN Q3/Q4</span>
            </div>

            <h2 className="font-syne font-black text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] text-white break-words">
              HAVE A VISION? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan via-white to-electricPurple">
                LET’S CAPTURE IT.
              </span>
            </h2>

            <p className="text-white/60 text-base sm:text-lg max-w-md leading-relaxed">
              We partner with forward-thinking brands, visionary directors, and luxury labels to craft imagery that leaves an indelible mark.
            </p>

            <div className="p-5 sm:p-6 rounded-xl bg-surface/50 border border-white/5 space-y-3 font-mono text-xs">
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1 text-white/50">
                <span>STUDIO LOCAL TIME</span>
                <span className="text-white font-bold">{localTime} UTC+5:30</span>
              </div>
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1 text-white/50">
                <span>ACTIVE HUBS</span>
                <span className="text-neonCyan">LOS ANGELES • TOKYO • LONDON</span>
              </div>
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1 text-white/50">
                <span>STORAGE ARRAY</span>
                <span>12-BIT RAW • 8.4TB READY</span>
              </div>
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-1 text-white/50">
                <span>STATUS</span>
                <span className="text-recRed font-bold">● STANDBY FOR PRODUCTION</span>
              </div>
            </div>

            <div className="pt-2 text-sm text-white/80 space-y-2">
              <div>
                <span className="text-white/40 font-mono text-xs block">DIRECT INQUIRIES</span>
                <a href="mailto:hello@framemotion.studio" className="font-syne text-base sm:text-lg font-bold hover:text-neonCyan transition-colors break-all">
                  hello@framemotion.studio
                </a>
              </div>
              <div>
                <span className="text-white/40 font-mono text-xs block">PRODUCER DIRECT</span>
                <a href="tel:+13105550198" className="font-mono text-xs hover:text-neonCyan transition-colors">
                  +1 (310) 555-0198
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-6 bg-surface/70 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            
            <span className="absolute top-3 left-3 text-[10px] font-mono text-white/20">┌ INPUT_TERMINAL</span>
            <span className="absolute top-3 right-3 text-[10px] font-mono text-neonCyan/40">READY ┐</span>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-neonCyan/20 border border-neonCyan text-neonCyan flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="font-syne font-bold text-2xl text-white">
                  Transmission Received
                </h3>
                <p className="text-white/60 text-sm max-w-sm mx-auto">
                  Thank you, <span className="text-neonCyan">{formData.name}</span>. Our lead creative producer will review your project brief and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-full border border-white/20 text-xs font-mono text-white/80 hover:text-white hover:border-neonCyan transition-colors"
                >
                  SEND ANOTHER BRIEF
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Vance (L’Oréal)"
                    className="w-full px-4 py-3 rounded-xl bg-pitch/80 border border-white/15 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-white text-sm placeholder-white/20 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-pitch/80 border border-white/15 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-white text-sm placeholder-white/20 transition-all outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-pitch/80 border border-white/15 focus:border-neonCyan text-white text-sm transition-all outline-none cursor-pointer"
                    >
                      <option value="Commercial Campaign">Commercial Campaign</option>
                      <option value="Social Media Reels / TikTok">Social Media Reels (9:16)</option>
                      <option value="Travel / Scenic Documentary">Travel & Scenic Editorial</option>
                      <option value="Multi-Cam Live Production">Multi-Cam Live Coverage</option>
                      <option value="Music Video Finishing">Music Video / Color & VFX</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-pitch/80 border border-white/15 focus:border-neonCyan text-white text-sm transition-all outline-none cursor-pointer"
                    >
                      <option value="$10,000 – $25,000">$10,000 – $25,000</option>
                      <option value="$25,000 – $50,000">$25,000 – $50,000</option>
                      <option value="$50,000 – $100,000">$50,000 – $100,000</option>
                      <option value="$100,000+">$100,000+ (Global Campaign)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Project Brief & Vision *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the narrative, target timeline, aesthetic references..."
                    className="w-full px-4 py-3 rounded-xl bg-pitch/80 border border-white/15 focus:border-neonCyan focus:ring-1 focus:ring-neonCyan text-white text-sm placeholder-white/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="SUBMIT"
                  className="w-full relative group overflow-hidden rounded-xl p-[1.5px] focus:outline-none transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neonCyan via-electricPurple to-neonCyan rounded-xl opacity-90 group-hover:opacity-100 blur-[2px] transition-all"></span>
                  <span className="relative flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-pitch transition-all duration-300 group-hover:bg-pitch/80 text-sm font-bold tracking-widest uppercase text-white group-hover:text-neonCyan shadow-lg">
                    {isSubmitting ? (
                      <>
                        <span className="w-3 h-3 rounded-full border-2 border-neonCyan border-t-transparent animate-spin"></span>
                        <span>ENCRYPTING BRIEF...</span>
                      </>
                    ) : (
                      <>
                        <span>START A PROJECT</span>
                        <span className="text-neonCyan text-base group-hover:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-white/50">
          <div>
            © 2026 Framemotion Studios Inc. All rights reserved. Directed by Emotion.
          </div>

          <div className="flex items-center space-x-6 text-white/70">
            {[
              { name: 'VIMEO', href: '#' },
              { name: 'INSTAGRAM', href: '#' },
              { name: 'YOUTUBE', href: '#' },
              { name: 'BEHANCE', href: '#' },
              { name: 'X / TWITTER', href: '#' }
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                data-cursor="LINK"
                className="hover:text-neonCyan transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>

          <div className="text-right text-[11px] text-white/40">
            <span>ENCODED 4K DCI • SHOT ON ARRI & RED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
