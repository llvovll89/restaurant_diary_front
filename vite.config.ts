import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            react(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        kakaoApiKey: env.VITE_KAKAO_MAP_API,
                    },
                },
            }),
        ],
        server: {
            host: "0.0.0.0",
            port: 3000
        },
    };
});
