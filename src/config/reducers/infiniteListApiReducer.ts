import { mergeConfigs } from './utils';
import * as BasicApiReducer from './basicApiReducer';
import { Action, ApiReducerState, InfiniteReducerState } from './types';

export default function configureInfiniteListApiReducer(
    customConfigure?: any,
    basicApiReducerInitialState: ApiReducerState = BasicApiReducer.initialState,
) {
    const initialState: InfiniteReducerState = Object.freeze({
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
        currentCount: (action: Action) => action.payload.ids.length,
        totalCount: (action: Action) => action.meta.totalCount,
    });

    return mergeConfigs(
        {
            initialState,
            selectors,
        },
        customConfigure,
    );
}
