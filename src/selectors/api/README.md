# API Selectors

Selectors for the [basic API reducer](/src/reducers/api/basic/README.md) and for the [pagination API reducer](/src/reducers/api/pagination/README.md).

## Table of contents

-   [`api`](#api-selector)
-   [`apiPagination`](#api-pagination-selector)

---

### <a name="api-selector"></a>`api(state, entityKey, typeId?, itemId?)`

#### Parameters:

-   `state: Object` - Redux state
-   `entityKey: String` - Entity name (e.g. 'users', 'user').
-   `typeId?: String` - API type ID (e.g. 'fetch', 'delete')
-   `itemId?: String` - entity item ID (e.g. 'userId', 'postId')

#### Valid use-cases:

```js
ReduxUtils.selectors.api(state, 'users');

ReduxUtils.selectors.api(state, 'users', 'create');

ReduxUtils.selectors.api(state, 'users', 'fetch', 1);
```

### <a name="api-pagination-selector"></a>`apiPagination(state, entityKey, typeId, itemId?)`

Identical to the `api` selector above, but it additionally returns `offset` property: `offset = (page - 1) * amount`.

#### Parameters:

-   `state: Object` - Redux state
-   `entityKey: String` - Entity name (e.g. 'users', 'user').
-   `typeId: String` - API type ID (e.g. 'fetch', 'delete')
-   `itemId?: String` - entity item ID (e.g. 'userId', 'postId')

#### Valid use-cases:

```js
ReduxUtils.selectors.apiPagination(state, 'user', 'create');

ReduxUtils.selectors.apiPagination(state, 'users', 'fetch', 1);
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
