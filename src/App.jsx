import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import ScenicGallery from './components/ScenicGallery';
import ServicesProcess from './components/ServicesProcess';
import CollaborateFooter from './components/CollaborateFooter';
import CustomCursor from './components/CustomCursor';
import ShowreelModal from './components/ShowreelModal';
import ReelModal from './components/ReelModal';
import LightboxModal from './components/LightboxModal';
import { audioEngine } from './components/AudioEngine';

export default function App() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [letterboxActive, setLetterboxActive] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const contactRef = useRef(null);

  const handleToggleLetterbox = () => {
    const topBar = document.getElementById('letterbox-top');
    const bottomBar = document.getElementById('letterbox-bottom');
    const nextState = !letterboxActive;
    setLetterboxActive(nextState);
    if (topBar && bottomBar) {
      topBar.style.height = nextState ? '60px' : '0';
      bottomBar.style.height = nextState ? '60px' : '0';
    }
  };

  const handleToggleAudio = () => {
    const newState = audioEngine.toggle();
    setAudioPlaying(newState);
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-pitch text-white font-inter selection:bg-neonCyan selection:text-pitch overflow-x-hidden antialiased cinema-grid-bg relative">
      {/* Film Grain & Letterbox */}
      <div className="pointer-events-none fixed inset-0 z-50 film-grain"></div>
      <div id="letterbox-top" className="letterbox-bar fixed top-0 left-0 w-full h-0 bg-black z-40 pointer-events-none border-b border-white/5 transition-all duration-500"></div>
      <div id="letterbox-bottom" className="letterbox-bar fixed bottom-0 left-0 w-full h-0 bg-black z-40 pointer-events-none border-t border-white/5 transition-all duration-500"></div>

      <CustomCursor />

      <Navbar
        onOpenContact={handleScrollToContact}
        onToggleLetterbox={handleToggleLetterbox}
        letterboxActive={letterboxActive}
        audioPlaying={audioPlaying}
        onToggleAudio={handleToggleAudio}
      />

      <main>
        <Hero
          onOpenReel={() => setShowreelOpen(true)}
          onScrollToWork={handleScrollToWork}
        />

        <SelectedWork
          onSelectReel={(reel) => setSelectedReel(reel)}
        />

        <ScenicGallery
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        />

        <ServicesProcess />

        <CollaborateFooter contactRef={contactRef} />
      </main>

      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />

      <ReelModal
        reel={selectedReel}
        onClose={() => setSelectedReel(null)}
      />

      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}
