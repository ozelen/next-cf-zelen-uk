/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      paddingTop: {
        "pt-10v": "10vh",
        "pt-20v": "20vh",
        "pt-30v": "30vh",
        "pt-40v": "40vh",
        "pt-50v": "50vh",
        "pt-60v": "60vh",
        "pt-70v": "70vh",
        "pt-80v": "80vh",
        "pt-90v": "90vh",
        "pt-100v": "100vh",
      },
    },
  },
  plugins: [],
}
