import * as BasicAPIReducer from '../basic';

export const actionTypes = BasicAPIReducer.config.actionTypes;

export const initialState = {
    ...BasicAPIReducer.config.initialState,
    page: 1,
    pageSize: 20,
    hasMoreItems: true,
    totalCount: null
};

export const options = {
    logging: true
};

export const selectors = {
    totalCount: action => action.meta.totalCount,
    currentCount: action => action.payload.ids.length
};
