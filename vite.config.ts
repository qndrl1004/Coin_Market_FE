import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    // host: "0.0.0.0", // 이곳에 원하는 IP 주소를 설정하세요.
    // port: 5174,
    proxy: {
      "/api": {
        target: "https://port-0-coin-market-be-12fhqa2llob5p0if.sel5.cloudtype.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
