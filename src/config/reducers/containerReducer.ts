/* tslint:disable */
import { mergeConfigs } from './utils';

export default function configureContainerReducer(customConfigure) {
    const initialState = Object.freeze({});

    const options = Object.freeze({
        ignoreWarnings: process.env.NODE_ENV !== 'development',
        placeholder: true,
    });

    const selectors = Object.freeze({
        itemId: action => action.meta.itemId,
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
