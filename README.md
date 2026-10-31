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
    uses: costajohnt/ink-config/.github/workflows/ci.yml@v1
```

Lints on Node 22 and tests against ink 6, 7, and 8, each on Node 22 and 24. The libraries support Node.js 22 and later and TypeScript 5.9 and later. A library needs `build`, `typecheck`, `lint`, and `test` scripts.

### release-please

A release PR opened by `release-please-action` with the default `GITHUB_TOKEN` does not trigger `pull_request` workflows, so it shows a failed zero-job CI run and merges with no real signal. Give it a fine-grained PAT (contents and pull-requests read/write on the library) stored as `RELEASE_PLEASE_TOKEN`:

```yaml
# .github/workflows/release.yml
      - uses: googleapis/release-please-action@v5
        with:
          token: ${{ secrets.RELEASE_PLEASE_TOKEN }}
```

## Releasing

`check.yml` runs on every push and PR here: lints `xo.js` with its own config, compiles `test/fixture` against the shared tsconfig, and runs actionlint on the workflows. It does not protect the libraries from a bad `main`, so they pin the reusable workflow to the `v1` tag, and the tag moves only on purpose:

```sh
git tag v1.0.0
git tag -f v1 v1.0.0
git push origin v1.0.0
git push -f origin v1
```

Changing what the workflow expects from a library (required scripts, the Node floor, the ink or React range) is a breaking change: tag `v2` and move the libraries one at a time.

tsconfig and xo changes reach a library when it runs `npm update @costajohnt/ink-config`.
