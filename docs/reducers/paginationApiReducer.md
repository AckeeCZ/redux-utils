# Pagination API reducer

## `paginationApiReducer(config): reducer`

Purpose of this reducer is to **reflect current state of an API request with pagination**.

There're essentially two types of pagination:

-   manually switching between pages
-   infinite scrolling

This reducer can handle both of them.

> The `api.pagination` factory reducer is an extension of the [`api.basic`](../basic/README.md) factory reducer.

### Parameters

`config: Object`:

-   `actionTypes: Object`

    -   `REQUEST: String|Symbol (or any primitive type)` - recommended for basic usage
    -   `CANCEL: String|Symbol`
    -   `SUCCESS: String|Symbol` - recommended for basic usage
    -   `FAILURE: String|Symbol` - recommended for basic usage
    -   `RESET: String|Symbol`
    -   `SET_PAGE: String|Symbol`
    -   `UPDATE: String|Symbol`

-   `initialState: Object`

    -   `inProgress: Boolean`
    -   `error: String`
    -   `success: Boolean`
    -   `cancelled: Boolean`
    -   `lastSuccessAt: null|Number`
    -   `page: Number`
    -   `amount: Number`
    -   `totalCount: Number`
    -   `limit: Number`
    -   `hasMore: Boolean`

-   `selectors: Object`

    -   `totalCount: Function`
    -   `currentCount: Function`
    -   `hasMore: Function`

-   `actionFilters: Object`
    -   `setPage: Function`
    -   `update: Function`

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

        // action that updates 'page' property (action.payload.page)
        SET_PAGE: UNUSED_ACTION_TYPE,

        // arbitrary state update (new state = current state merged with action.payload object)
        UPDATE: UNUSED_ACTION_TYPE,
    },

    // reducer initial state
    initialState: {
        // REQUEST sets inProgress to true
        // INVALIDATE, FAILURE, or SUCCESS set inProgress to false
        inProgress: false,

        // FAILURE action set this property to action.error
        error: '',

        // SUCCESS sets this to true,
        // REQUEST sets this to false
        success: false,

        // INVALIDATE sets this to true,
        // REQUEST sets this to false
        cancelled: false,

        lastSuccessAt: null,

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
        currentCount: action => action.payload.ids.length,
        hasMore: action => action.meta.hasMore,
    },
    actionFilters: {
        // To be able to use general action, here is action validator where you can filter out unwanted actions (e.g. action.meta.category !== 'myCategory')
        setPage: action => true,

        // action UPDATE is passed here as 1st arg.
        // The function returns boolean. If true is returned,
        // state is merged with an action.payload object.
        update: action => true,
    }
}
```

---

#### Example - with `totalCount`

```js
import { paginationApiReducer } from '@ackee/redux-utils';

// example of action creators for fetching todo items
const fetchUsersRequest = () => ({
    type: 'FETCH_USERS_REQUEST',
});

const fetchUsersSuccess = ({ byId = {}, ids = [] }, totalCount) => ({
    type: 'FETCH_USERS_SUCCESS',
    meta: {
        totalCount,
    },
    payload: {
        byId,
        ids,
    },
});

const fetchUsersFailure = error => ({
    type: 'FETCH_USERS_FAILURE',
    error,
});

const reducer = paginationApiReducer({
    actionTypes: {
        REQUEST: 'FETCH_USERS_REQUEST',
        SUCCESS: 'FETCH_USERS_SUCCESS',
        FAILURE: 'FETCH_USERS_FAILURE',
    },
    selectors: {
        currentCount: action => action.payload.ids.length,
        totalCount: action => action.meta.totalCount,
    },
    initialState: {
        // fetch 30 items per request
        limit: 30,
    },
});

export default reducer;
```

### Example - with `hasMore` flag

```js
import { paginationApiReducer } from '@ackee/redux-utils';

// example of action creators for fetching todo items
const fetchUsersRequest = () => ({
    type: 'FETCH_USERS_REQUEST',
});

const fetchUsersSuccess = (users, hasMore) => ({
    type: 'FETCH_USERS_SUCCESS',
    meta: {
        hasMore,
    },
    payload: users,
});

const fetchUsersFailure = error => ({
    type: 'FETCH_USERS_FAILURE',
    error,
});

const reducer = paginationApiReducer({
    actionTypes: {
        REQUEST: 'FETCH_USERS_REQUEST',
        SUCCESS: 'FETCH_USERS_SUCCESS',
        FAILURE: 'FETCH_USERS_FAILURE',
    },
    selectors: {
        hasMore: action => action.meta.hasMore,
    },
});

export default reducer;
```

---

## Continue to [Container reducer](./containerReducer.md)
