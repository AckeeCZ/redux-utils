import { isEnvDevelopment } from '../../../constants';
import * as BasicAPIReducer from '../basic';

export const { actionTypes } = BasicAPIReducer.config;

export const initialState = {
    ...BasicAPIReducer.config.initialState,
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

export const options = {
    logging: isEnvDevelopment,
};

export const selectors = {
    totalCount: action => action.meta.totalCount,
    currentCount: action => action.payload.ids.length,
};
