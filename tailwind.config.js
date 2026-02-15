// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#22c55e', // green-500
                secondary: '#16a34a', // green-600
                third: '#374151', // gray-700
                fourth: '#1f2937', // gray-800
            },
        },
    },
    plugins: [],
}