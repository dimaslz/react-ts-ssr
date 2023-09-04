import kebabCase from "lodash/kebabCase";

export async function onBeforeRender(pageContext: any) {
	const { projectId } = pageContext.routeParams;
	const { data } = await fetch("https://api.dimaslz.dev/projects").then(
		(data) => data.json(),
	);

	const project = data.find(
		(project: any) => kebabCase(project.name) === projectId,
	);

	return {
		pageContext: {
			pageProps: { project },
		},
	};
}
