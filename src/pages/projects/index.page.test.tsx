import { render, screen, within } from "@testing-library/react";

import { Page } from "./index.page";

describe("Pages - other", () => {
	test("read text", () => {
		const projects = [
			{
				name: "Framework icon builder",
				description: "A tool to create a framework icon component from a SVG",
				stack: ["nextjs", "nodejs", "tailwindcss"],
				keywords: ["nextjs", "nodejs", "tailwindcss", "tools"],
				public: false,
				npm: null,
				url: "https://svg-icon-2-fw-component.dimaslz.dev",
				repository: [],
			},
		];

		render(<Page projects={projects} />);

		expect(
			screen.getByRole("heading", { level: 1, name: "projects" }),
		).toBeInTheDocument();

		const list = screen.getByRole("list");
		const items = within(list).getAllByRole("listitem");

		expect(items).toHaveLength(1);
	});
});
