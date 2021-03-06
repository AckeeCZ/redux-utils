import { config, undefinedActionTypesWarning } from 'Config';

import makeBasicApiReducer from '../basic/factoryReducer';
import {
    actionFilters as basicApiReducerActionFilters,
    actionTypes as basicApiReducerActionTypes,
} from '../basic/config';

const getParams = (customParams = {}) => {
    if (!customParams.actionTypes) {
        config.logger.warn(undefinedActionTypesWarning('infiniteListApiReducer', customParams));
    }

    return {
        initialState: Object.freeze({
            ...config.infiniteListApiReducer.initialState,
            ...customParams.initialState,
        }),
        actionTypes: {
            ...basicApiReducerActionTypes,
            ...customParams.actionTypes,
        },
        selectors: {
            ...config.infiniteListApiReducer.selectors,
            ...customParams.selectors,
        },
        actionFilters: {
            ...basicApiReducerActionFilters,
            ...customParams.actionFilters,
        },
    };
};

/**
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/infiniteListApiReducer.md
 * 
 * @param {object} params 
    * @param {object} params.actionTypes 
        * @param {(string | undefined)} params.actionTypes.REQUEST
        * @param {(string | undefined)} params.actionTypes.CANCEL
        * @param {(string | undefined)} params.actionTypes.SUCCESS
        * @param {(string | undefined)} params.actionTypes.FAILURE
        * @param {(string | undefined)} params.actionTypes.RESET
        * @param {(string | undefined)} params.actionTypes.UPDATE

    * @param {object} [params.initialState]
        * @param {boolean} params.initialState.inProgress
        * @param {any} params.initialState.error
        * @param {boolean} params.initialState.success
        * @param {boolean} params.initialState.cancelled
        * @param {(number | null)} params.initialState.lastSuccessAt
        * @param {boolean} params.initialState.hasMore
        * @param {number} params.initialState.payloadSize
        * @param {number} params.initialState.totalOffset
        
     * @param {object} [params.selectors]
        * @param {(action: object) => number} [params.selectors.currentCount]
        
    * @param {object} [params.actionFilters]
        * @param {(action: object) => boolean} [params.actionFilters.update]

 * @returns {(state: object, action: object) => object}
 */
export default function makeInfiniteListApiReducer(params) {
    const { actionTypes: types, initialState, selectors, options, actionFilters } = getParams(params);

    const basicApiReducer = makeBasicApiReducer({
        actionTypes: types,
        initialState,
        options,
        actionFilters,
    });

    function infiniteListApiReducer(state = initialState, action) {
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
                const currentCount = selectors.currentCount(action);
                const totalCount = selectors.totalCount(action);

                return {
                    ...state,
                    ...basicApiReducer(state, action),
                    totalOffset: state.totalOffset + currentCount,
                    hasMore: currentCount >= state.payloadSize,
                    totalCount,
                };
            }

            default:
                return state;
        }
    }

    infiniteListApiReducer.INITIAL_STATE = initialState;

    return infiniteListApiReducer;
}
