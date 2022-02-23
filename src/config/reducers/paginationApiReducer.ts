import type { AnyAction } from '@reduxjs/toolkit';

import { mergeConfigs } from './utils';
import * as BasicApiReducer from './basicApiReducer';
import { ApiState, PaginationReducerState } from './types';

export default function configurePaginationApiReducer(
    customConfigure?: any,
    basicApiReducerInitialState: ApiState = BasicApiReducer.initialState,
) {
    const initialState: PaginationReducerState = Object.freeze({
        ...basicApiReducerInitialState,

        // current page
        page: 1,

        // items per page
        amount: 4,

        // total number of items
        totalCount: 0,

        // fetch 20 items
        limit: 20,

        // has more items to fetch
        hasMore: true,
    });

    const selectors = Object.freeze({
        totalCount: (action: AnyAction) => action.meta.totalCount,
        currentCount: (action: AnyAction) => action.payload.ids.length,
        hasMore: (action: AnyAction) => action.meta.hasMore,
    });

    return mergeConfigs(
        {
            initialState,
            selectors,
        },
        customConfigure,
    );
}
