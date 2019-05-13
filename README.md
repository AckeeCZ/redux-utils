![ackee|redux-utils](https://img.ack.ee/ackee/image/github/js)

# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AckeeCZ/redux-utils/blob/master/LICENSE) [![CI Status](https://img.shields.io/travis/com/AckeeCZ/redux-utils.svg?style=flat)](https://travis-ci.com/AckeeCZ/redux-utils) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request) [![Dependency Status](https://img.shields.io/david/AckeeCZ/redux-utils.svg?style=flat-square)](https://david-dm.org/AckeeCZ/redux-utils) [![bundlephobia](https://flat.badgen.net/bundlephobia/min/@ackee/redux-utils)](https://bundlephobia.com/result?p=@ackee/redux-utils) [![bundlephobia](https://flat.badgen.net/bundlephobia/minzip/@ackee/redux-utils)](https://bundlephobia.com/result?p=@ackee/redux-utils)

# Redux Utilities

Common Redux utilities, including:

-   Reducer factories (`containerReducer`, `resetReducer`, `basicApiReducer` a more).
-   Async action type creator (`asyncType`).

## Table of contents

-   [Installing](#installing)
-   API References
    -   [Action Type helpers](./docs/utils/asyncType.md)
        -   [`asyncType`](./docs/utils/asyncType.md#asyncType)
        -   [`createAsyncType`](./docs/utils/asyncType.md#createAsyncType)
    -   Reducer factories
        -   [`basicApiReducer`](./docs/reducers/basicApiReducer.md)
        -   [`paignationApiReducer`](./docs/reducers/paignationApiReducer.md)
        -   [`containerReducer`](./docs/reducers/containerReducer.md)
        -   [`basicResetReducer`](./docs/reducers/basicResetReducer.md)
        -   [`containerResetReducer`](./docs/reducers/containerResetReducer.md)
    -   [Selectors for API reducers](./docs/selectors/selectors.md)
        -   [`apiSelector`](./docs/selectors/selectors.md#apiSelector)
        -   [`apiPaginationSelector`](./docs/selectors/selectors.md#paginationApiSelector)
    -   Utilities
        -   [`strictObjectAccess`]('./docs/utils/strictObjectAccess.md')

---

## <a name="installing"></a>Installing

Using yarn:

```bash
$ yarn add @ackee/redux-utils
```

Using npm:

```bash
$ npm i -S @ackee/redux-utils
```

---

## <a name="api"></a>API

### <a name="api-action-type-helpers"></a>Action Type helpers

#### `asyncType(params: object): object`

##### `params`

-   `types: array`
-   `typePrefix: string`
-   `modulePrefix: string`

---

#### `createAsyncType(params: object): asyncType`

##### `params`

-   `modulePrefix: string`
-   `defaultTypes: array`

---

#### <a name="api-createType"></a>`createType(prefix, suffixes, modulePrefix)`

Utility to help creating Redux action types for API request actions.

##### Arguments

1. `prefix` (string): Action type base
2. `suffixes` (Array.<string> [optional]) Array of suffixes to use to make types. Default is `['_COMPLETED', '_SUCCEEDED', '_FAILED']`
3. `modulePrefix` (string [optional]) Name of module actions belong to. If none provided, no prefix is added to action types names.

##### Returns

Object containing redux actions types prepared for HTTP request-response cycle.

##### Examples

```js
import { createType } from '@ackee/redux-utils';

createType('REQUEST_FEED');
/*
 * [
 *    'REQUEST_FEED',
 *    'REQUEST_FEED_SUCCEEDED',
 *    'REQUEST_FEED_FAILED',
 *    'REQUEST_FEED_COMPLETED',
 * ]
 */

createType('REQUEST_FEED', ['YEAH', 'DAMN']);
/*
 * [
 *    'REQUEST_FEED',
 *    'REQUEST_FEED_YEAH',
 *    'REQUEST_FEED_DAMN',
 * ]
 */

createType('REQUEST_FEED', undefined, 'Dogs');
/*
 * [
 *    'Dogs/REQUEST_FEED',
 *    'Dogs/REQUEST_FEED_SUCCEEDED',
 *    'Dogs/REQUEST_FEED_FAILED',
 *    'Dogs/REQUEST_FEED_COMPLETED',
 * ]
 */
```

---
