/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // REMOVED the extra 'theme: {' wrapper from here
    extend: {
      animation: {
        // Set your desired speeds here
        scroll: "scroll 15s linear infinite", // Default speed (mobile)
        'scroll-md': "scroll 40s linear infinite", // Optional desktop speed
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-250%)" },
        },
      },
    },
  },
  plugins: [],
};
