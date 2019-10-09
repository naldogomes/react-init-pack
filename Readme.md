<p align="center">
  <img alt="react" src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" width="120" />
</p>

<h1 align="center">
  React init pack
</h1>

[![CircleCI](https://circleci.com/gh/C4co/react-init-pack.svg?style=svg)](https://circleci.com/gh/C4co/react-init-pack)
[![Maintainability](https://api.codeclimate.com/v1/badges/f127caa562ff0638fb00/maintainability)](https://codeclimate.com/github/C4co/react-init-pack/maintainability)
[![Netlify Status](https://api.netlify.com/api/v1/badges/42f5ccdf-418f-4226-8ecb-647439f21f22/deploy-status)](https://app.netlify.com/sites/react-init-pack/deploys)
[![Coverage Status](https://coveralls.io/repos/github/C4co/react-init-pack/badge.svg?branch=master)](https://coveralls.io/github/C4co/react-init-pack?branch=master)

A simple way to start a react package for npm.

### What's inside?
  + [Jest](https://jestjs.io)
  + [Storybook](https://storybook.js.org)
  + [Webpack](https://webpack.js.org)

### First step
```
  $ git clone https://github.com/C4co/react-init-pack.git new-pack
  $ npm init
```

### Install
```
  $ yarn install
```

### Development

run Storybook
```
  $ yarn storybook
```

formating with prettier
```
  $ yarn format
```

tests
```
  $ yarn test
```

### Publish

build
```
  $ yarn build
```

npm
```
  # npm publish
```

### Component structure

```
  📂 component
  ├─── 📂 __snapshots__
  ├─── component.js
  ├─── component.md
  └─── component.test.js
```

+ ```component.js``` - component definition
+ ```component.md``` - storybook documentation
+ ```component.test.js``` - unity tests

---

Carlos Costa | 2019
