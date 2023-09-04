import { Link } from "@/components";
import { usePageContext } from "@/hooks";

export const Page = () => {
	const pageContext: any = usePageContext();

	if (pageContext.is404) {
		return (
			<div className="flex h-full flex-col justify-start">
				<h1 className="py-6 text-4xl font-semibold">Error 404</h1>
				<p>This page doesn't exist.</p>

				<div className="py-12 text-center">
					<Link href="/">
						<h4>back to home</h4>
					</Link>
				</div>
			</div>
		);
	}

	return <div>other error</div>;
};
