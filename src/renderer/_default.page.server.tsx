import { renderToString } from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr/server";

import logoUrl from "@/assets/favicon.ico";
import { PageContextProvider } from "@/hooks/usePageContext";
import MainLayout from "@/layouts/main-layout.layout";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

export const render = async (pageContext: any) => {
	const { Page, pageProps } = pageContext;

	const pageHtml = renderToString(
		<PageContextProvider pageContext={pageContext}>
			<MainLayout>
				<Page {...pageProps} />
			</MainLayout>
		</PageContextProvider>,
	);

	// See https://vite-plugin-ssr.com/head
	const { documentProps } = pageContext.exports;
	const section = documentProps?.section || "home";
	const title =
		(documentProps && documentProps.title) ||
		`React custom SSR App | ${section} - by dimaslz.com`;
	const desc =
		(documentProps && documentProps.description) ||
		"React custom SSR App - by dimaslz.com";

	const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
				<div id="page-view" class="my-0 mx-auto">${dangerouslySkipEscape(
					pageHtml,
				)}</div>
      </body>
    </html>`;

	return {
		documentHtml,
		pageContext: {
			// We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
		},
	};
};
