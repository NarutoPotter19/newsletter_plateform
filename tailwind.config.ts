import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react"; // we are adding this to our config to next ui to work in talwind
// setup 

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}", since we had no components we will use below-one
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_module/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // to use next ui along with tailwin cs 
  ],
  theme: {
    fontFamily:{ // adding this since i have modified or added font so configuring 
      //my tailwind configuration 
      clashDispaly:["var(--font-clashDisplay)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],// here adding nextui() as plugin to use next ui in styling 
};
export default config;
