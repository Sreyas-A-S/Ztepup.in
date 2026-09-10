/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          lime: '#55BB00',
          emerald: '#008837',
          dark: '#0B131F',
          slate: '#1E293B',
          surface: '#F8FAFC',
          border: '#E2E8F0',
        }
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #55BB00 0%, #008837 100%)',
        'brand-subtle': 'linear-gradient(180deg, rgba(85, 187, 0, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      }
    },
  },
  plugins: [],
}
