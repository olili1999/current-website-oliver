/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
      boxShadow: {
        'sm': '0 1px 0px rgb(0 0 0 / 10%)',
      },
    animation: {
        'text':'text 5s ease infinite',
    },
    keyframes: {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }

    
    },
  },
  plugins: [],
}