/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: { templateColumns: 'repeat( auto-fit, minmax(224px, 240px) )' },
            width: { figureWidth: '52px' },
            boxShadow: {
                default: '0 5px 30px 0 rgba(190, 190, 190)',
                'game-button': 'inset 0px -6px 0px #183153',
                'game-button-active': 'inset 0px -2px 0px #183153',
            },
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
            },
            colors: {
                'regal-white': '#DEF1FF',
                'regal-blue': '#8C8CED',
                'regal-blue-active': '#183153',
                'regal-pink': '#CD8CED',
                'regal-yellow': '#EDED8C',
                'regal-green': '#63e6be',
                'regal-red': '#ED8C8C',
                dark: '#183153',
            },
        },
    },
    variants: {
        extend: {
            boxShadow: ['active'],
        },
    },
    plugins: [],
}
