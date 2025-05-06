export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#0080DE",
                white: "#FFFFFF",
                navy: "#0C0B10",
                sub_navy: "#1F1E25",
                base_navy: "#0C0B10",
                green: "#009944",
                gray: "#242627",
                gray400: "#292829",
                gray300: "rgba(140,140,140,1)",
                gray200: "rgba(188,188,188,1)",
                gray100: "#D9D9D9",
                lightBlack: "#1F1E25",
                black85: "rgba(0,0,0,0.85)",
            },
            boxShadow: {
                default_shadow: "0 4px 0 rgba(0, 0, 0, .4)",
                modal_shadow: "2px 3px 4px rgba(0, 0, 0, 0.31)",
                custom_sm_shadow: "1px 2px 2px rgba(0, 0, 0, 0.21)",
                sc_shadow: "rgba(0,0,0,0.15) 0px 16px 32px",
                flight_shadow: "rgba(0,0,0,0.15) 0px 16px 32px 0",
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
