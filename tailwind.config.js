/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             
    "./src/**/*.{js,jsx}" // 检查 src 文件夹下的所有 JS 文件
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
   daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ]}
}