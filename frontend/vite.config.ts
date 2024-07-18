import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  optimizeDeps: {
    include: ["react-apexcharts", "apexcharts"],
  },
  build: {
    commonjsOptions: {
      include: [/react-apexcharts/, /node_modules/],
    },
  }
});
