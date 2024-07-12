/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        unicare: {
          "primary": "#337EFF",
          "secondary": "#005EFF",
          "accent": "#93FC3B",
          "neutral": "#6C6C6C",
          "base-100": "#F5F5F5",
          "info": "#71C1EE",
          "success": "#4BB531",
          "warning": "#EC8307",
          "error": "#E4180A",
        },
      },
    ],
  },
}
