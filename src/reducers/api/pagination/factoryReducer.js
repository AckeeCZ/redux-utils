import * as Consts from '../../../constants';
import makeBasicApiReducer from '../basic';
import * as Config from './config';

const getParams = (customParams = {}) => {
    const options = {
        ...Config.options,
        ...customParams.options,
    };

    if (options.logging && !customParams.actionTypes) {
        const { PAGINATION } = Consts.types;
        // eslint-disable-next-line
        console.warn(Consts.warnings.undefinedActionTypes(PAGINATION, customParams));
    }

    return {
        initialState: Object.freeze({
            ...Config.initialState,
            ...customParams.initialState,
        }),
        actionTypes: {
            ...Config.actionTypes,
            ...customParams.actionTypes,
        },
        selectors: {
            ...Config.selectors,
            ...customParams.selectors,
        },
        options,
    };
};

export default function makePaginationApiReducer(customParams) {
    const { actionTypes: types, initialState, selectors, options } = getParams(customParams);

    const basicApiReducer = makeBasicApiReducer({
        actionTypes: types,
        initialState,
        options,
    });

    function paginationApiReducer(state = initialState, action) {
        switch (action.type) {
            case types.REQUEST:
            case types.INVALIDATE:
            case types.FAILURE:
            case types.RESET:
                return {
                    ...state,
                    ...basicApiReducer(state, action),
                };

            case types.SUCCESS: {
                const totalCount = selectors.totalCount(action);
                const currentCount = selectors.currentCount(action);
                const hasMoreItems = currentCount >= state.pageSize;

                return {
                    ...state,
                    ...basicApiReducer(state, action),
                    page: hasMoreItems ? state.page + 1 : state.page,
                    hasMoreItems,
                    totalCount,
                };
            }

            default:
                return state;
        }
    }

    paginationApiReducer.getInitialState = () => initialState;

    return paginationApiReducer;
}
