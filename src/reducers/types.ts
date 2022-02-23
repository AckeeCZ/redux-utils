import { ApiState } from '../config';

export interface CustomParams {
    actionTypes?: any;
    initialState?: ApiState;
    actionFilters?: any;
    options?: any;
    selectors?: any;
    childReducer?: any;
}
