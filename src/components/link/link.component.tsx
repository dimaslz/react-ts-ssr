import { ReactNode } from "react";

import { usePageContext } from "@/hooks/usePageContext";

type Props = {
	href: string;
	children: ReactNode | ReactNode[] | string;
	withBackground?: boolean;
	className?: string;
	rel?: string;
	target?: string;
	activeClassName?: string;
};

export const Link = ({ withBackground, activeClassName, ...rest }: Props) => {
	const pageContext: any = usePageContext();

	const isActive = pageContext?.urlPathname === rest.href;

	if (rest.href.startsWith("./")) {
		rest.href = `${pageContext?.urlPathname}${rest.href.replace("./", "/")}`;
	}

	const className = [
		rest.className,
		withBackground
			? isActive
				? "text-white bg-gray-900 dark:bg-gray-700"
				: "hover:bg-gray-900 dark:hover:bg-gray-700"
			: "text-blue-500 hover:text-blue-700 hover:underline",
		isActive && (activeClassName || "is-active"),
	]
		.filter(Boolean)
		.join(" ");

	return <a {...rest} className={className} />;
};
