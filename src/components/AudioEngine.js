// Atmospheric Cinema Sound Engine using Web Audio API
export class CinematicAudioEngine {
  constructor() {
    this.ctx = null;
    this.osc1 = null;
    this.osc2 = null;
    this.filter = null;
    this.gain = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    this.gain = this.ctx.createGain();
    this.gain.gain.setValueAtTime(0.001, now);
    this.gain.gain.exponentialRampToValueAtTime(0.12, now + 3);

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(140, now);

    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sawtooth';
    this.osc1.frequency.setValueAtTime(36.71, now); // D1

    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'sine';
    this.osc2.frequency.setValueAtTime(55.00, now); // A1

    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.15, now);
    this.lfoGain = this.ctx.createGain();
    this.lfoGain.gain.setValueAtTime(60, now);
    this.lfo.connect(this.lfoGain);
    this.lfoGain.connect(this.filter.frequency);

    this.osc1.connect(this.filter);
    this.osc2.connect(this.filter);
    this.filter.connect(this.gain);
    this.gain.connect(this.ctx.destination);

    this.osc1.start(now);
    this.osc2.start(now);
    this.lfo.start(now);
    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying || !this.gain || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
    setTimeout(() => {
      try {
        if (this.osc1) this.osc1.stop();
        if (this.osc2) this.osc2.stop();
        if (this.lfo) this.lfo.stop();
      } catch (e) {}
      this.isPlaying = false;
    }, 1600);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const audioEngine = new CinematicAudioEngine();
