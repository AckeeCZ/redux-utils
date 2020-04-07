# Action types helpers

## `apiRequestType(params: object) => object`

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
import { apiRequestType } from '@ackee/redux-utils';

const fetchUserTypes = apiRequestType({
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
import { apiRequestType } from '@ackee/redux-utils';

const fetchUserTypes = apiRequestType({
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
import { apiRequestType } from '@ackee/redux-utils';

const fetchUserTypes = apiRequestType({
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

## `createApiRequestType(params: object): function`

This function returns predefined `apiRequestType` utility with `modulePrefix` and/or custom default `types` parameters.

### Parameters

-   `modulePrefix?: string` - a default `modulePrefix` for `apiRequestType` utility
-   `types?: array<string>` - a default `types` for `apiRequestType` utility

### Returns

A function, binded `apiRequestType` utility with those provided parameters.

### Example

```js
import { createApiRequestType } from '@ackee/redux-utils';

const apiRequestType = createApiRequestType({
    modulePrefix: 'users',
    types: ['REQUEST', 'SUCCESS', 'FAILURE'],
});

const fetchUserTypes = apiRequestType({
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

const deleteUserTypes = apiRequestType({
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
