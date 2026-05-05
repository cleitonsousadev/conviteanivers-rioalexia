import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#A47DAB',
        'brand-secondary': '#D4A5DE',
        'brand-accent': '#FFD670',
        'brand-soft': '#FAF9FB',
        'brand-dark': '#322635',
      },
    },
  },
  plugins: [],
} satisfies Config
