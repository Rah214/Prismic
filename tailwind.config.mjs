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
        'sm': '550px',
        // => @media (min-width: 640px) { ... }
  
        'md': '841px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1100px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1348px',
        // => @media (min-width: 1536px) { ... }
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
      sans:'Plus Jakarta Sans'
      },
      
    },
  },
  plugins: [],
};
