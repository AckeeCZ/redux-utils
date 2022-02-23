import { mergeConfigs } from './utils';
import { ApiState } from './types';

interface MergeConfigArgs {
    initialState: ApiState;
}

export const initialState = Object.freeze<ApiState>({
    inProgress: false,
    cancelled: false,
    error: '',
    success: false,
    lastSuccessAt: null,
});

export default function configurateBasicApiReducer(customConfigure?: (args: MergeConfigArgs) => MergeConfigArgs) {
    return mergeConfigs({ initialState }, customConfigure);
}
