module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors:{
        
        white: "#fff",
        lightgray: "#44505A",
        gray: "#454A59",
        darkgray: "#2F3D49"
      },
      transitionDuration: {
        '0': '0ms',
        '5000': '5000ms'
       },
       width: {
        '766': '766px'
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
