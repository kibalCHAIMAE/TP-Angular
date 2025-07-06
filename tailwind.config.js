/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // C'est le chemin standard pour les projets Angular
    // Ajoutez tout autre chemin où vous utilisez des classes Tailwind, par ex. pour les bibliothèques ou les composants personnalisés en dehors de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}