import type { AnyAction } from '@reduxjs/toolkit';

export interface ApiState {
    error?: string | object;
    inProgress?: boolean;
    cancelled?: boolean;
    success?: boolean;
    lastSuccessAt?: string | null;
}

export interface InfiniteReducerState extends ApiState {
    hasMore?: boolean;
    totalOffset?: number;
    payloadSize?: number;
}

export interface PaginationReducerState extends ApiState {
    hasMore?: boolean;
    page?: number;
    amount?: number;
    totalCount?: number;
    limit?: number;
}

/* export interface Action {
    type?: string;
    meta?: any;
    payload?: any;
    error?: any;
} */


export interface ApiCustomParams<State = ApiState> {
    actionTypes?: {
        REQUEST?: string;
        CANCEL?: string;
        SUCCESS?: string;
        FAILURE?: string;
        RESET?: string;
        UPDATE?: string;
    };
    initialState?: State;
    actionFilters?: {
        update?: (action: AnyAction) => boolean;
    };
}

export interface InfiniteListCustomParams extends ApiCustomParams {
    
}