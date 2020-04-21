export const list = {
    REQUEST: type => (params = {}) => ({
        type,
        payload: params,
    }),
    SUCCESS: type => (payload, meta = {}) => ({ type, meta, payload }),
    FAILURE: type => error => ({ type, error }),
    CANCEL: type => () => ({ type }),
    RESET: type => () => ({ type }),
};

export const detail = {
    REQUEST: type => (id, params = {}) => ({
        type,
        meta: { id },
        payload: params,
    }),
    SUCCESS: type => (id, payload, meta) => ({
        type,
        meta: { id, ...meta },
        payload,
    }),
    FAILURE: type => (id, error) => ({ type, meta: { id }, error }),
    CANCEL: type => id => ({ type, meta: { id } }),
    RESET: type => id => ({ type, meta: { id } }),
};
