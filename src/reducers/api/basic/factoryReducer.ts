import { config, ApiReducerState, Action, undefinedActionTypesWarning } from '../../../config';
import { CustomParams } from '../../types';
import * as Config from './config';

const getParams = (customParams: CustomParams = {}) => {
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

/**
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/basicApiReducer.md
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
        * @param {number | null} params.initialState.lastSuccessAt

    * @param {object} [params.actionFilters]
        * @param {(action: object) => boolean} [params.actionFilters.update]

 * @returns {(state: object, action: object) => object}
*/
export default function makeBasicApiReducer(customParams: CustomParams) {
    const { actionTypes: types, initialState, actionFilters }: CustomParams = getParams(customParams);

    function basicApiReducer(state: ApiReducerState = initialState, action: Action) {
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

            case types.SUCCESS: {
                const { lastSuccessAt = initialState.lastSuccessAt } = action.meta || {};

                return {
                    ...state,
                    lastSuccessAt,
                    inProgress: false,
                    success: true,
                };
            }

            case types.FAILURE: {
                const { error = initialState.error } = action;

                return {
                    ...state,
                    error,
                    inProgress: false,
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
