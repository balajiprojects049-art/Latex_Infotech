/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'ibm-blue': '#0078D4',
                'ibm-blue-dark': '#005A9E',
                'ibm-blue-light': '#2B88D8',
            },
        },
    },
}
