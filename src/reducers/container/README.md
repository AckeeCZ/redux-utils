# Container reducer

## `container(config): reducer`

Purpose of this reducer is to replace the boilerplate for creating container reducers

I.e. you have a child reducer called `userReducer` and container reducer called `usersReducer`. Each action handled by the `usersReducer` contain a user ID:

```js
function usersReducer(state, action) {
    switch (action.type) {
        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                [userId]: userReducer(state[userId], action),
            };
        // ...
    }
}

// This might be replaced with:
const usersReducer = reducers.container({
    childReducer: userReducer,
    actionTypes: ['FETCH_USER_REQUEST'],
});
```

Additionally to this simplification, the container reducer factory may create a `placeholder` item with an initial state of the child reducer.

---

### Parameters

`config: Object`

-   `childReducer: Function` - required
-   `actionTypes: Array` - required
-   `initialState: Object`
-   `selectors: Object`
    -   `itemId: Function` - required
-   `options: Object`
    -   `ignoreWarnings: Boolean`
    -   `placeholder: Boolean`
    -   `logging: Boolean`

### Default config

```js
{
    childReducer: undefined,
    actionTypes: [],
    initialState: {},
    selectors: {
        itemId: action => action.meta.itemId,
    },
    options: {
        ignoreWarnings: process.env.NODE_ENV !== 'development',
        placeholder: true,
        logging: process.env.NODE_ENV === 'development',
    }
}
```

#### Example

This reducer factory solves issue, for example, when you need to store a fetch user state separately by user ID.

```js
import { reducers } from '@ackee/redux-utils';

// actions:

const fetchUserRequest = userId => ({
    type: 'FETCH_USER_REQUEST',
    meta: { userId },
});

const fetchUserSuccess = (userId, user) => ({
    type: 'FETCH_USER_SUCCESS',
    meta: { userId },
    payload: user,
});

const fetchUserFailure = (userId, error) => ({
    type: 'FETCH_USER_FAILURE',
    meta: { userId },
    error,
});

// reducers:

const actionTypes = {
    REQUEST: 'FETCH_USER_REQUEST',
    SUCCESS: 'FETCH_USER_SUCCESS',
    FAILURE: 'FETCH_USER_FAILURE',
};

const basicApiReducer = reducers.api.basic({
    actionTypes,
});

const containerReducer = reducers.container({
    childReducer: basicApiReducer,
    actionTypes: Object.values(actionTypes),
    selectors: {
        itemId: action => action.meta.userId,
    },
});

/*
    The containerReducer will produce following structure:
    {
        placeholder: {
            isFetching: false,
            success: false,
            error: '',
            // ...
        },
        userIdA: {
            isFetching: false,
            // ...
        },
        userIdA: {
            isFetching: false,
            // ...
        },
    }
*/

export default containerReducer;
```

---

## Continue to [Basic reset reducer](/src/reducers/reset/basic/README.md)
