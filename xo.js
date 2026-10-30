import xoReact from 'eslint-config-xo-react';

/**
Shared xo config for the Ink component libraries.

Usage in a library's `xo.config.js`:

	import base from '@costajohnt/ink-config/xo';

	export default [...base, {rules: {}}];

@type {import('xo').FlatXoConfig}
*/
const xoConfig = [
	{
		ignores: ['dist/**', 'examples/**', 'tsup.config.ts', 'vitest.config.ts'],
	},
	...xoReact(),
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
			// XO's stylistic rules conflict with Ink JSX patterns.
			'@stylistic/indent': 'off',
			'@stylistic/jsx-quotes': 'off',
			'@stylistic/operator-linebreak': 'off',
			'@stylistic/function-paren-newline': 'off',
			'@stylistic/no-trailing-spaces': 'off',
			'@stylistic/eol-last': 'off',
			'@stylistic/key-spacing': 'off',
			'@stylistic/jsx-tag-spacing': 'off',
			'@stylistic/jsx-closing-tag-location': 'off',
			'@stylistic/jsx-indent-props': 'off',
			'perfectionist/sort-jsx-props': 'off',
			'@eslint-react/no-array-index-key': 'off',
			'capitalized-comments': 'off',
			'require-unicode-regexp': 'off',
			'unicorn/prefer-at': 'off',
			'unicorn/no-hex-escape': 'off',
			'@typescript-eslint/no-unnecessary-type-assertion': 'off',
			'@typescript-eslint/strict-void-return': 'off',
			'new-cap': 'off',
			'no-promise-executor-return': 'off',
			// Ink's accessibility API uses `aria-role` and `aria-state` props on
			// Box/Text; they are not DOM attributes, so the DOM ARIA check misfires.
			'jsx-a11y-x/aria-props': 'off',
		},
	},
	{
		files: ['package.json'],
		rules: {
			// Keep top-level `main`/`types` alongside `exports` for consumers on
			// TypeScript `moduleResolution: node10` and older resolvers.
			'package-json/prefer-exports': 'off',
		},
	},
	{
		files: ['test/**', 'src/**/__tests__/**'],
		rules: {
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-argument': 'off',
			// The libraries test with vitest, where importing shared helpers from
			// other test-directory files is normal; this rule targets node:test.
			'node-test/no-import-test-files': 'off',
		},
	},
];

export default xoConfig;
