const templates = {
    REQUEST: type => params => ({
        type,
        payload: {
            ...params,
        },
    }),

    SUCCESS: type => (payload, meta) => ({
        type,
        meta: {
            lastSuccessAt: Date.now(),
            ...meta,
        },
        payload,
    }),

    FAILURE: type => error => ({ type, error }),
    CANCEL: type => () => ({ type }),
    RESET: type => () => ({ type }),
};

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

export const convertTypeToActionName = type => {
    const unprefixed = type.slice(type.indexOf('/') + 1).toLowerCase();
    const parts = unprefixed.split('_');
    return parts.slice(1).reduce((name, part) => name + capitalizeFirstLetter(part), parts[0]);
};

/**
 * Generates Redux action creators for given action types
 * @param {Array.<String>} types Redux action types
 * @returns {Object} generated action creators
 */
const createRequestActions = types => {
    return Object.values(types).reduce((actions, type) => {
        const name = convertTypeToActionName(type);
        const suffix = type.slice(type.lastIndexOf('_') + 1);

        actions[name] = templates[suffix](type);
        return actions;
    }, {});
};

export default createRequestActions;
