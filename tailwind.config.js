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
    'seashell': {
        '50': '#f8f8f8',
        '100': '#f1f1f1',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    },
    'aqua-spring': {
        '50': '#edfbf8',
        '100': '#d0f7f0',
        '200': '#a1eee0',
        '300': '#6adece',
        '400': '#3bc6b7',
        '500': '#22aa9d',
        '600': '#188981',
        '700': '#186d68',
        '800': '#175854',
        '900': '#184947',
        '950': '#082a2b',
    },
    
    
    
       },
       
       
    },
  },
  plugins: [],
}

