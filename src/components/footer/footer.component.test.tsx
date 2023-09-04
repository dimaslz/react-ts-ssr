import { render } from "@testing-library/react";

import { Footer } from "./footer.component";

describe("Footer", () => {
	test("should be defined", () => {
		const component = render(<Footer />);

		expect(component).toMatchSnapshot();
	});
});
