import { config, PaginationReducerState, Action, undefinedActionTypesWarning } from '../../../config';
import { CustomParams } from '../../types';

import makeBasicApiReducer from '../basic';

import * as Config from './config';

const getParams = (customParams: CustomParams = {}) => {
    if (!customParams.actionTypes) {
        config.logger.warn(undefinedActionTypesWarning('paginationApiReducer', customParams));
    }

    return {
        initialState: Object.freeze({
            ...config.paginationApiReducer.initialState,
            ...customParams.initialState,
        }),
        actionTypes: {
            ...Config.actionTypes,
            ...customParams.actionTypes,
        },
        selectors: {
            ...config.paginationApiReducer.selectors,
            ...customParams.selectors,
        },
        actionFilters: {
            ...Config.actionFilters,
            ...customParams.actionFilters,
        },
    };
};

export default function makePaginationApiReducer(customParams: CustomParams) {
    const { actionTypes: types, initialState, selectors, options, actionFilters }: CustomParams = getParams(
        customParams,
    );

    const basicApiReducer = makeBasicApiReducer({
        initialState,
        options,
        actionFilters,
        actionTypes: types,
    });

    function paginationApiReducer(state: PaginationReducerState = initialState, action: Action) {
        switch (action.type) {
            case types.REQUEST:
            case types.CANCEL:
            case types.FAILURE:
            case types.RESET:
            case types.UPDATE:
                return {
                    ...state,
                    ...basicApiReducer(state, action),
                };

            case types.SUCCESS: {
                const totalCount = selectors.totalCount(action);
                const currentCount = selectors.currentCount(action);
                const hasMore = selectors.hasMore(action);

                return {
                    ...state,
                    totalCount,
                    ...basicApiReducer(state, action),
                    hasMore: hasMore === undefined ? currentCount >= state.limit : hasMore,
                };
            }

            case types.SET_PAGE: {
                if (actionFilters.setPage(action)) {
                    const { page } = action.payload;

                    return {
                        ...state,
                        page,
                    };
                }

                return state;
            }

            default:
                return state;
        }
    }

    paginationApiReducer.INITIAL_STATE = initialState;

    return paginationApiReducer;
}
