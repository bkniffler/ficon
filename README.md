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

## Table of Contents

- [Installation](#install)
  - [Yarn](#yarn)
  - [NPM](#npm)
- [Examples](#examples)
  - [raect](#react)
  - [react-fela](#react-fela)
- [FontAwesome Pro](#pro)

<a name="install"/>

## Install

<a name="yarn"/>

### Yarn

```
# For regular+brands icons
yarn add ficon
# For solid+brands icons
yarn add ficon-solid
```

<a name="npm"/>

### NPM

```
# For regular+brands icons
npm i ficon
# For solid+brands icons
npm i ficon-solid
```

<a name="examples"/>

## Examples

<a name="react"/>

### react

```jsx
import { FaFontAwesomeLogoFull } from 'ficon';

const MyComponent = () => (
  <div>
    <span style={{ fontSize: 14 }}>
      I can adapt to fontSize! <FaFontAwesomeLogoFull color="black" />
    </span>
    <span>
      I can use any other valid color too! <FaFontAwesomeLogoFull color="red" />
      I can use any other valid color too!{' '}
      <FaFontAwesomeLogoFull color="#666" />
    </span>
  </div>
);
```

<a name="react-fela"/>

### react-fela

```jsx
import FiconProvider from 'ficon-fela';
import { FaFontAwesomeLogoFull } from 'ficon';

const MyComponent = () => (
  <FiconProvider>
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
        I can use any other valid color too!{' '}
        <FaFontAwesomeLogoFull color="red" />I can use any other valid color
        too! <FaFontAwesomeLogoFull color="#666" />
      </span>
    </div>
  </FiconProvider>
);
```

<a name="pro"/>

## FontAwesome Pro

If you want to use the pro icons, you will need to publish your own private package. Create a new package with a package.json similar to the following. You can generate either typescript or es6 files. You can use light, brands, solid or regular icons, though you can not use light/regular/solid at the same time. If you do, you will need to generate different packages due to filename conflicts.

```json
{
  "version": "0.0.1",
  "name": "@myorg/icons",
  "description": "",
  "scripts": {
    // For es6
    "build": "yarn clean && ficon pro light,brands es6 && tsc",
    // For ts
    "build": "yarn clean && ficon pro light,brands ts && tsc"
  },
  "devDependencies": {
    "ficon-generator": "^0.1.3"
  }
}
```

If you want to get started really quickly, just use the code found in [ficon](https://github.com/bkniffler/ficon/blob/master/packages/ficon).

Make sure you got your .npmrc setup to use the fontawesome npm registry. You will find your own package token [here](https://fontawesome.com/account).

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=YOUR_FA_PACKAGE_TOKEN
```
