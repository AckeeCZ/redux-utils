# Infinite list API reducer

## `infiniteListApiReducer(config): reducer`

Purpose of this reducer is to **reflect current API request state of infinite list**.

-   On each succesfully finished API request (`SUCCESS` action), `totalOffset` is incremented by fetched items length (i.e. by value of `selectors.currentCount`).
-   If `payloadSize <` currently fetched items length, then `hasMore` is `false`.

> The `paginationApiReducer` extends the [`basicApiReducer`](basicApiReducer.md).

### Parameters

`config: object`:

-   `actionTypes: object`

    -   `REQUEST: string|symbol (or any primitive type)` - recommended for basic usage
    -   `CANCEL: string|symbol`
    -   `SUCCESS: string|symbol` - recommended for basic usage
    -   `FAILURE: string|symbol` - recommended for basic usage
    -   `RESET: string|symbol`
    -   `UPDATE: string|symbol`

-   `initialState: object`

    -   `inProgress: boolean`
    -   `error: string`
    -   `success: boolean`
    -   `cancelled: boolean`
    -   `lastSuccessAt: null|number`

    -   `hasMore: boolean`
    -   `payloadSize: number`
    -   `totalOffset: number`
    -   `totalCount: number`

-   `selectors: object`

    -   `currentCount: action => number`
    -   `totalCount?: action => number`

-   `actionFilters: object`

    -   `update: function`

### Returns

`reducer: function`

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

        // has more items to fetch
        hasMore: true,

        // fetched items length
        totalOffset: 0,

        // number of items to be fetched in a single request
        payloadSize: 10,
    },
    selectors: {
        currentCount: action => action.payload.ids.length,
        totalCount: action => action.meta.totalCount,
    },
    actionFilters: {
        // action UPDATE is passed here as 1st arg.
        // The function returns boolean. If true is returned,
        // state is merged with an action.payload object.
        update: action => true,
    }
}
```

---

#### Example

```js
import { infiniteListApiReducer } from '@ackee/redux-utils';

// example of action creators for fetching todo items
const fetchUsersRequest = () => ({
    type: 'FETCH_USERS_REQUEST',
});

const fetchUsersSuccess = ({ byId = {}, ids = [] }) => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: {
        byId,
        ids,
    },
});

const fetchUsersFailure = error => ({
    type: 'FETCH_USERS_FAILURE',
    error,
});

const reducer = infiniteListApiReducer({
    actionTypes: {
        REQUEST: 'FETCH_USERS_REQUEST',
        SUCCESS: 'FETCH_USERS_SUCCESS',
        FAILURE: 'FETCH_USERS_FAILURE',
    },
    initialState: {
        // fetch 10 items per request
        payloadSize: 10,
    },
});

export default reducer;
```

---

## Continue to [Container reducer](./containerReducer.md)
