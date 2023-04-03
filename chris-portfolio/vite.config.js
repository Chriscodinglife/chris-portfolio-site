import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      __MESSAGE_ENV__: process.env.VITE_MESSAGE,
    },
  };
});
