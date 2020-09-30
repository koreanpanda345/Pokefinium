const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screen: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
        cssPath: '~/assets/css/tailwind.css'
      },
      container: {
        center: true
      }
    }
  }
}