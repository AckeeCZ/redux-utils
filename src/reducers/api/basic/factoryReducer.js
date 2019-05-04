import { config, undefinedActionTypesWarning } from 'Config';

import * as Config from './config';

const getParams = (customParams = {}) => {
    if (!customParams.actionTypes) {
        config.logger.warn(undefinedActionTypesWarning('basicApiReducer', customParams));
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
        actionFilters: {
            ...Config.actionFilters,
            ...customParams.actionFilters,
        },
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
                };

            case types.CANCEL:
                return {
                    ...state,
                    inProgress: false,
                    cancelled: true,
                };

            case types.SUCCESS:
                return {
                    ...state,
                    inProgress: false,
                    success: true,
                };

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
