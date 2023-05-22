/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1350px',
      }
    },
    fontFamily: {
      'display': ['Poppins', 'sans-serif'],
      'body': ['Roboto', 'sans-serif'],
      // 'jameel': ['jameel-noori-nastaleeq'],
    },
    extend: {
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'], // 10px
        '3xs': ['0.5rem', '0.625rem'], // 8px
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
