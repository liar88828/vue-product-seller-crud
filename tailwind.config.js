/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
     
      padding: {
        DEFAULT: "2vw",
        sm: "3vw",
        md: "3vw",
        lg: "3vw",
        
      },
    },
    extend: {},

  },
  daisyui: {
    themes: ["dracula", ],
  },
  plugins: [require("daisyui")],
}
