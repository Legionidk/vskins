import { defineConfig } from "vite";
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/vskins/",
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                weapons: resolve(__dirname, "index.html"),
                skins: resolve(__dirname, "src/pages/skins/index.html"),
                agents: resolve(__dirname, "src/pages/agents/index.html"),
            },
        },
    },
});
