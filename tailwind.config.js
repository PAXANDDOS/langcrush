/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: { templateColumns: 'repeat( auto-fit, minmax(224px, 240px) )' },
            width: { figureWidth: '52px' },
            boxShadow: {
                default: '0 5px 30px 0 rgba(190, 190, 190)',
                button: 'inset 0px -6px 0px rgba(0,0,0,0.3)',
                'button-active': 'inset 0px -2px rgba(0,0,0,0.3)',
                hud: 'inset 0px -6px 0px rgba(0,0,0,0.3), 0px 4px 1px 1px rgba(0, 0, 0, 0.15)',
                flat: '0px 4px 1px 0px rgba(0, 0, 0, 0.15)',
                soft: '0px 0px 20px rgba(0, 0, 0, 0.15)',
            },
            fontFamily: {
                rubik: ['Rubik', 'sans-serif'],
            },
            colors: {
                dark: '#183153',
                secondary: '#DEF1FF',
                primary: '#8C8CED',
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
