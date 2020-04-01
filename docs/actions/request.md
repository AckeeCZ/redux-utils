# Request action creators helpers

## `apiRequestActions(types: Object) => Object`

A function generating an object with action creators for corresponding action types.

### Parameters

-   `types: Object` - an object with action types (e.g. `{ REQUEST: 'REQUEST', FAILURE: 'FAILURE' }`)

### Returns

An object with action creators named by corresponding action types.

### Example

```js
import { asyncType, apiRequestActions } from '@ackee/redux-utils';

// Use asyncType helper or define manually
const types = asyncType({
    modulePrefix: 'articles',
    typePrefix: 'FETCH_ARTICLES_',
});

const actions = apiRequestActions(types);

/*
{
    fetchArticlesRequest: params => ({
        type: 'articles/FETCH_ARTICLES_REQUEST',
        payload: { ...params }
    }),
    fetchArticlesSuccess: (payload, meta) => ({
        type: 'articles/FETCH_ARTICLES_SUCCESS',
        meta,
        payload
    }),
    fetchArticlesFailure: error => ({
        type: 'articles/FETCH_ARTICLES_FAILURE',
        error
    }),
    fetchArticlesCancel: () => ({
        type: 'articles/FETCH_ARTICLES_CANCEL'
    }),
    fetchArticlesReset: () => ({
        type: 'articles/FETCH_ARTICLES_RESET'
    })
}
*/
```

## <a name="apiRequestActionsTypes"></a> `apiRequestActionsTypes(config: Object) => Object`

A function generating **both** request action types and creators.

### Parameters

-   `config: Object` - configuration for action types (same as for [`asyncType`](../utils/asyncType.md))

### Returns

An object with `types` and `actions` key. `types` are generated action types and `actions` is an object with action creators (same as for `apiRequestActions`)

### Example

```js
import { apiRequestActionsTypes } from '@ackee/redux-utils';

const { types, actions } = apiRequestActionsTypes({
    modulePrefix: 'articles',
    typePrefix: 'FETCH_ARTICLES_',
});
```

## <a name="createApiRequestActionsTypes"></a> `createApiRequestActionsTypes(config: Object) => Function`

A function generating a factory to create Redux actions and types with predefined module prefix and default types. Similar to [`createAsyncType`](../utils/asyncType.md).

### Parameters

-   `modulePrefix?: string` - a default `modulePrefix` for `asyncType` utility
-   `types?: array<string>` - a default `types` for `asyncType` utility

### Returns

A function for creating action types and actions with pre-defined parameters. It is the same function as `apiRequestActionsTypes`.

### Example

```js
import { createApiRequestActionsTypes } from '@ackee/redux-utils';

const apiRequestActionsTypes = createApiRequestActionsTypes({
    modulePrefix: 'articles',
});

const { types, actions } = apiRequestActionsTypes({
    typePrefix: 'FETCH_ARTICLES_',
});
```
