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
        pitch: '#050505',
        charcoal: '#0F0F11',
        surface: '#151518',
        surfaceLight: '#1C1C22',
        borderDark: 'rgba(255, 255, 255, 0.08)',
        borderGlow: 'rgba(0, 242, 254, 0.35)',
        neonCyan: '#00f2fe',
        neonCyanMuted: 'rgba(0, 242, 254, 0.15)',
        electricPurple: '#7f00ff',
        electricPurpleMuted: 'rgba(127, 0, 255, 0.15)',
        recRed: '#ff0055',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        serifExpressive: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rec-blink': 'recBlink 1.2s ease-in-out infinite',
        'radar-spin': 'spin 12s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        recBlink: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(0.85)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)' },
          '50%': { boxShadow: '0 0 35px rgba(0, 242, 254, 0.6), 0 0 10px rgba(127, 0, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
