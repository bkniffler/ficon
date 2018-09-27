<div align="center">
  <h2>Ficon</h2>
  <strong>Fontawesome 5 react for fela</strong>
  <br />
  <br />
  <a href="https://travis-ci.org/bkniffler/ficon">
    <img src="https://img.shields.io/travis/bkniffler/ficon.svg?style=flat-square" alt="Build Status">
  </a>
  <a href="https://codecov.io/github/bkniffler/ficon">
    <img src="https://img.shields.io/codecov/c/github/bkniffler/ficon.svg?style=flat-square" alt="Coverage Status">
  </a>
  <a href="https://github.com/bkniffler/ficon">
    <img src="http://img.shields.io/npm/v/ficon.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://github.com/bkniffler/ficon">
    <img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square" alt="Language">
  </a>
  <a href="https://github.com/bkniffler/ficon/master/LICENSE">
    <img src="https://img.shields.io/github/license/bkniffler/ficon.svg?style=flat-square" alt="License">
  </a>
  <br />
  <br />
</div>

## Install

### Yarn

```
# For regular+brands icons
yarn add ficon
# For solid+brands icons
yarn add ficon-solid
```

### NPM

```
# For regular+brands icons
npm i ficon
# For solid+brands icons
npm i ficon-solid
```

## Example

```jsx
import { FaFontAwesomeLogoFull } from 'ficon';

const MyComponent = () => (
  <div>
    <span style={{ fontSize: 14 }}>
      I can adapt to fontSize! <FaFontAwesomeLogoFull color="black" />
    </span>
    <span>
      I can use your themes color (using theme.color)!{' '}
      <FaFontAwesomeLogoFull color />
    </span>
    <span>
      I can use your any of your themes properties!{' '}
      <FaFontAwesomeLogoFull color="secondary" />
    </span>
    <span>
      I can use any other valid color too! <FaFontAwesomeLogoFull color="red" />
      I can use any other valid color too!{' '}
      <FaFontAwesomeLogoFull color="#666" />
    </span>
  </div>
);
```

## Using PRO

If you want to use the pro icons, you will need to publish your own private package. Clone/Fork this repository and make sure you have this in your .npmrc before installing the dependencies of ficon. You will find your own package token [here](https://fontawesome.com/account).

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_FA_PACKAGE_TOKEN
```

Then

```
yarn install

yarn build:pro:light
# OR
build:pro:regular
# OR
build:pro:solid

# In case you have your own private repo
npm publish --registry YOUR_PRIVATE_REGISTRY
# In case you have npm private packages, chage the package name to something like '@myorg/icons' and publish
npm publish
```
