/// <reference types="vitest" />

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      "@/*": "./*",
    },
    deps: {
      // TODO: this need to be fixed
      inline: ["liteque"],
    },
  },
});
