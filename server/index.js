import "dotenv/config";

import compression from "compression";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { renderPage } from "vite-plugin-ssr/server";

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = `${__dirname}/..`;
const isProduction = process.env.NODE_ENV === "production";

startServer();

async function startServer() {
	const app = express();

	app.use(compression());

	// Vite integration
	if (isProduction) {
		// In production, we need to serve our static assets ourselves.
		// (In dev, Vite's middleware serves our static assets.)
		const sirv = (await import("sirv")).default;
		app.use(sirv(`${root}/dist/client`));
	} else {
		// We instantiate Vite's development server and integrate its middleware to our server.
		// ⚠️ We instantiate it only in development. (It isn't needed in production and it
		// would unnecessarily bloat our production server.)
		const vite = await import("vite");
		const viteDevMiddleware = (
			await vite.createServer({
				root,
				server: { middlewareMode: true },
			})
		).middlewares;
		app.use(viteDevMiddleware);
	}

	// ...
	// Other middlewares (e.g. some RPC middleware such as Telefunc)
	// ...

	// Vite-plugin-ssr middleware. It should always be our last middleware (because it's a
	// catch-all middleware superseding any middleware placed after it).
	app.get("*", async (req, res, next) => {
		const pageContextInit = {
			urlOriginal: req.originalUrl,
		};
		const pageContext = await renderPage(pageContextInit);
		const { httpResponse } = pageContext;
		if (!httpResponse) {
			return next();
		} else {
			const { body, statusCode, headers, earlyHints } = httpResponse;
			if (res.writeEarlyHints) {
				res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
			}

			headers.forEach(([name, value]) => res.setHeader(name, value));
			res.status(statusCode);
			// For HTTP streams use httpResponse.pipe() instead, see https://vite-plugin-ssr.com/stream
			res.send(body);
		}
	});

	// const server = http.createServer(app);
	const port = process.env.PORT || 3000;
	app.listen(port);
	console.log(`Server running at http://localhost:${port}`);
}
