// @ts-nocheck
import { config, undefinedActionTypesWarning } from 'Config';

import makeBasicApiReducer from '../basic';
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

export default function makeInfiniteListApiReducer(customParams) {
    const { actionTypes: types, initialState, selectors, options, actionFilters } = getParams(customParams);

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

                return {
                    ...state,
                    ...basicApiReducer(state, action),
                    totalOffset: state.totalOffset + currentCount,
                    hasMore: currentCount >= state.payloadSize,
                };
            }

            default:
                return state;
        }
    }

    infiniteListApiReducer.INITIAL_STATE = initialState;

    return infiniteListApiReducer;
}
