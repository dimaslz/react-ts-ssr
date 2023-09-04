module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		// "prettier/@typescript-eslint",
		"plugin:tailwindcss/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["simple-import-sort"],
	env: {
		browser: true,
		es6: true,
		mocha: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
		ecmaFeatures: {
			modules: true,
			impliedStrict: true,
			experimentalObjectRestSpread: true,
			experimentalDecorators: true,
			jsx: true,
		},
	},
	globals: {
		sinon: true,
		expect: true,
		browser: true,
		global: true,
	},
	ignorePatterns: ["*.d.ts"],
	rules: {
		indent: ["off"],
		"@typescript-eslint/no-explicit-any": ["warn"],
		// indent: [2, "tab", { SwitchCase: 2 }],
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
};
