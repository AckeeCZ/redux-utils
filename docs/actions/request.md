# API request action creator helpers

## `apiRequestActions(types: Object) => Object`

A function generating an object with action creators for corresponding action types.

### Parameters

-   `types: Object` - an object with action types (e.g. `{ REQUEST: 'REQUEST', FAILURE: 'FAILURE' }`)

### Returns

An object with action creators named by corresponding action types.

### Example

```js
import { apiRequestType, apiRequestActions } from '@ackee/redux-utils';

// Use apiRequestType helper or define manually
const types = apiRequestType({
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
