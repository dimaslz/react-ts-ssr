import kebabCase from "lodash/kebabCase";

import { Link } from "@/components";

export const documentProps = {
	section: "projects",
};

export const Page = ({ projects }: any) => {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<h1 className="text-4xl">projects</h1>

			<div className="flex flex-col py-6">
				<ul>
					{projects.map((project: any, projectKey: number) => (
						<li key={projectKey}>
							<Link href={`./${kebabCase(project.name)}`}>{project.name}</Link>
						</li>
					))}
				</ul>
			</div>

			<div className="py-6">
				<Link href="/">go to home</Link>
			</div>
		</div>
	);
};
