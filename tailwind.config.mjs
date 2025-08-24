/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Añadimos tus colores de marca
      colors: {
        'brand-blue': '#4478E0',
        'brand-green': '#33CC33',
        'brand-gray': '#bbbaa6',
      },
      // 2. Le damos nombres a tus fuentes
      fontFamily: {
        heading: ['var(--font-sansita)'], // Fuente para títulos principales
        menu: ['var(--font-plex-sans)'],   // Fuente para el menú
        body: ['var(--font-source-sans)'], // Fuente para el texto general
      },
      // 3. Añadimos el radio de borde personalizado para el botón
      borderRadius: {
        'brand': '16px',
      },
    },
  },
  plugins: [],
};

export default config;