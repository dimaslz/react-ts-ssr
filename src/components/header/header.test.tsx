import { render } from "@testing-library/react";

import { Header } from "./header.component";

describe("Header", () => {
	test("snapshot", () => {
		const component = render(<Header />);

		expect(component).toMatchSnapshot();
	});

	test("has three items", () => {
		const component = render(<Header />);

		expect(component.getAllByRole("link")).toHaveLength(3);
	});
});
