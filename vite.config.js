import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/vite-template/",
  plugins: [react()],
  define: {
    // 提供 global 的 polyfill
    global: "globalThis",
  },
  resolve: {
    alias: {
      // 确保 buffer 被正确引入
      buffer: "buffer",
    },
  },
  optimizeDeps: {
    include: ["buffer"],
  },
});
