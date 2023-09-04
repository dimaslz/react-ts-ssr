import path from "path";
import { defineConfig } from "vitest/config";

/* eslint-disable */
export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./test/setup.ts",
		css: true,
		exclude: ["**/playwright-tests", "**/node_modules", "**/.next"],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"~": path.resolve(__dirname),
		},
	},
});
