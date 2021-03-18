export interface ApiReducerState {
    error?: string;
    inProgress?: boolean;
    cancelled?: boolean;
    success?: boolean;
    lastSuccessAt?: string;
    placeholder?: any;
}

export interface InfiniteReducerState extends ApiReducerState {
    hasMore?: boolean;
    totalOffset?: number;
    payloadSize?: number;
}

export interface PaginationReducerState extends ApiReducerState {
    hasMore?: boolean;
    page?: number;
    amount?: number;
    totalCount?: number;
    limit?: number;
}

export interface Action {
    type?: string;
    meta?: any;
    payload?: any;
    error?: any;
}
