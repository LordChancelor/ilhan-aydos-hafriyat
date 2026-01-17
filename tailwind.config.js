/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
            "./src/**/*.{js,ts,jsx,tsx}"],
            safelist: [
              'bg-[#1f1f1f]'  // Bu class'ı build sırasında sakla
            ],
  theme: {
    extend: {
      screens: {
        "bedar-sc1": "1167px",
        "bedar-sc2": "967px",
        "bedar-sm": "467px",
        'bedar-xl' : "1667px",
      },
      backgroundColor: {
        'mainColor': "#252835",
        'mainHover': "#323c50",
      },
      textColor: {
        'textColor': "#512835",
        'textHover': "#323c50",
      },
      colors: {
        industrialGray: '#1f1f1f',
        cautionYellow: '#facc15',
        steel: '#4b5563',
      },
      borderRadius: {
        xl: '1rem',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};