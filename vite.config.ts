import "dotenv/config";

import react from "@vitejs/plugin-react";
import path from "path";
import ssr from "vite-plugin-ssr/plugin";
import svgr from "vite-plugin-svgr";

const config = {
	plugins: [react(), ssr(), svgr()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	server: {
		port: process.env.PORT || 3000,
	},
};

export default config;
