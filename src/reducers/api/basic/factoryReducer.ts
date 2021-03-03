// @ts-nocheck
/* tslint:disable */
import { config, undefinedActionTypesWarning } from 'Config';

import * as Config from './config';

const getParams = (customParams = {}) => {
    if (!customParams.actionTypes) {
        config.logger.warn(undefinedActionTypesWarning('basicApiReducer', customParams));
    }

    return {
        initialState: Object.freeze({
            ...config.basicApiReducer.initialState,
            ...customParams.initialState,
        }),
        actionTypes: Object.freeze({
            ...Config.actionTypes,
            ...customParams.actionTypes,
        }),
        actionFilters: Object.freeze({
            ...Config.actionFilters,
            ...customParams.actionFilters,
        }),
    };
};

export default function makeBasicApiReducer(customParams) {
    const { actionTypes: types, initialState, actionFilters } = getParams(customParams);

    function basicApiReducer(state = initialState, action) {
        switch (action.type) {
            case types.REQUEST:
                return {
                    ...state,
                    error: initialState.error,
                    inProgress: true,
                    cancelled: false,
                    success: false,
                    lastSuccessAt: null,
                };

            case types.CANCEL:
                return {
                    ...state,
                    inProgress: false,
                    cancelled: true,
                };

            case types.SUCCESS: {
                const { lastSuccessAt = initialState.lastSuccessAt } = action.meta || {};

                return {
                    ...state,
                    inProgress: false,
                    success: true,
                    lastSuccessAt,
                };
            }

            case types.FAILURE: {
                const { error = initialState.error } = action;

                return {
                    ...state,
                    inProgress: false,
                    error,
                };
            }

            case types.RESET:
                return initialState;

            case types.UPDATE: {
                if (actionFilters.update(action)) {
                    return {
                        ...state,
                        ...action.payload,
                    };
                }

                return state;
            }

            default:
                return state;
        }
    }

    basicApiReducer.INITIAL_STATE = initialState;

    return basicApiReducer;
}
