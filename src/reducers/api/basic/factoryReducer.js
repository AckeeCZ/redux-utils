import { logger } from '../../../config';
import * as Consts from '../../../constants';

import * as Config from './config';

const getParams = (customParams = {}) => {
    const options = {
        ...Config.options.logging,
        ...customParams.options,
    };

    if (options.logging && !customParams.actionTypes) {
        logger.warn(Consts.warnings.undefinedActionTypes(Consts.types.BASIC, customParams));
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
        options,
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
                    isFetching: true,
                    didInvalidate: false,
                    success: false,
                };

            case types.INVALIDATE:
                return {
                    ...state,
                    isFetching: false,
                    didInvalidate: true,
                };

            case types.SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    success: true,
                };

            case types.FAILURE: {
                const { error = initialState.error } = action;

                return {
                    ...state,
                    isFetching: false,
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
