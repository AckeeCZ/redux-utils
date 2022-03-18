import type { AnyAction } from '@reduxjs/toolkit';

import { config, emptyActionTypesError, ReduxUtilsError, undefinedItemIdWarning } from '../../config';
import type { ApiState, ContainerCustomParams, ContainerState } from '../../config';

function getInitialState<S>({
    childReducer,
    initialState: customInitialState,
    options,
}: Pick<ContainerCustomParams<S>, 'childReducer' | 'initialState' | 'options'>): ContainerState<S> {
    const placeholder = childReducer(undefined, { type: 'INIT_ACTION_TYPE' });
    const initialState = { ...customInitialState };

    if (placeholder && options.placeholder) {
        initialState.placeholder = placeholder;
    }

    return initialState;
}

const getParams = <S>(
    customParams: ContainerCustomParams<S> = {} as ContainerCustomParams<S>,
): ContainerCustomParams<S> => {
    if (customParams.actionTypes.length === 0) {
        throw new ReduxUtilsError(emptyActionTypesError(customParams));
    }

    const options = {
        ...config.containerReducer.options,
        ...customParams.options,
    };

    const initialState = getInitialState<S>({
        options,
        childReducer: customParams.childReducer,
        initialState: customParams.initialState,
    });

    return {
        ...customParams,
        options,
        selectors: {
            ...config.containerReducer.selectors,
            ...customParams.selectors,
        },
        initialState: {
            ...(config.containerReducer.initialState as ContainerState<S>),
            ...initialState,
        },
    };
};

/**
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/containerReducer.md
 */
export default function makeContainerReducer<State = ApiState>(customParams: ContainerCustomParams<State>) {
    const { options, actionTypes, initialState, selectors, childReducer } = getParams<State>(customParams);

    const types = new Set(actionTypes);

    const containerReducer = (state = initialState, action: AnyAction) => {
        if (!types.has(action.type)) {
            return state;
        }

        const itemId = selectors.itemId(action);

        if (itemId === undefined) {
            if (!options.ignoreWarnings) {
                config.logger.warn(undefinedItemIdWarning(action));
            }

            return state;
        }

        return {
            ...state,
            [itemId]: childReducer(state[itemId], action),
        };
    };
    return containerReducer;
}
