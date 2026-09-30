/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f7f7f8',
          100: '#ececef',
          200: '#d5d6db',
          300: '#b1b3bd',
          400: '#878a98',
          500: '#696b7b',
          600: '#555664',
          700: '#464753',
          800: '#3c3d46',
          900: '#1a1b1f',
          950: '#0e0f11',
        },
        leather: {
          50: '#faf5ef',
          100: '#f1e6d6',
          200: '#e3cba9',
          300: '#d4ab76',
          400: '#c58d4e',
          500: '#b67535',
          600: '#a55f2c',
          700: '#884826',
          800: '#6f3b26',
          900: '#5b3222',
          950: '#331910',
        },
        cream: {
          50: '#fefcf8',
          100: '#fdf8ee',
          200: '#faefd9',
          300: '#f5e2bc',
          400: '#efd096',
          500: '#e8bc74',
        },
        accent: {
          DEFAULT: '#C2410C',
          light: '#EA580C',
          dark: '#9A3412',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl2': '22px',
        'pill': '999px',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0, 0, 0, 0.08), 0 8px 24px -8px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 16px -4px rgba(0, 0, 0, 0.06), 0 16px 40px -16px rgba(0, 0, 0, 0.1)',
        'deep': '0 8px 32px -8px rgba(0, 0, 0, 0.12), 0 32px 64px -32px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}
