import { mergeConfigs } from './utils';
import { initialState as basicApiReducerInitialState } from './basicApiReducer';

export default function configurePaginationApiReducer(customConfigure) {
    const initialState = Object.freeze({
        ...basicApiReducerInitialState,

        // has more items to fetch
        hasMore: true,

        // fetched items length
        totalOffset: 0,

        // number of items to be fetched in a single request
        payloadSize: 10,
    });

    const selectors = Object.freeze({
        currentCount: action => action.payload.ids.length,
    });

    return mergeConfigs(
        {
            initialState,
            selectors,
        },
        customConfigure,
    );
}
