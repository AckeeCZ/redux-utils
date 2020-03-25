export default {
    REQUEST: type => params => ({
        type,
        payload: {
            ...params,
        },
    }),
    SUCCESS: type => (payload, meta) => ({ type, meta, payload }),
    FAILURE: type => error => ({ type, error }),
    CANCEL: type => () => ({ type }),
    RESET: type => () => ({ type }),
};
