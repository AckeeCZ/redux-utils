# Action creators helpers

## `asyncType(params: object) => object`

A utility for dynamically creating (asynchronous) action types.

### Parameters

-   `modulePrefix?: string` - An optional prefix prepended to each `typePrefix` with each type in `types` as: `${modulePrefix}/${typePrefix}${types[i]}`.
-   `typePrefix?: string` - An optional prefix prepended to each type in `types`.
-   `types?: array<string>` - An array of action types suffixes. Most likely representing async. task (API request) phases.

Defaults:

```js
{
    modulePrefix: '',
    typePrefix: '',
    types: ['REQUEST', 'SUCCESS', 'FAILURE', 'CANCEL', 'RESET'],
}
```

### Returns

An object that includes:

-   property keys composed from `typePrefix` and `types` as: `${typePrefix}${types[i]}`
-   property valus composed `modulePrefix`, `typePrefix` and `types` as: `${modulePrefix}/${typePrefix}${types[i]}`

### Examples

#### Custom `typePrefix`

```js
import { asyncType } from '@ackee/redux-utils';

const fetchUserTypes = asyncType({
    typePrefix: 'FETCH_USER_',
});

console.log(fetchUserType);
/*
{
    FETCH_USER_CANCEL: "FETCH_USER_CANCEL"
    FETCH_USER_FAILURE: "FETCH_USER_FAILURE"
    FETCH_USER_REQUEST: "FETCH_USER_REQUEST"
    FETCH_USER_RESET: "FETCH_USER_RESET"
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS"
}
*/
```

#### Custom `types`

```js
import { asyncType } from '@ackee/redux-utils';

const fetchUserTypes = asyncType({
    typePrefix: 'FETCH_USER_',
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
});

console.log(fetchUserType);
/*
{
    FETCH_USER_REQUEST: "FETCH_USER_REQUEST"
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS"
    FETCH_USER_FAILURE: "FETCH_USER_FAILURE"
}
*/
```

#### With `modulePrefix`

```js
import { asyncType } from '@ackee/redux-utils';

const fetchUserTypes = asyncType({
    modulePrefix: 'users',
    typePrefix: 'FETCH_USER_',
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
});

console.log(fetchUserType);
/*
{
    FETCH_USER_REQUEST: "users/FETCH_USER_REQUEST"
    FETCH_USER_SUCCESS: "users/FETCH_USER_SUCCESS"
    FETCH_USER_FAILURE: "users/FETCH_USER_FAILURE"
}
*/
```

## `createAsyncType(params: object): function`

This function returns predefined `asyncType` utility with `modulePrefix` and/or custom default `types` parameters.

### Parameters

-   `modulePrefix?: string` - a default `modulePrefix` for `asyncType` utility
-   `types?: array<string>` - a default `types` for `asyncType` utility

### Returns

A function, binded `asyncType` utility with those provided parameters.

### Example

```js
import { createAsyncType } from '@ackee/redux-utils';

const asyncType = createAsyncType({
    modulePrefix: 'users',
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
});

const fetchUserTypes = asyncType({
    typePrefix: 'FETCH_USER_',
});
console.log(deletedUserTypes);
/*
{
    FETCH_USER_REQUEST: "users/FETCH_USER_REQUEST"
    FETCH_USER_SUCCESS: "users/FETCH_USER_SUCCESS"
    FETCH_USER_FAILURE: "users/FETCH_USER_FAILURE"
}
*/

const deleteUserTypes = asyncType({
    typePrefix: 'DELETE_USER_',
});
console.log(deletedUserTypes);
/*
{
    DELETE_USER_REQUEST: "users/DELETE_USER_REQUEST"
    DELETE_USER_SUCCESS: "users/DELETE_USER_SUCCESS"
    DELETE_USER_FAILURE: "users/DELETE_USER_FAILURE"
}
*/
```
