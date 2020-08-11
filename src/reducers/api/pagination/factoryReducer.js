import { config, undefinedActionTypesWarning } from 'Config';

import makeBasicApiReducer from '../basic';

import * as Config from './config';

const getParams = (customParams = {}) => {
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

/**
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/paginationApiReducer.md
 * 
 * @param {object} params 
    * @param {object} params.actionTypes 
        * @param {(string | undefined)} params.actionTypes.REQUEST
        * @param {(string | undefined)} params.actionTypes.CANCEL
        * @param {(string | undefined)} params.actionTypes.SUCCESS
        * @param {(string | undefined)} params.actionTypes.FAILURE
        * @param {(string | undefined)} params.actionTypes.RESET
        * @param {(string | undefined)} params.actionTypes.UPDATE
        * @param {(string | undefined)} params.actionTypes.SET_PAGE

    * @param {object} [params.initialState]
        * @param {boolean} params.initialState.inProgress
        * @param {any} params.initialState.error
        * @param {boolean} params.initialState.success
        * @param {boolean} params.initialState.cancelled
        * @param {(number | null)} params.initialState.lastSuccessAt
        * @param {boolean} params.initialState.hasMore
        * @param {number} params.initialState.page
        * @param {number} params.initialState.amount
        * @param {number} params.initialState.totalCount
        * @param {number} params.initialState.limit
        
     * @param {object} [params.selectors]
        * @param {(action: object) => number} [params.selectors.totalCount]
        * @param {(action: object) => number} [params.selectors.currentCount]
        * @param {(action: object) => boolean} [params.selectors.hasMore]
        
    * @param {object} [params.actionFilters]
        * @param {(action: object) => boolean} [params.actionFilters.update]
        * @param {(action: object) => boolean} [params.actionFilters.update]

 * @returns {(state: object, action: object) => object}
 */
export default function makePaginationApiReducer(params) {
    const { actionTypes: types, initialState, selectors, options, actionFilters } = getParams(params);

    const basicApiReducer = makeBasicApiReducer({
        actionTypes: types,
        initialState,
        options,
        actionFilters,
    });

    function paginationApiReducer(state = initialState, action) {
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
                    ...basicApiReducer(state, action),
                    hasMore: hasMore === undefined ? currentCount >= state.limit : hasMore,
                    totalCount,
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
