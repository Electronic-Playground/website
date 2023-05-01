/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors: {
            'primary': '#F8B700',
            'bg-main-color':'#1B1B1B',
          },
          fontFamily: {
            'akzidenzRegular': ['AkzidenzGroteskPro-Regular', 'sans-serif'],
            'akzidenzExt': ['AkzidenzGroteskPro-Ext', 'sans-serif'],
            'akzidenzMd': ['AkzidenzGroteskPro-Md', 'sans-serif'],
            'akzidenzMdExt': ['AkzidenzGroteskPro-MdEx', 'sans-serif'],
            'akzidenzBoldEx': ['AkzidenzGroteskPro-BoldEx', 'sans-serif'],
            'akzidenz-bold': ['AkzidenzGroteskPro-Bold', 'sans-serif'],
          }
        },
        screens: {
          xs: "480px",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1700px",
        },
    },
    plugins: [],
};
