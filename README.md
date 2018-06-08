# Debounce ES6

Debounce library fully written in ES6

How to **install**:

> npm install debounce-es6

**Usage:**

```javascript

import DebounceES6 from 'debounce-es6';

const debounceES6 = new DebounceES6();

const delayTime = 300 //mms
const isImmediate = false

debounceES6.debounce(() => {
  console.log('some foo texto to be debounced');
}, delayTime, isImmediate);

````

## Features

This library is designed in order to debounce the function used as callback. The `debounceES6.debounce` method will delay the execution during the time set in the `await` parameter.

Also, is available to set the `new DebounceES6()` as global and the library will send just the last stack of calls in the await time.

## Api
### debounce method

```javascript
// function as callback
// awaitTime as number in mms
// immediate as boolean

.debounce( function, awaitTime, immediate )
```

## Just debounce example

```javascript

import DebounceES6 from 'debounce-es6';

const debounceES6 = new DebounceES6();

const delayTime = 300 //mms
const isImmediate = false

debounceES6.debounce(() => {
  console.log('some foo texto to be debounced');
}, delayTime, isImmediate);

```
## Debounce last stack of call (if the await time does not get acomplished between calls)

```javascript

import DebounceES6 from 'debounce-es6';

const debounceES6 = new DebounceES6();

const delayTime = 300 //mms
const isImmediate = false

someFooMethod() {
  debounceES6.debounce(() => {
    console.log('some foo text to be debounced');
  }, delayTime, isImmediate);
}

...

for(var i = 0; i < 5; i++) {
  this.someFooMethod()
}

// NOT EXPECTED OUTPUT
// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced


// REAL EXPECTED OUTPUT:
//some foo text to be debounced

```

In that case, if we set during the loop `immediate` parameter as true, the output will be:

```javascript
// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced

// ** wait for 300 mms **
//some foo text to be debounced
```
