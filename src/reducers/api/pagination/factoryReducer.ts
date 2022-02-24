import { AnyAction, createReducer } from '@reduxjs/toolkit';

import { config, undefinedActionTypesWarning } from '../../../config';
import type { PaginationApiCustomParams } from '../../../config';

import makeBasicApiReducer from '../basic/factoryReducer';

import * as Config from './config';

const getParams = (
    customParams: PaginationApiCustomParams = {} as PaginationApiCustomParams,
): PaginationApiCustomParams => {
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
 */
export default function makePaginationApiReducer(customParams: PaginationApiCustomParams) {
    const { actionTypes: types, initialState, selectors, actionFilters }: PaginationApiCustomParams = getParams(
        customParams,
    );

    const basicApiReducer = makeBasicApiReducer({
        initialState,
        actionFilters,
        actionTypes: types,
    });

    const paginationApiReducer = createReducer(initialState, builder => {
        builder
            .addCase(types.SUCCESS, (state, action: AnyAction) => {
                const currentCount = selectors.currentCount(action);
                const totalCount = selectors.totalCount(action);
                const hasMore = selectors.hasMore(action);

                basicApiReducer(state, action);

                state.totalCount = totalCount;
                state.hasMore = hasMore === undefined ? currentCount >= state.limit : hasMore;
            })
            .addCase(types.SET_PAGE, (state, action: AnyAction) => {
                if (actionFilters.setPage(action)) {
                    state.page = action.payload.page;
                }
            })
            .addMatcher(
                action => [types.REQUEST, types.CANCEL, types.FAILURE, types.RESET, types.UPDATE].includes(action.type),
                (state, action) => basicApiReducer(state, action),
            );
    });

    return paginationApiReducer;
}
