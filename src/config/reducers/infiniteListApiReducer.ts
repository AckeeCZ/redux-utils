import type { AnyAction } from '@reduxjs/toolkit';

import { mergeConfigs } from './utils';
import * as BasicApiReducer from './basicApiReducer';
import type { ApiState, InfiniteListApiCustomParams, InfiniteListApiState } from './types';

export interface InfiniteListMergeConfigArgs {
    initialState: InfiniteListApiState;
    selectors: InfiniteListApiCustomParams['selectors'];
}

export default function configureInfiniteListApiReducer(
    customConfigure?: (args: InfiniteListMergeConfigArgs) => InfiniteListMergeConfigArgs,
    basicApiReducerInitialState: ApiState = BasicApiReducer.initialState,
) {
    const initialState: InfiniteListApiState = Object.freeze({
        ...basicApiReducerInitialState,

        // has more items to fetch
        hasMore: true,

        // fetched items length
        totalOffset: 0,

        // number of items to be fetched in a single request
        payloadSize: 10,

        // total number of items available (usually the `x-total-count` header)`
        totalCount: 0,
    });

    const selectors = Object.freeze({
        currentCount: (action: AnyAction) => action.payload.ids.length,
        totalCount: (action: AnyAction) => action.meta.totalCount,
    });

    return mergeConfigs(
        {
            initialState,
            selectors,
        },
        customConfigure,
    );
}
