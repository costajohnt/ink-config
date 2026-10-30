# @costajohnt/ink-config

Shared tooling for my Ink component libraries: [ink-scrollable-box](https://github.com/costajohnt/ink-scrollable-box), [ink-combobox](https://github.com/costajohnt/ink-autocomplete), [ink-timer](https://github.com/costajohnt/ink-timer), [ink-json-viewer](https://github.com/costajohnt/ink-json-viewer), [ink-tree-view](https://github.com/costajohnt/ink-tree-view), [ink-file-picker](https://github.com/costajohnt/ink-file-picker).

Installed from GitHub, not npm:

```sh
npm install --save-dev github:costajohnt/ink-config xo
```

## tsconfig

```json
{
	"extends": "@costajohnt/ink-config/tsconfig.json"
}
```

Builds on [`@sindresorhus/tsconfig`](https://github.com/sindresorhus/tsconfig), with `src` as the input and `dist` as the output.

## xo

```js
// xo.config.js
import base from '@costajohnt/ink-config/xo';

export default [
	...base,
	{
		rules: {
			// Library-specific overrides.
		},
	},
];
```

## CI

```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main, master]
  pull_request:
jobs:
  ci:
    uses: costajohnt/ink-config/.github/workflows/ci.yml@main
```

Lints on Node 22 and tests against ink 6, 7, and 8. A library needs `build`, `typecheck`, `lint`, and `test` scripts.

Changes here apply to every library's CI on its next run. tsconfig and xo changes reach a library when it runs `npm update @costajohnt/ink-config`.
