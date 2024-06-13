/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',    
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

