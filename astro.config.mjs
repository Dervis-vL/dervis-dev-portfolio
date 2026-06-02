import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Update `site` to your final domain. Used for canonical URLs + sitemap.
export default defineConfig({
  site: "https://www.dervisvanleersum.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
