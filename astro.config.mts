import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [mdx(), react()],
  server: {
    port: 4900,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});