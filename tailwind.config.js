/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/*.{html,js}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'sanFrancisco': "url('../img/sanFrancisco.jpeg')",
                'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpeg')",
                'yosemite': "url('../img/yosemite.jpeg')",
                'LA': "url('../img/LA.jpeg')",
                'seattle': "url('../img/seattle.jpeg')",
                'new_york': "url('../img/new_york.jpeg')",
                'norway': "url('../img/norway.jpeg')",
                'sydney': "url('../img/sydney.jpeg')",
                'miami': "url('../img/miami.jpeg')",
                'switzerland': "url('../img/switzerland.jpeg')",
                'bali': "url('../img/bali.jpeg')",
                'norway': "url('../img/norway.jpeg')",
                'chicago': "url('../img/chicago.jpeg')",
                'europe': "url('../img/europe.jpeg')",
                'iceland': "url('../img/iceland.jpeg')",
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'primary': '#CC2D4A',
                'secondary': '#8FA206',
                'terciary': '#61AEC9',
            }),
            textColor: {
                'primary': '#CC2D4A',
                'secondary': '#8FA206',
                'terciary': '#61AEC9',
            },
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif']
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
    ],
}