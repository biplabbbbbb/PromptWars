/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f7fb',
          100: '#eceef6',
          200: '#d5d9ea',
          300: '#b0b8d6',
          400: '#8590bd',
          500: '#626fa3',
          600: '#4c5688',
          700: '#3e466e',
          800: '#363c5a',
          900: '#1f2335',
          950: '#13162a',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        neon: {
          cyan: '#22d3ee',
          teal: '#2dd4bf',
          emerald: '#34d399',
          sky: '#38bdf8',
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34, 211, 238, 0.45)',
        'glow-lg': '0 0 80px -15px rgba(34, 211, 238, 0.55)',
        card: '0 10px 40px -12px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(120,140,200,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,140,200,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
