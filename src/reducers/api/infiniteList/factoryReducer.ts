import { config, InfiniteReducerState, Action, undefinedActionTypesWarning } from '../../../config';
import { CustomParams } from '../../types';

import makeBasicApiReducer from '../basic';
import {
    actionFilters as basicApiReducerActionFilters,
    actionTypes as basicApiReducerActionTypes,
} from '../basic/config';

const getParams = (customParams: CustomParams = {}) => {
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

export default function makeInfiniteListApiReducer(customParams: CustomParams) {
    const { actionTypes: types, initialState, selectors, options, actionFilters }: CustomParams = getParams(
        customParams,
    );

    const basicApiReducer = makeBasicApiReducer({
        initialState,
        options,
        actionFilters,
        actionTypes: types,
    });

    function infiniteListApiReducer(state: InfiniteReducerState = initialState, action: Action) {
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
