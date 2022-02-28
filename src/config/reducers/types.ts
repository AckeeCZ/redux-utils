import type { AnyAction, EntityId, Reducer } from '@reduxjs/toolkit';

export interface ApiState {
    error?: string | object;
    inProgress?: boolean;
    cancelled?: boolean;
    success?: boolean;
    lastSuccessAt?: string | null;
}

export interface InfiniteListApiState extends ApiState {
    hasMore?: boolean;
    totalOffset?: number;
    payloadSize?: number;
    totalCount?: number;
}

export interface PaginationApiState extends ApiState {
    hasMore?: boolean;
    page?: number;
    amount?: number;
    totalCount?: number;
    limit?: number;
}

export interface ActionTypes {
    REQUEST?: string;
    CANCEL?: string;
    SUCCESS?: string;
    FAILURE?: string;
    RESET?: string;
    UPDATE?: string;
}

type ActionFilter = (action: AnyAction) => boolean;

export interface ActionFilters {
    update?: ActionFilter;
}

export interface ApiCustomParams<State = ApiState, AT = ActionTypes> {
    actionTypes: AT;
    initialState?: State;
    actionFilters?: ActionFilters;
}

export interface InfiniteListSelectors {
    currentCount?: (action: AnyAction) => number;
    totalCount?: (action: AnyAction) => number;
}

export interface InfiniteListApiCustomParams<State = InfiniteListApiState> extends ApiCustomParams<State> {
    selectors?: InfiniteListSelectors;
}

export interface PaginationActionTypes extends ActionTypes {
    SET_PAGE?: string;
}

export interface PaginationSelectors extends InfiniteListSelectors {
    hasMore?: (action: AnyAction) => boolean;
}

export interface PaginationActionFilters extends ActionFilters {
    setPage?: ActionFilter;
}

export interface PaginationApiCustomParams<State = PaginationApiState>
    extends ApiCustomParams<State, PaginationActionTypes> {
    selectors?: PaginationSelectors;
    actionFilters?: PaginationActionFilters;
}

export type ContainerState<ChildState> = {
    placeholder?: ChildState;
    [key: string]: ChildState;
};

export interface ContainerCustomParams<State = ApiState> {
    childReducer: Reducer<State>;
    actionTypes: string[];
    options?: {
        ignoreWarnings?: boolean;
        placeholder: boolean;
    };
    selectors?: {
        itemId?: (action: AnyAction) => EntityId | undefined;
    };
    initialState?: ContainerState<State>;
}
