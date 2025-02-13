import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans], // Montserrat for headings
        atkinson: ["Atkinson Hyperlegible", ...defaultTheme.fontFamily.sans], // Atkinson for body text
        robotoMono: ["Roboto Mono", ...defaultTheme.fontFamily.mono], // Roboto Mono for code/monospace
        firaCode: ["Fira Code", ...defaultTheme.fontFamily.mono], // Fira Code for code/monospace
        barriecito: ["Barriecito", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "black",
      "dracula",
      "cmyk",
      "autumn",
      "lemonade",
      "night",
      "coffee",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
