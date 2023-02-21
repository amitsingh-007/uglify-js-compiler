const DaisyUiPlugin = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [DaisyUiPlugin],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
