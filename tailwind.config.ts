import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        rubik: "var(--font-rubik)",
      },
      colors: {
        radixPurple: "#18111B",
      },
      animation: {
        'slow-spin': 'slow-spin 3s linear infinite',
        'very-slow-spin': 'very-slow-spin 15s linear infinite', // Adjust the duration to be very slow
        'reverse-spin': 'reverse-spin 3s linear infinite', // Adjust duration as needed
        'very-slow-reverse-spin': 'very-slow-reverse-spin 15s linear infinite', // Adjust the duration here
        "marquee": 'marqueee 20s linear infinite',
      },
      keyframes: {
        'slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'very-slow-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }, // Negative for counterclockwise rotation
        },
        'very-slow-reverse-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }, // Negative for counterclockwise rotation
        },
        marqueee: {
          '0%': { transform: 'translateX()' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
