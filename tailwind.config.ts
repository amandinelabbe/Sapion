import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff", 
        primary: "#0066ff",
        secondary: "#1a1a1a",
        accent: "#00ff88",
        muted: "#333333",
      },
    },
  },
  plugins: [],
} satisfies Config;