/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5B82A',
          dark: '#d9a21b',
          light: '#fcd96a',
        },
        secondary: {
          DEFAULT: '#101d3b',
          mid: '#1a2f5e',
        },
        accent: '#1B8A8A',
        light: '#F4F6FA',
        'light-2': '#EEF1F8',
        dark: '#0f172a',
        gray: '#64748b',
        'gray-light': '#94a3b8',
        border: '#e2e8f0',
        success: '#10B981',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        pill: '999px',
      },
      boxShadow: {
        'gold': '0 8px 32px rgba(245, 184, 42, 0.35)',
        'gold-lg': '0 16px 48px rgba(245, 184, 42, 0.45)',
        'card': '0 4px 16px rgba(15, 23, 42, 0.08), 0 1px 4px rgba(15,23,42,0.04)',
        'card-hover': '0 16px 40px rgba(15, 23, 42, 0.14), 0 4px 12px rgba(15,23,42,0.06)',
        'sm': '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.05)',
      },
      animation: {
        'bounce-in': 'bounceIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'hop': 'hop 2.4s linear forwards',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
