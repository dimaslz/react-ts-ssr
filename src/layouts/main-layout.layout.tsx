import "@/style/index.scss";

import { Footer, Header } from "@/components";
import { Children } from "@/types";

type Props = {
	children: Children;
};

const Layout = ({ children }: Props) => {
	return (
		<div
			id="app"
			className="mx-auto my-0 h-full min-w-[48rem] max-w-screen-lg p-10 pb-16 pt-20"
		>
			<Header />
			<main className="h-full">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
