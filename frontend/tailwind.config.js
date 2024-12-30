/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Paths to all files using TailwindCSS classes
  theme: {
    extend: {}, // Extend theme if necessary
  },
  plugins: [require('daisyui')], // Include DaisyUI plugin
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk'], // DaisyUI themes
  },
};