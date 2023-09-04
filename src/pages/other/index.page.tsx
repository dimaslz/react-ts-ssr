import { Link } from "@/components";

export const documentProps = {
	section: "other",
};

export const Page = () => {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<h1 className="text-4xl">other</h1>
			<div className="py-6">
				<Link href="/">go to home</Link>
			</div>
		</div>
	);
};
