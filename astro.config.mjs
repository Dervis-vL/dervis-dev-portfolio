import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { URL } from "./src/config";

// Update `site` to your final domain. Used for canonical URLs + sitemap.
export default defineConfig({
  site: URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
