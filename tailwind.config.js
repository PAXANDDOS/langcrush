/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: { templateColumns: 'repeat( auto-fit, minmax(224px, 240px) )' },
            width: { figureWidth: '52px' },
            boxShadow: {
                default: '0 5px 30px 0 rgba(190, 190, 190)',
                'game-button': 'inset 0px -6px 0px rgba(0,0,0,0.3)',
                'game-button-active': 'inset 0px -2px rgba(0,0,0,0.3)',
            },
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
            },
            colors: {
                dark: '#183153',
                light: '#DEF1FF',
                blue: '#8C8CED',
                'dark-blue': '#19335c',
                pink: '#CD8CED',
                yellow: '#EDED8C',
                green: '#63e6be',
                red: '#ED8C8C',
                shadow: 'rgba(0,0,0,0.5)',
            },
            screens: {
                xs: { max: '640px' },
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
