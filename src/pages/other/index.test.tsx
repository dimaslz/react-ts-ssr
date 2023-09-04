import { render, screen } from "@testing-library/react";

import { Page } from "./index.page";

describe("Pages - other", () => {
	test("read text", () => {
		render(<Page />);

		expect(
			screen.getByRole("heading", { level: 1, name: "other" }),
		).toBeInTheDocument();
	});
});
