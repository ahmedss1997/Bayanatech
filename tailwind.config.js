/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1904px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1264px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "960px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "600px" },
        // => @media (max-width: 639px) { ... }
      },
      extend: {
        colors: {
          "border-gray": "#f0f0f1 !important",
          primary: "#0A6DCA !important",
          txtOnPrimary: "#fff",
        },
      },
    },
  },
  plugins: [],
};
