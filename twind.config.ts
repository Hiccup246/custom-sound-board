import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
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
      "white": "#FFFFFF"
    },
    extend: {
      gridTemplateColumns: {
        "soundboard": "repeat(auto-fill, 160px)"
      }
    }
  }
} as Options;
