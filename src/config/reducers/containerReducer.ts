import type { AnyAction } from '@reduxjs/toolkit';

import { mergeConfigs } from './utils';
import { ApiState, ContainerCustomParams, ContainerState } from './types';

interface MergeConfigArgs extends Pick<ContainerCustomParams, 'initialState' | 'options' | 'selectors'> {}

export default function configureContainerReducer(customConfigure?: (args: MergeConfigArgs) => MergeConfigArgs) {
    const initialState: ContainerState<ApiState> = Object.freeze({});

    const options = Object.freeze<ContainerCustomParams['options']>({
        ignoreWarnings: process.env.NODE_ENV !== 'development',
        placeholder: true,
    });

    const selectors = Object.freeze<ContainerCustomParams['selectors']>({
        itemId: (action: AnyAction) => action.meta.itemId,
    });

    return mergeConfigs(
        {
            initialState,
            options,
            selectors,
        },
        customConfigure,
    );
}
