/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          DEFAULT: '#F8EDE8',
          deep: '#F0DDD6',
          mist: '#F3E0DC',
        },
        pearl: '#FFF9F6',
        rose: {
          DEFAULT: '#C9898F',
          deep: '#A66B72',
          rich: '#7A454C',
        },
        copper: {
          DEFAULT: '#C4956A',
          soft: '#E5C9B0',
        },
        ink: {
          DEFAULT: '#2A2224',
          soft: '#6B5E60',
          faint: '#9A8C8E',
        },
        mauve: '#B9A4B0',
        border: '#EAD5CF',
      },
      fontFamily: {
        display: ['"Cormorant Infant"', 'serif'],
        body: ['Jost', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        rose: '0 10px 40px rgba(169, 107, 114, 0.08)',
        'rose-md': '0 16px 48px rgba(169, 107, 114, 0.14)',
        'rose-lg': '0 24px 64px rgba(169, 107, 114, 0.2)',
        copper: '0 8px 32px rgba(196, 149, 106, 0.16)',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-slower': 'floatSlow 12s ease-in-out infinite reverse',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
