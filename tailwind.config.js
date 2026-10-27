/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pitch: '#000000',
        charcoal: '#111111',
        charcoalDark: '#080808',
        charcoalLight: '#1a1a1a',
        surface: '#121214',
        surfaceLight: '#18181c',
        borderDark: 'rgba(255, 255, 255, 0.08)',
        borderGlow: 'rgba(0, 242, 254, 0.4)',
        neonCyan: '#00f2fe',
        neonCyanMuted: 'rgba(0, 242, 254, 0.15)',
        recRed: '#ff0055',
      },
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        monument: ['"Monument Extended"', 'Syncopate', 'Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rec-blink': 'recBlink 1.2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        recBlink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(0.85)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.25)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 242, 254, 0.55)' },
        }
      }
    },
  },
  plugins: [],
}
