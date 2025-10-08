/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind to scan your React components for class names
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"), // This line activates the DaisyUI plugin
    ],
};
