export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#0080DE",
                sub_navy: "#1F1E25",
                base_navy: "#0C0B10",
                green: "#009944",
            },
            screens: {
                pointerHover: {
                    raw: "(hover: hover) and (pointer: fine)",
                },

                notTouchHover: {
                    raw: "(hover: hover) and (pointer: coarse)",
                },
            },
        },
    },
    plugins: [],
};
