export const list = {
    REQUEST: (type: string) => (params = {}) => ({
        type,
        payload: params,
    }),
    SUCCESS: (type: string) => <T>(payload: T, meta: object = {}) => ({ type, meta, payload }),
    FAILURE: (type: string) => <T>(error: T) => ({ type, error }),
    CANCEL: (type: string) => () => ({ type }),
    RESET: (type: string) => () => ({ type }),
};

export const detail = {
    REQUEST: (type: string) => (id: number | string, params: any = {}) => ({
        type,
        meta: { id },
        payload: params,
    }),
    SUCCESS: (type: string) => <T>(id: number | string, payload: T, meta: object) => ({
        type,
        payload,
        meta: { id, ...meta },
    }),
    FAILURE: (type: string) => <T>(id: number | string, error: T) => ({ type, error, meta: { id } }),
    CANCEL: (type: string) => (id: number | string) => ({ type, meta: { id } }),
    RESET: (type: string) => (id: number | string) => ({ type, meta: { id } }),
};
