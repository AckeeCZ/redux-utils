import * as Config from './config';
import * as Consts from '../../constants';

function getInitialState({
    childReducer,
    initialState: customInitialState,
    options
}) {
    const placeholder = childReducer(undefined, {});
    const initialState = { ...customInitialState };

    if (placeholder && options.placeholder) {
        initialState.placeholder = placeholder;
    }

    return initialState;
}

const getParams = (customParams = {}) => {
    if (customParams.actionTypes.length === 0) {
        throw Consts.errors.emptyActionTypes(customParams);
    }

    const options = {
        ...Config.options,
        ...customParams.options
    };

    const initialState = getInitialState({
        childReducer: customParams.childReducer,
        initialState: customParams.initialState,
        options
    });

    return {
        ...customParams,
        options,
        selectors: {
            ...Config.selectors,
            ...customParams.selectors
        },
        initialState: {
            ...Config.initialState,
            ...initialState
        }
    };
};

export default function makeContainerReducer(customParams) {
    const {
        options,
        actionTypes,
        initialState,
        selectors,
        childReducer
    } = getParams(customParams);

    const types = new Set(actionTypes);

    return function containerReducer(state = initialState, action) {
        if (!types.has(action.type)) {
            return state;
        }

        const itemId = selectors.itemId(action);

        switch (itemId) {
            case undefined: {
                if (options.logging && !options.ignoreWarnings) {
                    // eslint-disable-next-line
                    console.warn(Consts.warnings.undefinedItemId(action));
                }

                return state;
            }

            default: {
                const itemInitialState =
                    initialState[itemId] || initialState.placeholder;

                return {
                    ...state,
                    [itemId]: childReducer(
                        state[itemId],
                        action,
                        itemInitialState
                    )
                };
            }
        }
    };
}
