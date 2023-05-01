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
            'akzidenz': ['AkzidenzGroteskPro-Regular', 'sans-serif'],
            'akzidenz-Ext': ["'AkzidenzGroteskPro Ext'", 'sans-serif'],
            'akzidenz-Md': ["'AkzidenzGroteskPro Md'", 'sans-serif'],
            'akzidenz-MdExt': ["'AkzidenzGroteskPro MdEx'", 'sans-serif'],
            'akzidenz-BoldEx': ["'AkzidenzGroteskPro BoldEx'", 'sans-serif'],
            'akzidenz-Bold': ["'AkzidenzGroteskPro Bold'", 'sans-serif'],
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
