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

const DEFAULT_TYPES = ['REQUEST', 'SUCCESS', 'FAILURE'];

export function asyncType(params = {}) {
    const { types, typePrefix, modulePrefix } = {
        types: DEFAULT_TYPES,
        typePrefix: '',
        modulePrefix: '',
        ...params,
    };
    const actionTypes = {};

    types.forEach(type => {
        const prefixedType = `${typePrefix}${type}`;

        actionTypes[prefixedType] = modulePrefix ? `${modulePrefix}/${prefixedType}` : prefixedType;
    });

    return actionTypes;
}

export function moduleAsyncType(modulePrefix) {
    return params =>
        asyncType({
            ...params,
            modulePrefix,
        });
}
