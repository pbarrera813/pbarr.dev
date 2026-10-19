import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://pbarr.dev",
    server: {
        host: "0.0.0.0",
        port: 4321,
        allowedHosts: ["pbarr.dev", "localhost", "192.168.1.91"],
    },
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: ["pbarr.dev", "localhost", "192.168.1.91"],
        },
        preview: {
            allowedHosts: ["pbarr.dev", "localhost", "192.168.1.91"],
        },
    },
    integrations: [react(), sitemap({ filter: (page) => !page.endsWith("/404/") })],
});
