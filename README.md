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
