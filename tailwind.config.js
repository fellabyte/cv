/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        cascadia: "CascaydiaCove NF",
        noto: "Noto Sans Arabic"
      },
      colors: {
        radixPurple: "#18111B",
      },
      animation: {
        'slow-spin': 'slow-spin 3s linear infinite',
        'very-slow-spin': 'very-slow-spin 15s linear infinite', // Adjust the duration to be very slow
        'reverse-spin': 'reverse-spin 3s linear infinite', // Adjust duration as needed
        'very-slow-reverse-spin': 'very-slow-reverse-spin 15s linear infinite', // Adjust the duration here
        "marquee": 'marquee 10s linear infinite',
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
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
