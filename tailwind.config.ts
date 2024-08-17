import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        powderBlue: "#D0D6F9",
        darkBlue: "#0B0D17",
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "destination-desktop": "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet": "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile": "url('/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "technology-desktop": "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet": "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile": "url('/assets/technology/background-technology-mobile.jpg')"
      },
    },
  },
  plugins: [],
};

export default config;
