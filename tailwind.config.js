/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'transparent': "transparent",
      'white': "#ffffff",
      'red': "#f20606",
      'orange': "#ff703f",
      'sunflower': "#f8991d",
      'yellow': "#f2e70f",
      'pink': "#ea6fa4",
      'sky': "#70beec",
    },
    screens: {
      sm: "480px",
      md: "786px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      velodroma : ['Velodroma', 'sans-serif'],
      sans : ['Helvetica', 'Arial', 'sans-serif'],
    },
    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-pattern.svg')",
      },
      heroPatterns: ['responsive'],
    },
  },
  plugins: [
    require('tailwindcss-hero-patterns'),
  ],
}
