/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            /*             animation: {
                "slide-pipe": "slide-pipe 4s linear infinite",
            },
            keyframes: {
                "slide-pipe": {
                    "0%": { transform: "translateX(100%)" },
                    "50%": { transform: "translateX(0%)" }, // Sie können einen Zwischenschritt hinzufügen
                    "100%": { transform: "translateX(-100%)" },
                }, */
        },
        plugins: [],
    },
};
