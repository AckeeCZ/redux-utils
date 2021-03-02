import { mergeConfigs } from './utils';
import { Action, ApiReducerState } from './types';

export default function configureContainerReducer(customConfigure?: any) {
    const initialState: ApiReducerState = Object.freeze({});

    const options: any = Object.freeze({
        ignoreWarnings: process.env.NODE_ENV !== 'development',
        placeholder: true,
    });

    const selectors: any = Object.freeze({
        itemId: (action: Action) => action.meta.itemId,
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
