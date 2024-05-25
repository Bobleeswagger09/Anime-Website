import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("/hero.png")',
      },
    },
  },
  plugins: [],
};
export default config;

// config. js file in Tailwind CSS serves as a central configuration hub for customizing the framework. It allows you to define colors, fonts, breakpoints, and more, tailoring Tailwind to fit your project's specific design and functionality requirements.
