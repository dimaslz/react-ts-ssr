import { hydrateRoot } from "react-dom/client";

import { PageContextProvider } from "@/hooks/usePageContext";
import MainLayout from "@/layouts/main-layout.layout";

export const render = async (pageContext: any) => {
	const { Page, pageProps } = pageContext;

	hydrateRoot(
		document.getElementById("page-view") as HTMLDivElement,
		<PageContextProvider pageContext={pageContext}>
			<MainLayout>
				<Page {...pageProps} />
			</MainLayout>
		</PageContextProvider>,
	);
};
