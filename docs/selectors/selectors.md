# API Selectors

Selectors for the [basic API reducer](../reducers/basicApiReducer.md) and for the [pagination API reducer](../reducers/paginationApiReducer.md).

## Table of contents

-   [`apiSelector`](#api-selector)
-   [`paginationApiSelector`](#api-pagination-selector)

---

### <a name="apiSelector"></a>`apiSelector(state, entityKey, typeId?, itemId?)`

#### Parameters:

-   `state: Object` - Redux state
-   `entityKey: String` - Entity name (e.g. 'users', 'user').
-   `typeId?: String` - API type ID (e.g. 'fetch', 'delete')
-   `itemId?: String` - entity item ID (e.g. 'userId', 'postId')

#### Valid use-cases:

```js
import { apiSelector } from '@ackee/redux-utils';

apiSelector(state, 'users');

apiSelector(state, 'users', 'create');

apiSelector(state, 'users', 'fetch', 1);
```

### <a name="paginationApiSelector"></a>`paginationApiSelector(state, entityKey, typeId, itemId?)`

Identical to the `api` selector above, but it additionally returns `offset` property: `offset = (page - 1) * amount`.

#### Parameters:

-   `state: Object` - Redux state
-   `entityKey: String` - Entity name (e.g. 'users', 'user').
-   `typeId: String` - API type ID (e.g. 'fetch', 'delete')
-   `itemId?: String` - entity item ID (e.g. 'userId', 'postId')

#### Valid use-cases:

```js
import { paginationApiSelector } from '@ackee/redux-utils';

paginationApiSelector(state, 'user', 'create');

paginationApiSelector(state, 'users', 'fetch', 1);
```

---

## State structure

**These selectors are defined for following Redux state structures:**

### State Template:

```js
const state = {
    api: {
        [entityKey]: {
            [typeIdA]: {},
            [typeIdB]: {
                [itemId]: {},
                placeholder: {},
            },
        },
    },
};
```

### State Example:

```js
const state = {
    api: {
        // entity keys:
        users: {
            // type IDs:
            create: {
                inProgress: false,
                // ...
            },
            fetch: {
                // item IDs:
                userId1: {
                    inProgress: true,
                    // ...
                },
                placeholder: {
                    inProgress: false,
                    // ...
                },
            },
        },
    },
};
```
