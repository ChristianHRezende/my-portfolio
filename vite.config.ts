/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts", // assuming the test folder is in the root of our project
  },
});
