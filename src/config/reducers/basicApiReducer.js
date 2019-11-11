import { mergeConfigs } from './utils';

export const initialState = Object.freeze({
    inProgress: false,
    cancelled: false,
    error: '',
    success: false,
    lastSuccessAt: null,
});

export default function configurateBasicApiReducer(customConfigure) {
    return mergeConfigs({ initialState }, customConfigure);
}
