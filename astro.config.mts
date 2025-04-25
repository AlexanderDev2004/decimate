import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  server: {
    port: 4900,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});