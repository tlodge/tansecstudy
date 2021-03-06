module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      colors:{
        
        white: "#fff",
        vlightgray: "#efefef",
        lightgray: "#44505A",
        gray: "#454A59",
        darkgray: "#2F3D49",
        orange: "#FF6445"
      },
      transitionDuration: {
        '0': '0ms',
        '5000': '5000ms'
       },
       width: {
        '766': '931px'
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
