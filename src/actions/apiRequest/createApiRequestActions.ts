import { createAction } from '@reduxjs/toolkit';

interface ApiActionTypes {
    REQUEST: string;
    SUCCESS: string;
    FAILURE: string;
    CANCEL?: string;
    RESET?: string;
}

export const createApiRequestActions = (types: ApiActionTypes) => ({
    request: createAction(types.REQUEST, (payload: any) => ({
        payload,
    })),
    success: createAction(types.SUCCESS, (payload: any, meta?: any) => ({
        payload,
        meta,
    })),
    failure: createAction(types.FAILURE, (error: Error | string | object) => ({
        error,
        payload: undefined,
    })),
    cancel: types.CANCEL ? createAction(types.CANCEL) : undefined,
    reset: types.RESET ? createAction(types.RESET) : undefined,
});

export const createApiDetailRequestActions = <Id>(types: ApiActionTypes) => ({
    request: createAction(types.REQUEST, (id: Id, payload: any) => ({
        payload,
        meta: {
            id,
        },
    })),
    success: createAction(types.SUCCESS, (id: Id, payload: any, meta?: any) => ({
        payload,
        meta: {
            ...meta,
            id,
        },
    })),
    failure: createAction(types.FAILURE, (id: Id, error: Error | string | object) => ({
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
