/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-barlow)", "sans-serif"],
                serif: ["var(--font-fraunces)", "serif"],
            },
            colors: {
                "main-text": "var(--main-text)",
                grey: "var(--grey)",
                "green-text": "var(--green-text)",
                "green-background": "var(--green-background)",
                "blue-text": "var(--blue-text)",
                "blue-background": "var(--blue-background)",
                "yellow-background": "var(--yellow-background)",
                "red-background": "var(--red-background)",
            },
            backgroundImage: {
                "hero-bg-mobile":
                    "url('/assets/images/mobile/image-header.jpg')",
                "hero-bg-desktop":
                    "url('/assets/images/desktop/image-header.jpg')",
            },
        },
    },
    plugins: [],
};
