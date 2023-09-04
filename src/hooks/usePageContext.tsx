// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere

import { createContext, useContext } from "react";

import { Children } from "@/types";

const Context = createContext(undefined);

type Props = {
	pageContext: any;
	children: Children;
};

export const PageContextProvider = ({ pageContext, children }: Props) => {
	return <Context.Provider value={pageContext}>{children}</Context.Provider>;
};

export const usePageContext = () => {
	const pageContext = useContext(Context);
	return pageContext;
};
