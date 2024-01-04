import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        score: {
          text: "hsl(229, 64%, 46%)",
        },
        header: {
          outline: "hsl(217, 16%, 45%)",
        },
        scissors: {
          gradient: "hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",
        },
        paper: {
          gradient: "hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",
        },
        rock: {
          gradient: "hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",
        },
        lizard: {
          gradient: "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
        },
        cyan: {
          gradient: "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
        },
      },
      backgroundImage: {
        radial: "radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
      },
      fontFamily: {
        barlowSemiCondensed: ["var(--font-barlow-semi-condensed)"],
      },
    },
  },
  plugins: [],
};

export default config;

// ### Primary

// - Scissors Gradient: hsl(39, 89%, 49%) to hsl(40, 84%, 53%)
// - Paper Gradient: hsl(230, 89%, 62%) to hsl(230, 89%, 65%)
// - Rock Gradient: hsl(349, 71%, 52%) to hsl(349, 70%, 56%)
// - Lizard Gradient: hsl(261, 73%, 60%) to hsl(261, 72%, 63%)
// - Cyan: hsl(189, 59%, 53%) to hsl(189, 58%, 57%)

// ### Neutral

// - Dark Text: hsl(229, 25%, 31%)
// - Score Text: hsl(229, 64%, 46%)
// - Header Outline: hsl(217, 16%, 45%)

// ### Background

// - Radial Gradient: hsl(214, 47%, 23%) to hsl(237, 49%, 15%)

// - Family: [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
// - Weights: 600, 700
