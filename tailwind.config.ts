import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'relix-green': '#2ECC71',
        'relix-blue': '#04D9FF',
      },
    },
  },
  plugins: [],
};
export default config;
