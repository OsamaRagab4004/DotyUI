import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://<user>.github.io/DotyUI/ on GitHub Pages.
  base: "/DotyUI/",
  plugins: [react()],
  server: { port: 5173, open: true },
});
