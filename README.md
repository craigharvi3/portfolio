# Portfolio
[![Build Status](https://travis-ci.org/craigharvi3/portfolio.svg?branch=master)](https://travis-ci.org/craigharvi3/portfolio)


## Get Started

In the root of the folder, run the following commands:

### Install dependencies
```
yarn install
```

### Build JS and SASS
```
yarn bundle
```

**Alternatively you can watch assets by:**
```
yarn watch
```

### Linting

```
yarn lint
```

### Tests

```
yarn test
```


## Directory Structure
* `app` - This is where the main application lives (client and server codebase)
    * `client` - The front end code including sass, javascript and images.
* `test` - This is where all unit tests live (just front end tests for now).
* `public` - Contains the static index.html and where build files including css, javascript and images are compiled to.
