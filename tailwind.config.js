/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        zen: {
          bg: '#F5F0E6',
          gold: '#D4B982',
          black: '#1A1A1A',
        },
      },
      backgroundImage: {
        'yin-yang': "url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      },
    },
  },
  plugins: [],
};