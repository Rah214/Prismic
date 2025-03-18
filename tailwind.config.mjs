/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '550px',
        md: '841px',
        lg: '1100px',
        xl: '1280px',
        '2xl': '1348px',
      },
      colors: {
        purple: {
          500: "#8B5CF6",
        },
        gray: {
          500: "#6B7280",
          300: "#D1D5DB",
        },
      },
      fontFamily: {
        sans: 'Plus Jakarta Sans'
      },

    },
  },
  plugins: [],
};
