import { Link } from "@/components";

export const Header = () => (
	<header
		className={`fixed left-0 top-0 z-50 flex h-16 w-full items-center bg-gray-800 p-0 text-white shadow-sm dark:bg-gray-900`}
	>
		<h1 className="relative flex w-full justify-start pl-6">Logo</h1>
		<nav className="flex h-full items-center text-sm">
			<Link
				withBackground
				href="/"
				className="flex h-full items-center justify-center px-4 py-0"
			>
				Home
			</Link>
			<Link
				withBackground
				href="/other"
				className="flex h-full items-center justify-center px-4 py-0"
			>
				Other
			</Link>
			<Link
				withBackground
				href="/projects"
				className="flex h-full items-center justify-center px-4 py-0"
			>
				Projects
			</Link>
		</nav>
	</header>
);
