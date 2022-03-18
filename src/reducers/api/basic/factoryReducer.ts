import { createReducer } from '@reduxjs/toolkit';
import type { AnyAction } from '@reduxjs/toolkit';

import { config, undefinedActionTypesWarning } from '../../../config';
import type { ApiCustomParams } from '../../../config';
import * as Config from './config';
import { createMaybeBuilder } from '../utils/createMaybeBuilder';

const getParams = (customParams: ApiCustomParams = {} as ApiCustomParams): ApiCustomParams => {
    if (!customParams.actionTypes) {
        config.logger.warn(undefinedActionTypesWarning('basicApiReducer', customParams));
    }

    return {
        initialState: Object.freeze<ApiCustomParams['initialState']>({
            ...config.basicApiReducer.initialState,
            ...customParams.initialState,
        }),
        actionTypes: Object.freeze<Required<ApiCustomParams['actionTypes']>>({
            ...Config.actionTypes,
            ...customParams.actionTypes,
        }),
        actionFilters: Object.freeze<Required<ApiCustomParams['actionFilters']>>({
            ...Config.actionFilters,
            ...customParams.actionFilters,
        }),
    };
};

/**
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/basicApiReducer.md
 */
export default function makeBasicApiReducer(customParams: ApiCustomParams) {
    const { actionTypes: types, initialState, actionFilters } = getParams(customParams);

    const basicApiReducer = createReducer(initialState, builder => {
        const maybeBuilder = createMaybeBuilder(builder);

        maybeBuilder
            .addCase(types.REQUEST, state => {
                state.error = initialState.error;
                state.inProgress = true;
                state.cancelled = false;
                state.success = false;
            })
            .addCase(types.CANCEL, state => {
                state.inProgress = false;
                state.cancelled = true;
            })
            .addCase(types.SUCCESS, (state, action: AnyAction) => {
                const { lastSuccessAt = initialState.lastSuccessAt } = action.meta || {};

                state.lastSuccessAt = lastSuccessAt;
                state.inProgress = false;
                state.success = true;
            })
            .addCase(types.FAILURE, (state, action: AnyAction) => {
                const { error = initialState.error } = action;

                state.error = error;
                state.inProgress = false;
            })
            .addCase(types.RESET, () => initialState)
            .addCase(types.UPDATE, (state, action: AnyAction) => {
                return actionFilters.update(action)
                    ? {
                          ...state,
                          ...action.payload,
                      }
                    : state;
            });
    });

    return basicApiReducer;
}
