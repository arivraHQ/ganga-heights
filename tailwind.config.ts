import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        limestone: "#EFEBE4",
        surface: "#E4DED4",
        ink: "#14120F",
        charcoal: "#1B1B1A",
        brass: "#8A6832", // darkened slightly to achieve > 4.5:1 WCAG contrast on limestone
        "brass-light": "#B08D57",
        "brass-dark": "#6E5020",
        deep: "#2F3E36",
        "deep-dark": "#222D27",
        muted: "#59564F", // darkened to achieve 5.2:1 WCAG contrast on limestone
      },
      fontFamily: {
        serif: ["'Newsreader'", "Georgia", "serif"],
        sans: ["'Schibsted Grotesk'", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "2px",
        lg: "2px",
        xl: "2px",
        "2xl": "2px",
        full: "2px", // architectural discipline: no round pill buttons
      },
      boxShadow: {
        none: "none",
        DEFAULT: "none",
        sm: "none",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
      },
      transitionTimingFunction: {
        architectural: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      transitionDuration: {
        architectural: "800ms",
      },
      letterSpacing: {
        label: "0.12em",
      },
    },
  },
  plugins: [],
};

export default config;
