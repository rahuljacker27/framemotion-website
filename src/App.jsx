import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoriesInMotion from './components/StoriesInMotion';
import Manifesto from './components/Manifesto';
import DigitalFlow from './components/DigitalFlow';
import CapabilitiesMarquee from './components/CapabilitiesMarquee';
import FooterCTA from './components/FooterCTA';
import ShowreelModal from './components/ShowreelModal';
import ReelModal from './components/ReelModal';
import CustomCursor from './components/CustomCursor';
import { audioEngine } from './components/AudioEngine';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);
  const [letterboxActive, setLetterboxActive] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const contactRef = useRef(null);

  const handleToggleLetterbox = () => {
    const topBar = document.getElementById('letterbox-top');
    const bottomBar = document.getElementById('letterbox-bottom');
    const nextState = !letterboxActive;
    setLetterboxActive(nextState);
    if (topBar && bottomBar) {
      topBar.style.height = nextState ? '54px' : '0';
      bottomBar.style.height = nextState ? '54px' : '0';
    }
  };

  const handleToggleAudio = () => {
    if (audioEngine) {
      const newState = audioEngine.toggle();
      setAudioPlaying(newState);
    }
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-neonCyan selection:text-black overflow-x-hidden antialiased cinema-grid-bg relative w-full">
      {/* Film Grain & Letterbox Overlays */}
      <div className="pointer-events-none fixed inset-0 z-50 film-grain"></div>
      <div id="letterbox-top" className="letterbox-bar fixed top-0 left-0 w-full h-0 bg-black z-40 pointer-events-none border-b border-white/5 transition-all duration-500"></div>
      <div id="letterbox-bottom" className="letterbox-bar fixed bottom-0 left-0 w-full h-0 bg-black z-40 pointer-events-none border-t border-white/5 transition-all duration-500"></div>

      {/* Custom Reticle Cursor */}
      <CustomCursor />

      {/* Header / Nav */}
      <Navbar
        onOpenContact={handleScrollToContact}
        onToggleLetterbox={handleToggleLetterbox}
        letterboxActive={letterboxActive}
        audioPlaying={audioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      <main>
        {/* Section 1: The Hero (The Pulse of the Frame) */}
        <Hero
          onOpenReel={() => setShowreelOpen(true)}
          onScrollToWork={handleScrollToWork}
          onStartProduction={handleScrollToContact}
        />

        {/* Section 2: Stories in Motion (The Director's Cut) */}
        <StoriesInMotion
          onSelectProject={(project) => setSelectedReel(project)}
        />

        {/* Section 3: The Manifesto (The Vision Behind the Flow) */}
        <Manifesto />

        {/* Section 4: The Innovation Lab & Digital Flow */}
        <DigitalFlow
          onSelectReel={(reel) => setSelectedReel(reel)}
        />

        {/* Section 5: The Flow of Capabilities (Marquee) */}
        <CapabilitiesMarquee />

        {/* Section 6: The Footer (Ready to Move Forward?) */}
        <FooterCTA contactRef={contactRef} />
      </main>

      {/* Modals */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

      <ReelModal
        reel={selectedReel}
        onClose={() => setSelectedReel(null)}
      />
    </div>
  );
}
