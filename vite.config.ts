import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "vite-plugin-sitemap";

const SITE_URL = "https://fahmsconstruction.com";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: SITE_URL,
      changefreq: "monthly",
      priority: 1.0,
      outDir: "dist",
      generateRobotsTxt: false,
    }),
  ],
  build: {
    target: "es2020",
    sourcemap: false,
    cssCodeSplit: true,
  },
});
