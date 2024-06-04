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
        DEFAULT: "1vh",
        sm: "6px",
        md: "6px",
        lg: "6px",
      },
    },
    extend: {},
  },
  daisyui: {
    themes: [
      // {
      //   cyberpunk: {
      //     ...require("daisyui/src/theming/themes")["cyberpunk"],
      //     "base-100": "#FFDDE9",
      //   },
      // },
      // "cyberpunk",
      // "light",
      "dark",
      // "cupcake",
      // "bumblebee",
      // "emerald",
      // "corporate",
      // "synthwave",
      // "retro",
      // "valentine",
      // "halloween",
      // "garden",
      // "forest",
      // "aqua",
      // "lofi",
      // "pastel",
      // "fantasy",
      // "wireframe",
      // "black",
      // "luxury",
      // "dracula",
      // "cmyk",
      // "autumn",
      // "business",
      // "acid",
      // "lemonade",
      // "night",
      // "coffee",
      // "winter",
      // "dim",
      // "nord",
      // "sunset",
    ],
  },
  plugins: [require("daisyui")],
}
