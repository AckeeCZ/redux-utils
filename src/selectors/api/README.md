# API Selectors

Selectors for the [basic API reducer](/src/reducers/api/basic/README.md) and for the [pagination API reducer](/src/reducers/api/pagination/README.md).

## Table of contents

-   [`apiSelector`](#api-selector)
-   [`apiPaginationSelector`](#api-pagination-selector)

---

### <a name="api-selector"></a>`apiSelector(state, entityKey, typeId?, itemId?)`

#### Parameters:

-   `state: Object` - Redux state
-   `entityKey: String` - Entity name (e.g. 'users', 'user').
-   `typeId?: String` - API type ID (e.g. 'fetch', 'delete')
-   `itemId?: String` - entity item ID (e.g. 'userId', 'postId')

#### Valid use-cases:

```js
apiSelector(state, 'users');

apiSelector(state, 'users', 'create');

apiSelector(state, 'users', 'fetch', 1);
```

### <a name="api-pagination-selector"></a>`apiPaginationSelector(state, entityKey, typeId, itemId?)`

Identical to the `apiSelector` selector above, but it additionally returns `offset` property: `offset = (page - 1) * amount`.

#### Parameters:

-   `state: Object` - Redux state
-   `entityKey: String` - Entity name (e.g. 'users', 'user').
-   `typeId: String` - API type ID (e.g. 'fetch', 'delete')
-   `itemId?: String` - entity item ID (e.g. 'userId', 'postId')

#### Valid use-cases:

```js
apiPaginationSelector(state, 'user', 'create');

apiPaginationSelector(state, 'users', 'fetch', 1);
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
                isFetching: false,
                // ...
            },
            fetch: {
                // item IDs:
                userId1: {
                    isFetching: true,
                    // ...
                },
                placeholder: {
                    isFetching: false,
                    // ...
                },
            },
        },
    },
};
```
