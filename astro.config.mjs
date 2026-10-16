// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  build: {
    // Inline CSS into the page: one request less before first paint
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
