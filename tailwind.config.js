export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#e8ddd4',      // Sand für Light Mode
        'app-text': '#2d3341',     // Dunkel für Light Mode Text
        'app-bg-dark': '#2d3341',  // Dunkel für Dark Mode
        'app-text-dark': '#e8ddd4', // Sand für Dark Mode Text
        'sand': '#b6aa9c',
        'darkbg': '#2d3341'
      },
    },
  },
  plugins: [],
};