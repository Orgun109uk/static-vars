[![Build Status](https://travis-ci.org/Orgun109uk/static-vars.svg)](https://travis-ci.org/Orgun109uk/static-vars)
[![Build Status](https://david-dm.org/orgun109uk/static-vars.png)](https://david-dm.org/orgun109uk/static-vars)
[![npm version](https://badge.fury.io/js/static-vars.svg)](http://badge.fury.io/js/static-vars)

[![NPM](https://nodei.co/npm/static-vars.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/static-vars/)

# Static Variables

Static variables allows for storing global variables including submodules.

## Installation

```sh
npm install static-vars --save
```

## Usage

###  index.js

```js
var staticVars = require('static-vars');
var myVar = staticVars.set('myVar', 'hello world');
```

### other.js

```js
var staticVars = require('static-vars');
if (staticVars.has('myVar')) {
  console.info(staticVars.get('myVar', 'foo bar')); // 'hello world'
}
```

## Methods
### get (String name [, Mixed def]) : Mixed

Gets the stored value of a static variable, if the variable is not defined
then *def* will be returned.

### set (String name, Mixed value) : Object

Sets the value of a static variable, and returns the *static-vars* object.

### has (String name) : Boolean

Determines if a static variable has been defined.

### del (String name) : Object

Deletes the static variable, and returns the *static-vars* object.

## Development and testing

Mocha unit tests:

```sh
npm test
```

ESLint and JSHint:

```sh
npm run eslint
npm run jshint
```
