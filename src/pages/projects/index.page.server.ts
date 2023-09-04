export async function onBeforeRender() {
	const { data } = await fetch("https://api.dimaslz.dev/projects").then(
		(data) => data.json(),
	);

	return {
		pageContext: {
			pageProps: {
				projects: data,
			},
		},
	};
}
