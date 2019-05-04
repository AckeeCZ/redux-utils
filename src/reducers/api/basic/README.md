# Basic API reducer

## `basicApiReducer(config): reducer`

Purpose of this reducer is to **reflect current state of an API request**.

### Parameters

The whole config object and its properties is optional.

`config: Object`:

-   `actionTypes: Object`

    -   `REQUEST: String|Symbol (or any primitive type)` - recommended for basic usage
    -   `CANCEL: String|Symbol`
    -   `SUCCESS: String|Symbol` - recommended for basic usage
    -   `FAILURE: String|Symbol` - recommended for basic usage
    -   `RESET: String|Symbol`
    -   `UPDATE: String|Symbol`

-   `initialState: Object`

    -   `inProgress: Boolean`
    -   `error: String`
    -   `success: Boolean`
    -   `cancelled: Boolean`

-   `actionFilters: Object`
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

        // API request was cancelled
        CANCEL: UNUSED_ACTION_TYPE,

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
import { basicApiReducer } from '@ackee/redux-utils';

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

const apiReducer = basicApiReducer({
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
