import { createAction } from '@reduxjs/toolkit';

export interface ApiActionTypes {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    CANCEL?: string;
    RESET?: string;
}

export const createApiRequestActions = <RP = any, SP = any, SM = any | undefined, E = Error | string | object>(
    types: ApiActionTypes,
) => ({
    request: createAction(types.REQUEST, (payload: RP) => ({
        payload,
    })),
    success: createAction(types.SUCCESS, (payload: SP, meta?: SM) => ({
        payload,
        meta,
    })),
    failure: createAction(types.FAILURE, (error: E) => ({
        error,
        payload: undefined,
    })),
    cancel: types.CANCEL ? createAction(types.CANCEL) : undefined,
    reset: types.RESET ? createAction(types.RESET) : undefined,
});

export const createApiDetailRequestActions = <
    Id = string | number,
    RP = any,
    SP = any,
    SM = any | undefined,
    E = Error | string | object
>(
    types: ApiActionTypes,
) => ({
    request: createAction(types.REQUEST, (id: Id, payload: RP) => ({
        payload,
        meta: {
            id,
        },
    })),
    success: createAction(types.SUCCESS, (id: Id, payload: SP, meta?: SM) => ({
        payload,
        meta: {
            ...meta,
            id,
        },
    })),
    failure: createAction(types.FAILURE, (id: Id, error: E) => ({
        error,
        payload: undefined,
        meta: {
            id,
        },
    })),
    cancel: types.CANCEL
        ? createAction(types.CANCEL, (id: Id) => ({
              payload: undefined,
              meta: {
                  id,
              },
          }))
        : undefined,
    reset: types.RESET
        ? createAction(types.RESET, (id: Id) => ({
              payload: undefined,
              meta: {
                  id,
              },
          }))
        : undefined,
});
