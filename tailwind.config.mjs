/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                fluido: "fluido 1s ease-in-out infinite",
            },
            keyframes: {
                fluido: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            screens: {
                'sm': '640px',    // mínimo de 640px
                'md': '768px',    // mínimo de 768px
                'lg': '1024px',   // mínimo de 1024px
                'xl': '1280px',   // mínimo de 1280px
                '2xl': '1536px',  // mínimo de 1536px
                '3xl': '1624px', //minimo de 1624
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
};
