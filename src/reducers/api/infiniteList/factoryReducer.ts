import { createReducer } from '@reduxjs/toolkit';
import type { AnyAction } from '@reduxjs/toolkit';

import { config, undefinedActionTypesWarning } from '../../../config';
import type { InfiniteListApiCustomParams } from '../../../config';

import makeBasicApiReducer from '../basic/factoryReducer';
import {
    actionFilters as basicApiReducerActionFilters,
    actionTypes as basicApiReducerActionTypes,
} from '../basic/config';

const getParams = (
    customParams: InfiniteListApiCustomParams = {} as InfiniteListApiCustomParams,
): Required<InfiniteListApiCustomParams> => {
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
 */
export default function makeInfiniteListApiReducer(customParams: InfiniteListApiCustomParams) {
    const { actionTypes: types, initialState, selectors, actionFilters } = getParams(customParams);

    const basicApiReducer = makeBasicApiReducer({
        initialState,
        actionFilters,
        actionTypes: types,
    });

    const infiniteListApiReducer = createReducer(initialState, builder => {
        builder
            .addCase(types.SUCCESS, (state, action: AnyAction) => {
                const currentCount = selectors.currentCount(action);
                const totalCount = selectors.totalCount(action);

                basicApiReducer(state, action);

                state.totalCount = totalCount;
                state.totalOffset = state.totalOffset + currentCount;
                state.hasMore = currentCount >= state.payloadSize;
            })
            .addMatcher(
                action => [types.REQUEST, types.CANCEL, types.FAILURE, types.RESET, types.UPDATE].includes(action.type),
                (state, action) => basicApiReducer(state, action),
            );
    });

    return infiniteListApiReducer;
}
