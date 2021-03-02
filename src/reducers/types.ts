import { ApiReducerState } from '../config';

export interface CustomParams {
    actionTypes?: any;
    initialState?: ApiReducerState;
    actionFilters?: any;
    options?: any;
    selectors?: any;
    childReducer?: any;
}
