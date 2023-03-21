/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        veryLightgrey: 'rgba(0, 0, 0, 0.06)',
        lightGrey: 'rgba(76, 78, 100, 0.54)',
      },
      fontFamily: {
        'DMSans': ['DM Sans', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'WorkSans': ['Work Sans', 'sans-serif']
      },
    },
  },
  plugins: [
  
  ],
}
