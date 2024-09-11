/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'catppuccin-mocha': {
          rosewater: '#f5e0dc',
          flame: '#f28fAD',
          pink: '#f5c2e7',
          mauve: '#cba6f7',
          red: '#ed79a6',
          maroon: '#eab0ac',
          peach: '#f5a97f',
          yellow: '#f9e2af',
          green: '#a6e3a1',
          teal: '#94e2d5',
          sky: '#89dceb',
          blue: '#74c7ec',
          lavender: '#b9b9b9',
          text: '#e0d7f7',
          subtext1: '#c6d0f5',
          subtext0: '#b5b5b5',
          overlay2: '#a6a6a6',
          overlay1: '#8c8c8c',
          overlay0: '#6b6b6b',
          surface2: '#5c5c5c',
          surface1: '#3e3e3e',
          surface0: '#1e1e1e',
          base: '#1e1e2e',
          mantle: '#181825',
          crust: '#11111b',
        },
        background: '#1e1e2e',
        text: '#e0d7f7',
        accent: '#f5c2e7', // Accent color set to Pink
      },
    },
  },
  plugins: [],
}
