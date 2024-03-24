import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  selfURL: import.meta.url,
  darkMode: "class",
  theme: {
    colors: {
      "dark-black": "hsl(207, 30%, 4%)",
      "dark-grey": "#151a1e",
      "light-grey-dark": "#2a2e32",
      "dark-grey-bd": "#1c2126",
      "light-grey": "rgb(3, 43, 58)",
      "dark-teal": "#032b3a",
      "teal": "#86f3df",
      "soft-cyan": "#2aa198",
      "soft-white": "rgb(232, 235, 237)",
      "soft-grey": "rgb(164, 168, 173)",
      "white": "#FFFFFF",
      "light-pink": "#FCF1EC",
      "black": "#000000",
      "lightest-grey": "#dbdbdb",
      "current": "currentColor",
    },
    gridTemplateColumns: {
      "soundboard": "repeat(auto-fill, 160px)",
    },
  },
} satisfies Config;
