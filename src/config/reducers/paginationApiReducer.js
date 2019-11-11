import { mergeConfigs } from './utils';
import { initialState as basicApiReducerInitialState } from './basicApiReducer';

export default function configurePaginationApiReducer(customConfigure) {
    const initialState = Object.freeze({
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
        totalCount: action => action.meta.totalCount,
        currentCount: action => action.payload.ids.length,
        hasMore: action => action.meta.hasMore,
    });

    return mergeConfigs(
        {
            initialState,
            selectors,
        },
        customConfigure,
    );
}
