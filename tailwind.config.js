/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'portrait-tablet': '641px',
        // => @media (min-width: 641px) { ... }
        'tablet' : '961px',
      },
      spacing: {
        'lg-nav': '3.2rem',
        'lg-p' : '2rem',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',

        'turquoise': {
        '50': '#f0fdf9',
        '100': '#ccfbee',
        '200': '#9af5de',
        '300': '#5fe9ca',
        '400': '#42d7bb',
        '500': '#15b79b',
        '600': '#0e937f',
        '700': '#107567',
        '800': '#125d54',
        '900': '#134e46',
        '950': '#042f2b',
    },
    
       },
       
       
    },
  },
  plugins: [],
}

