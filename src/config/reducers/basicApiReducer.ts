import { mergeConfigs } from './utils';
import { ApiReducerState } from './types';

type ExtendedConfig = object & ApiReducerState;

interface MergeConfigArgs {
    initialState: ApiReducerState;
}

export const initialState: ApiReducerState = Object.freeze({
    inProgress: false,
    cancelled: false,
    error: '',
    success: false,
    lastSuccessAt: null,
});

export default function configurateBasicApiReducer(
    customConfigure: (initialState: MergeConfigArgs) => ExtendedConfig,
): ExtendedConfig {
    return mergeConfigs({ initialState }, customConfigure);
}
