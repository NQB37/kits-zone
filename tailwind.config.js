/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx}', 'index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#CD9852',
                secondary: '#242632',
                background: '#132028',
            },
            width: {
                content: 'max-content',
            },
        },
    },
    plugins: [],
};
