import type { AnyAction } from '@reduxjs/toolkit';

import { mergeConfigs } from './utils';
import { ApiState } from './types';

export default function configureContainerReducer(customConfigure?: any) {
    const initialState: ApiState = Object.freeze({});

    const options: object = Object.freeze({
        ignoreWarnings: process.env.NODE_ENV !== 'development',
        placeholder: true,
    });

    const selectors: object = Object.freeze({
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
