const DaisyUiPlugin = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [DaisyUiPlugin],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
