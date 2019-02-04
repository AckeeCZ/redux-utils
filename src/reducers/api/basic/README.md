# Basic API reducer

## `api.basic(config): reducer`

Purpose of this reducer is to **reflect current state of an API request**.

### Parameters

The whole config object and its properties is optional.

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
const fetchTodosRequest = () => ({
    type: 'FETCH_TODOS_REQUEST',
});

const fetchTodosSuccess = todos => ({
    type: 'FETCH_TODOS_SUCCESS',
    payload: todos,
});

const fetchTodosFailure = error => ({
    type: 'FETCH_TODOS_FAILURE',
    error,
});

const apiReducer = reducers.api.basic({
    actionTypes: {
        REQUEST: 'FETCH_TODOS_REQUEST',
        SUCCESS: 'FETCH_TODOS_SUCCESS',
        FAILURE: 'FETCH_TODOS_FAILURE',
    },
});

export default apiReducer;
```

---

## Continue to [Pagination API reducer](../pagination/README.md)
