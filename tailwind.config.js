/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx,jsx,mdx}',
    './pages/**/*.{js,ts,tsx,jsx,mdx}',
    './components/**/*.{js,ts,tsx,jsx,mdx}'
  ],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['Lato']
    }
  },
  plugins: [],
}

