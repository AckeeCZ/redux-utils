/*
    Usage:

    const actionTypes = createTypes({
        types: ['REQUEST', 'SUCCESS', 'FAILURE'],
        typePrefix: 'FETCH_POSTS_'
    });

    ...

    export const fetchPostsRequest = () => ({
        type: actionTypes.FETCH_POSTS_REQUEST
    });
 */

const DEFAULT_TYPES = ['REQUEST', 'SUCCESS', 'FAILURE', 'CANCEL', 'RESET'];

export function asyncType(params = {}) {
    const { types, typePrefix, modulePrefix } = {
        typePrefix: '',
        modulePrefix: '',
        ...params,
        types: params.types || DEFAULT_TYPES,
    };
    const actionTypes = {};

    types.forEach(type => {
        const prefixedType = `${typePrefix}${type}`;

        actionTypes[prefixedType] = modulePrefix ? `${modulePrefix}/${prefixedType}` : prefixedType;
    });

    return Object.freeze(actionTypes);
}

export function createAsyncType({ modulePrefix, defaultTypes }) {
    return params =>
        asyncType({
            types: defaultTypes,
            ...params,
            modulePrefix,
        });
}
