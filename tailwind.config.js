/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"
    ,"./assets/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      boxShadow: {
        soft: '0px 4px 16px rgba(0,0,0,0.12)',
      }
    },
  },
  plugins: [],
}