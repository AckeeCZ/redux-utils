export const list = {
    REQUEST:
        (type: string) =>
        (params = {}) => ({
            type,
            payload: params,
        }),
    SUCCESS:
        (type: string) =>
        <T extends object>(payload: T, meta: object = {}) => ({ type, meta, payload }),
    FAILURE:
        (type: string) =>
        <T extends any>(error: T) => ({ type, error }),
    CANCEL: (type: string) => () => ({ type }),
    RESET: (type: string) => () => ({ type }),
};

export const detail = {
    REQUEST:
        (type: string) =>
        (id: number | string, params: any = {}) => ({
            type,
            meta: { id },
            payload: params,
        }),
    SUCCESS:
        (type: string) =>
        <T, M extends object>(id: number | string, payload: T, meta: M) => ({
            type,
            payload,
            meta: { id, ...meta },
        }),
    FAILURE:
        (type: string) =>
        <T extends any>(id: number | string, error: T) => ({ type, error, meta: { id } }),
    CANCEL: (type: string) => (id: number | string) => ({ type, meta: { id } }),
    RESET: (type: string) => (id: number | string) => ({ type, meta: { id } }),
};
