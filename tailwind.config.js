/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:      '#2faf90',
        'primary-dark': '#239e7e',
        dark:         '#1b2a2f',
        accent:       '#1b2f2e',
        'text-dark':  '#2c3e40',
        'text-light': '#7a8a8d',
        'soft-white': '#d9d9d9',
        'bg-light':   'rgba(201,227,224,0.48)',
        'bg-soft':    'rgba(240,245,232,0.69)',
        'bg-white':   '#ffffff',
        border:       '#e3eceb',
        'accent-gold':'#f5a623',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
