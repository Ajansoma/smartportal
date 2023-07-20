/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      colors: {
        'primary-100': '#918EDE',
        'primary-200': '#908CB8',
        'primary-300': '#f4f4fc',
        'primary-400': '#918EDE',
        'primary-500': '#efeff6',
        'sec-100': '#B162A9',
        'sec-200': '#f7eff6',
        'sec-300': '#F07096',
        'sec-400': '#fef1f5',
        'sec-500': '#e6faf4',
        'sec-600': '#00c894',
        'text-100': '#495057',
        'text-200': '#868e96',
      },
    },
  },
  plugins: [],
};
