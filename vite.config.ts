import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    "process.env.VITE_MOCK": JSON.stringify(process.env.VITE_API_URL),
  },
  server: {
    port: 3001,
  },
});
