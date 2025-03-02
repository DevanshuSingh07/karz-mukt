/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens:{
        "xsm":"375px",
        "xlg":"1340px"
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '30px',
      },
      colors:{
        'blu':'#1E3A8A',
        'grn':'#0D9488'
      }
    
    },
  },
  plugins: [],
}

