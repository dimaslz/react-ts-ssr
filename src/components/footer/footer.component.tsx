import { Link } from "@/components";

export const Footer = () => (
	<footer className="flex h-16 w-full items-center justify-center space-x-1 p-4 text-sm">
		<span>made with ♥️ by</span>
		<Link
			href="https://twitter.com/home"
			target="_blank"
			rel="noopener noreferrer"
		>
			dimaslz
		</Link>
		<span>from barcelona</span>
		<Link
			href="https://github.com/dimaslz/react-ts-ssr"
			target="_blank"
			rel="noopener noreferrer"
		>
			fork me on github
		</Link>
	</footer>
);
