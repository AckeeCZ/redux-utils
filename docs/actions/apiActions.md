# `createApiRequestActions`

Creates action creators and types to reflect an API request with `createAction` utility from `@reduxjs/toolkit`.

```ts
type RequestPayload = {
    page: number;
    limit: number;
};

const fetchUsers = createApiActions<'FETCH_USERS', RequestPayload>('FETCH_USERS');

// a)
dispatch(fetchUser.request({ page: 1, limit: 10 }));

// b) The `action` will be type of `fetchUsers.request`:
createReducer(fetchUser.request, (state, action) => {
    // ...
});

// c) Pass `types` directly to an api reducer without additional mapping:
basicApiReducer({
    actionTypes: fetchUsers.types,
});
```

See [implementation](../../src/actions/apiActions.ts) for more details.
