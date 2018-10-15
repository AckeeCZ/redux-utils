# Factory reducers

## Table of contents

-   [](<>)

* * *

## API reducers

### Basic API reducer

### Pagination API reducer

## Container reducer

## Reset reducers

### Basic reset reducers

### Container reset reducer

#### Usage

```js
const itemInitialState = {
    value: null
};

const childReducer = (state = itemInitialState, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

const containerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_ITEM': {
            const { itemId } = action;
            return {
                ...state,
                [itemId]: childReducer(state[itemId], action)
            };
        }
        default:
            return state;
    }
};

const resetContainerItemsReducer = Make.reset.container({
    childReducer,
    containerReducer,
    itemInitialState,
    resetItems: {
        // when 'AUTH_LOGOUT' or 'RESET_ITEMS' action types
        // will be dispatched, item with the 'itemA' ID
        // will be reseted to its initial state
        itemA: ['AUTH_LOGOUT', 'RESET_ITEMS']
    }
});
```
