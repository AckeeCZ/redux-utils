# Typed API request actions utilities

[Redux toolkit](https://redux-toolkit.js.org/api/createAction) inspired utilities with rigid structure and good Typescript support. Uses `createAction` from the toolkit.

> **Disclaimer**: not suitable for actions with custom structure and complex payload

## Exported interface

 - `createApiRequestActions(types: ApiActionTypes)` - for API list requests
 - `createApiDetailRequestActions(types: ApiActionTypes)` - for API detail request

See [implementation](../../src/actions/apiRequest/createApiRequestActions.ts) for more details.

## Example usage

1. Define request action types object of type `ApiActionTypes`.
2. Use one of the utilities above to create object of predefined actions.

```ts
type UserRole = 'regular' | 'admin';

type User = {
    id: number;
    name: string;
    role: UserRole;
};

const types: ApiActionTypes = {
    REQUEST: 'FETCH_USERS_REQUEST',
    SUCCESS: 'FETCH_USERS_SUCCESS',
    FAILURE: 'FETCH_USERS_FAILURE',
}

const fetchUsersActions = createApiRequestActions<{ role?: UserRole }, User[], never, string>(); 
```
