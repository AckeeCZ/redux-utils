import { createAction } from '@reduxjs/toolkit';

/**
 * Creates action creators and types to reflect an API request with `createAction` utility from `@reduxjs/toolkit`.
 * @example
    type RequestPayload = {
        page: number;
        limit: number;
    };

    const fetchUsers = createApiActions<'FETCH_USERS', RequestPayload>('FETCH_USERS');
    
    // a) 
    dispatch(fetchUser.request({ page: 1, limit: 10 }))

    // b) The `action` will be type of `fetchUsers.request`:
    createReducer(fetchUser.request, (state, action) => {
        // ...
    })

    // c) Pass `types` directly to an api reducer without additional mapping:
    basicApiReducer({
        actionTypes: fetchUsers.types,
    })
 */
export function createApiActions<
    TP extends string,
    RequestPayload = any,
    SuccessPayload = any,
    FailurePayload = { error: string },
    ResetPayload = void,
    CancelPayload = void,
>(typePrefix: TP) {
    const types = {
        REQUEST: `${typePrefix}_REQUEST`,
        SUCCESS: `${typePrefix}_SUCCESS`,
        FAILURE: `${typePrefix}_FAILURE`,
        RESET: `${typePrefix}_RESET`,
        CANCEL: `${typePrefix}_CANCEL`,
    } as const;

    type Types = typeof types;

    return {
        types,

        request: createAction<RequestPayload, Types['REQUEST']>(types.REQUEST),
        success: createAction<SuccessPayload, Types['SUCCESS']>(types.SUCCESS),
        failure: createAction<FailurePayload, Types['FAILURE']>(types.FAILURE),
        reset: createAction<ResetPayload, Types['RESET']>(types.RESET),
        cancel: createAction<CancelPayload, Types['CANCEL']>(types.CANCEL),
    } as const;
}
