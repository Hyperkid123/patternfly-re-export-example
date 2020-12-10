# Setup

## Install and build the `./library` package first.
```sh
$ cd library
$ yarn && yarn build
```

## Install and build the webpack consumer
```sh
$ cd ../webpack-consumer
$ yarn && yarn build
```

The build will open a webpack bundle analyzer in your browser.

## What is OK
- seems that the lates version of react-core/react-table fixed the issue with bundling all react icons :+1:

## What is wrong !only aplicable on commonjs build!
- webpack does not tree shake any `react-core` components
  - I have found some relative imports/requires in `react-table` package ('EditableSelectInputCell' is one of them)
- webpack does not tree shake any `react-styles/css` files (related to above)
- `react-table` from some reason imports commonjs helper files, but ESM components this will lead to duplicate assets as well
