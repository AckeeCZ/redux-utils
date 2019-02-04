import { logger } from '../../../config';
import * as Consts from '../../../constants';

import makeBasicApiReducer from '../basic';

import * as Config from './config';

const getParams = (customParams = {}) => {
    const options = {
        ...Config.options,
        ...customParams.options,
    };

    if (options.logging && !customParams.actionTypes) {
        logger.warn(Consts.warnings.undefinedActionTypes(Consts.types.PAGINATION, customParams));
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
                const hasMore = currentCount >= state.amount;

                return {
                    ...state,
                    ...basicApiReducer(state, action),
                    page: hasMore ? state.page + 1 : state.page,
                    hasMore,
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
