import { UNUSED_ACTION_TYPE } from 'Consts';
import * as BasicApiReducerConfig from '../basic/config';

export const actionTypes = {
    ...BasicApiReducerConfig.actionTypes,
    SET_PAGE: UNUSED_ACTION_TYPE,
};

export const initialState = {
    ...BasicApiReducerConfig.initialState,

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
};

export const selectors = {
    totalCount: action => action.meta.totalCount,
    currentCount: action => action.payload.ids.length,
    hasMore: action => action.meta.hasMore,
};

export const actionFilters = {
    setPage: () => false,
};
