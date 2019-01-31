# Pagination API reducer

## `api.pagination(config): reducer`

Purpose of this reducer is to **reflect current state of an API request with pagination**.

There're essentially two types of pagination:

-   manually switching between pages
-   infinite scrolling

This reducer can handle both of them.

> The `api.pagination` factory reducer is an extension of the [`api.basic`](../basic/README.md) factory reducer.

### Parameters

`config: Object`:

-   `actionTypes: Object`

    -   `REQUEST: String|Symbol (or any primitive type)` - recommended, not required
    -   `INVALIDATE: String|Symbol`
    -   `SUCCESS: String|Symbol` - recommended, not required
    -   `FAILURE: String|Symbol` - recommended, not required
    -   `RESET: String|Symbol`

-   `initialState: Object`

    -   `isFetching: Boolean`
    -   `error: Object`
    -   `success: Boolean`
    -   `didInvalidate: Boolean`
    -   `page: Number`
    -   `amount: Number`
    -   `totalCount: Number`
    -   `limit: Number`
    -   `hasMore: Boolean`

-   `selectors: Object`

    -   `totalCount: Function` - required
    -   `currentCount: Function` - required

-   `options: Object`
    -   `logging: Boolean`

### Returns

`reducer: Function`

### Default config

```js
{
    // UNUSED_ACTION_TYPE is internal symbol, used as placeholder
    actionTypes: {
        // API request was created
        REQUEST: UNUSED_ACTION_TYPE,

        // API request was invalidated / cancelled
        INVALIDATE: UNUSED_ACTION_TYPE,

        // API request succeed
        SUCCESS: UNUSED_ACTION_TYPE,

        // API request failed, sets error
        FAILURE: UNUSED_ACTION_TYPE,

        // reset reducer to initial state
        RESET: UNUSED_ACTION_TYPE,
    },

    // reducer initial state
    initialState: {
        // REQUEST sets isFetching to true
        // INVALIDATE, FAILURE, or SUCCESS set isFetching to false
        isFetching: false,

        // FAILURE action set this property to action.error
        error: {
            code: null,
            message: '',
        },

        // SUCCESS sets this to true,
        // REQUEST sets this to false
        success: false,

        // INVALIDATE sets this to true,
        // REQUEST sets this to false
        didInvalidate: false,

        // current page
        page: 1,

        // items per page
        amount: 4,

        // total number of items
        totalCount: 0,

        // fetch 20 items
        limit: 20,

        // has more items to fetch
        hasMore: true,
    },
    selectors: {
        totalCount: action => action.meta.totalCount,
        // TODO:
        itemIds: action => action.payload.ids,
    },
    options: {
        logging: process.env.NODE_ENV === 'development'
    }
}
```

---

#### Example

```js
import { reducers } from '@ackee/redux-utils';

// example of action creators for fetching todo items
const fetchUsersRequest = () => ({
    type: 'FETCH_USERS_REQUEST',
});

const fetchUsersSuccess = users => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users,
});

const fetchUsersFailure = error => ({
    type: 'FETCH_USERS_FAILURE',
    error,
});

const apiReducer = reducers.api.pagination({
    actionTypes: {
        REQUEST: 'FETCH_USERS_REQUEST',
        SUCCESS: 'FETCH_USERS_SUCCESS',
        FAILURE: 'FETCH_USERS_FAILURE',
    },
    initialState: {
        // fetch 30 items per request
        limit: 30,
    },
});

export default apiReducer;
```

---

## Continue to [Container reducer](/src/reducers/container/README.md)
