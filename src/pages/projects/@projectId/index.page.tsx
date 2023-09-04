import { Link } from "@/components";

export const documentProps = {
	section: "project data",
};

export const Page = (pageProps: any) => {
	const { project } = pageProps;

	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<h1 className="text-4xl">{project.name}</h1>
			<div className="my-4 flex w-full flex-col justify-center space-y-2 bg-slate-900 p-6">
				<div>{project.description}</div>
				<div className="text-xs">
					{project.keywords.map((k: string) => `#${k}`).join(", ")}
				</div>
			</div>
			<div className="space-x-4 py-6">
				<Link href="/projects">go to projects</Link>
				<span>.</span>
				<Link href="/">go to home</Link>
			</div>
		</div>
	);
};
