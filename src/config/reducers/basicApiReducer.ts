import { mergeConfigs } from './utils';
import { ApiReducerState } from './types';

export const initialState: ApiReducerState = Object.freeze({
    inProgress: false,
    cancelled: false,
    error: '',
    success: false,
    lastSuccessAt: null,
});

export default function configurateBasicApiReducer(customConfigure?: any) {
    return mergeConfigs({ initialState }, customConfigure);
}
