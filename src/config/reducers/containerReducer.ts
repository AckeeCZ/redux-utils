import type { AnyAction } from '@reduxjs/toolkit';

import { mergeConfigs } from './utils';
import type { ApiState, ContainerCustomParams, ContainerState } from './types';

export interface ContainerMergeConfigArgs extends Pick<ContainerCustomParams, 'initialState' | 'options' | 'selectors'> {}

export default function configureContainerReducer(customConfigure?: (args: ContainerMergeConfigArgs) => ContainerMergeConfigArgs) {
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
