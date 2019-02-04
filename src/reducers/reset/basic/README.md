# Basic reset reducer

## `reset.basic(reducer, actionTypes): reducer`

Purpose of this reducer is reset provided reducer to its initial state if corresponding action is dispatched.

---

### Parameters

-   `reducer: Function` - required
-   `actionTypes: String|Array` - required. Action type or array of action types. If any of them is dispatched the reducer will be reseted to its initial state.

#### Example

```js
import { reducers } from '@ackee/redux-utils';

const initialState = {
    value: 0,
};

function counterReducer(state = initialState, action) {
    // ...
}

// When the `COUNTER_RESET` is dispatched, counterReducer will be reseted to its initial state
export default reducers.reset.basic(counterReducer, 'COUNTER_RESET');
```

---

## Continue to [Container reset reducer](/src/reducers/reset/container/README.md)
