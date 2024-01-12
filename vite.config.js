import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      util: "util",
    },
  },
  base: "https://ewobioki7tweb.vcdn.cloud/",
  plugins: [react()],
});
