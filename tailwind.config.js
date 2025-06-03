/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['9rem', '1'],
      },
      colors: {
        'text-alternative': 'white',
        'text-primary': '#3E5622',
        'background-primary': '#3E5622',
        'background-dark': '#1B2E1B',
        'border-primary': '#4A6429',
        'accent-primary': '#567530',
        'button-primary': '#4A6429',
        'card-light': '#F5F5F0',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
