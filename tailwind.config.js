/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                black: {
                    DEFAULT: '#02040A',
                },
                gray: {
                    DEFAULT: '#161B22',
                    "light": "#7d8590",
                    "lighter": "#21262D",
                    "border": "#30363D",
                },
                orange: {
                    DEFAULT: '#F78066',
                    "light": '#F8937C',
                    "vinci": "#FD992A",
                },
                red: {
                    "sncf": '#D52B1E',
                    "stnicolas": "#FF5757",
                },
                blue: {
                    "rjs": '#3BEBD1',
                    'esgi-dark': '#001B40',
                    'esgi-light': '#00EAFF',
                    'efrei': '#0E7CC0',
                },
                techno: {
                    "figma": "#995DF6",
                    "next": "#000000",
                    "react": "#62D5FA",
                    "storybook": "#E65482",
                    "node": "#669C4F",
                    "stripe": "#60CC89",
                }
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                '14': 'repeat(14, minmax(0, 1fr))',

                // Complex site-specific column configuration
            }
        },
    },
    plugins: [],
}
