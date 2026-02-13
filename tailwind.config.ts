import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#7FD957',
        secondary: '#5DADE2',
        accent: '#FF8C42',
      },
    },
  },
  plugins: [],
} satisfies Config;
