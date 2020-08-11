import { mergeConfigs } from './utils';
import * as BasicApiReducer from './basicApiReducer';

export default function configureInfiniteListApiReducer(
    customConfigure,
    basicApiReducerInitialState = BasicApiReducer.initialState,
) {
    const initialState = Object.freeze({
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
        currentCount: action => action.payload.ids.length,
        totalCount: action => action.meta.totalCount,
    });

    return mergeConfigs(
        {
            initialState,
            selectors,
        },
        customConfigure,
    );
}
