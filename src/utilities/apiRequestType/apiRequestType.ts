interface RequestTypeParams<TP, MP, T extends readonly string[]> {
    types?: T;
    typePrefix?: TP;
    modulePrefix?: MP;
}

/*
    Usage:

    const actionTypes = apiRequestType({
        types: ['REQUEST', 'SUCCESS', 'FAILURE'],
        typePrefix: 'FETCH_POSTS_'
    });

    ...

    export const fetchPostsRequest = () => ({
        type: actionTypes.FETCH_POSTS_REQUEST
    });
 */

const DEFAULT_TYPES = ['REQUEST', 'SUCCESS', 'FAILURE', 'CANCEL', 'RESET'] as const;

export function apiRequestType<
    TP extends string = '',
    MP extends string = '',
    T extends readonly string[] = typeof DEFAULT_TYPES,
>(params: RequestTypeParams<TP, MP, T> = {}) {
    const { types, typePrefix, modulePrefix } = {
        typePrefix: '' as const,
        modulePrefix: '' as const,
        ...params,
        types: params.types ?? DEFAULT_TYPES,
    };

    type Item = T[number];
    type ActionTypes = { [K in Item as `${TP}${K}`]: MP extends '' ? K : `${MP}/${K}` };

    const actionTypes = {} as ActionTypes;

    types.forEach(type => {
        const prefixedType = `${typePrefix}${type}`;

        actionTypes[prefixedType] = modulePrefix ? `${modulePrefix}/${prefixedType}` : prefixedType;
    });

    return Object.freeze<ActionTypes>(actionTypes);
}

export function createApiRequestType<MP extends string, DT extends readonly string[] = typeof DEFAULT_TYPES>({
    modulePrefix,
    defaultTypes,
}: { modulePrefix?: MP; defaultTypes?: DT } = {}) {
    return function apiRequestTypeFactory<TP extends string, T extends readonly string[] = DT>(
        params: Omit<RequestTypeParams<TP, MP, T>, 'modulePrefix'>,
    ) {
        return apiRequestType({
            types: defaultTypes,
            ...params,
            modulePrefix,
        });
    };
}
