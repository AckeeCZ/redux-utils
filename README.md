![ackee|redux-utils](https://img.ack.ee/ackee/image/github/js)

# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/AckeeCZ/redux-utils/blob/master/LICENSE) [![CI Status](https://img.shields.io/travis/com/AckeeCZ/redux-utils.svg?style=flat)](https://travis-ci.com/AckeeCZ/redux-utils) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request) [![Dependency Status](https://img.shields.io/david/AckeeCZ/redux-utils.svg?style=flat-square)](https://david-dm.org/AckeeCZ/redux-utils) [![bundlephobia](https://flat.badgen.net/bundlephobia/min/@ackee/redux-utils)](https://bundlephobia.com/result?p=@ackee/redux-utils) [![bundlephobia](https://flat.badgen.net/bundlephobia/minzip/@ackee/redux-utils)](https://bundlephobia.com/result?p=@ackee/redux-utils)

# Redux Utilities

Common Redux utilities, including:

-   Reducer factories (`containerReducer`, `resetReducer`, `basicApiReducer` a more).
-   Generic API request action type and creator factories (`asyncType`, `apiRequestActions`).

## Table of contents

-   [Installing](#installing)
-   [Configuration](#configuration)
-   API References
    -   [Action Type helpers](./docs/utils/apiRequestType.md)
        -   [`apiRequestType`](./docs/utils/apiRequestType.md#apiRequestType)
        -   [`createApiRequestType`](./docs/utils/apiRequestType.md#createApiRequestType)
    -   Action Creator helpers
        -   [`createApiActions`]('./docs/actions/apiActions.md)
        -   [`apiRequestActions`](./docs/actions/request.md)
        -   [`createApiRequestActions`](./docs/actions/createApiRequest.md)
    -   Reducer factories
        -   [`basicApiReducer`](./docs/reducers/basicApiReducer.md)
        -   [`paginationApiReducer`](./docs/reducers/paginationApiReducer.md)
        -   [`infiniteListApiReducer`](./docs/reducers/infiniteListApiReducer.md)
        -   [`containerReducer`](./docs/reducers/containerReducer.md)
        -   [`basicResetReducer`](./docs/reducers/basicResetReducer.md)
        -   [`containerResetReducer`](./docs/reducers/containerResetReducer.md)
    -   [Selectors for API reducers](./docs/selectors/selectors.md)
        -   [`apiSelector`](./docs/selectors/selectors.md#apiSelector)
        -   [`paginationApiSelector`](./docs/selectors/selectors.md#paginationApiSelector)
    -   Utilities
        -   [`strictObjectAccess`](./docs/utils/strictObjectAccess.md)

---

## <a name="installing"></a>Installing



```bash
# Using yarn:
$ yarn add @ackee/redux-utils

# Using npm:
$ npm i -S @ackee/redux-utils
```

> Don't forget to install [`peerDependencies`](https://github.com/AckeeCZ/redux-utils/blob/master/package.json#L39) too

## Configuration (optional)

Available options:

-   Set initial reducer state globally.
-   Set custom logger.

```js
import { configure } from '@ackee/redux-utils';

// Defaults:
configure({
    // Pass any object with error, warn and info methods.
    logger: console,

    containerReducer: reducerConfig => reducerConfig,
    basicApiReducer: reducerConfig => reducerConfig,
    paginationApiReducer: reducerConfig => reducerConfig,
    infiniteListApiReducer: reducerConfig => reducerConfig,
});
```

### Change reducer initial state globally

```js
import { configure } from '@ackee/redux-utils';

configure({
    // ...

    basicApiReducer: ({ initialState, ...rest }) => {
        return {
            ...rest,
            initialState: {
                ...initialState,
                // Override default error initial value:
                error: null,
            },
        };
    },
});
```
