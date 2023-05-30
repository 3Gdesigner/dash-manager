/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,tsx,jsx}"],
  theme: {
      extend: {
          fontFamily: {
              sans: ["Inter", "sans-serif"],
          },
          colors: {
              gray: {
                  900: "#121418",
                  800: "#1B1F24",
                  700: "#242830",
                  600: "#8D8F92",
                  500: "#CDCED3",
              },
              teal: {
                  500: "#00C39A",
              },
          },
      },
  },
    plugins: [
        require("tailwindcss-question-mark"),
        require("@tailwindcss/forms")
    ],
};
