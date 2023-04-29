/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: { templateColumns: 'repeat( auto-fit, minmax(224px, 240px) )' },
            width: { figureWidth: '52px' },
            minWidth: {
                '1/2': '50%',
                '2/3': '66.666667%',
            },
            boxShadow: {
                default: '0 5px 30px 0 rgba(190, 190, 190)',
                block: 'inset 0px -5px 0px rgba(0,0,0,0.2)',
                button: 'inset 0px -6px 0px rgba(0,0,0,0.3)',
                'button-active': 'inset 0px -2px rgba(0,0,0,0.3)',
                hud: 'inset 0px -6px 0px rgba(0,0,0,0.3), 0px 4px 1px 1px rgba(0, 0, 0, 0.15)',
                flat: '0px 4px 1px 0px rgba(0, 0, 0, 0.15)',
                soft: '0px 0px 20px rgba(0, 0, 0, 0.15)',
            },
            fontFamily: {
                sans: ['Rubik', 'sans-serif'],
            },
            colors: {
                dark: '#183153',
                secondary: '#DEF1FF',
                primary: {
                    300: '#5b59cd',
                    400: '#666ad2',
                    450: '#676dd2',
                    500: '#869af5',
                },
                'dark-blue': '#19335c',
                pink: {
                    300: '#df3fb4',
                    400: '#CD8CED',
                    500: '#eb5dcf',
                },
                yellow: '#EDED8C',
                green: '#63e6be',
                red: {
                    300: '#fd2360',
                    400: '#ED8C8C',
                },
                shadow: 'rgba(0,0,0,0.5)',
            },
            borderWidth: {
                6: '6px',
                14: '14px',
            },
            gridTemplateRows: {
                footer: '200px minmax(900px, 1fr) 100px',
            },
            keyframes: {
                wiggle: {
                    // shake on the x asis
                    '0%, 100%': { transform: 'translateX(0) rotate(180deg)' },
                    '25%': { transform: 'translateX(-5px) rotate(180deg)' },
                    '75%': { transform: 'translateX(5px) rotate(180deg)' },
                },
            },
            animation: {
                wiggle: 'wiggle 200ms ease-in-out infinite',
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
