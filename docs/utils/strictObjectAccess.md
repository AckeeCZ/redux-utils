# `strictObjectAccess(target: object, enabled?: boolean) => proxy`

## Params

-   `target: object`
-   `enabled?: boolean`
    -   Default value is equal to `process ? process.env.NODE_ENV === 'development' : true`, i.e. enable it in development, but disable it in production.

## Returns

A [`new Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) instance.

---

## What does it do

It takes an object, wraps it with a new `Proxy` (in order to be able to intercept each property access) and returns the proxy instance. So the returned output behaves same as the input object, but **when a object property results in `undefined` value an error is thrown**.

## Why is it useful

This is incredibly useful for constants and detecting typos.

## Usage

```js
import { strictObjectAccess } from '@ackee/redux-utils';

const Types = {
    A: 'a',
    B: 'b',
};

console.log(Types.A); // -> 'a'
console.log(Types.X); // -> 'undefined'

const TypesProxy = strictObjectAccess(Types);

console.log(TypesProxy.A); // -> 'a'
console.log(TypesProxy.X); // However, this is going to throw an error:
/*
    Uncaught StrictAccessError: Accessing this object property results in an undefined value.
    Used property key: 'X',
    Affected object: {
        "A": 'a',
        "B": 'b'
    }
*/
```
