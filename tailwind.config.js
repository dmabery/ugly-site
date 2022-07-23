module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Space Grotesk', 'monospace'],
      body: ['Inter', 'Sans-serif'],
      mono: ['monospace']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}