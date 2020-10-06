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
		  primary: defaultTheme.backgroundColor.dark,
		  secondary: defaultTheme.backgroundColor['light-gray']
      },
      container: {
        center: true
      }
    }
  },
  purge: {
	//enable remove unused CSS only in production
	enabled: process.env.NODE_ENV === 'production',
	//any file that may contain the reference of CSS styles by class name.
	content: [
	 'components/**/*.vue',
	 'layouts/**/*.vue',
	 'pages/**/*.vue',
	 'plugins/**/*.js',
	 'nuxt.config.js'
	]
   }
}