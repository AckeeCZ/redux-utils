import {
    config,
    ApiReducerState,
    Action,
    emptyActionTypesError,
    ReduxUtilsError,
    undefinedItemIdWarning,
} from '../../config';
import { CustomParams } from '../types';

function getInitialState({ childReducer, initialState: customInitialState, options }: CustomParams) {
    const placeholder = childReducer(undefined, {});
    const initialState = { ...customInitialState };

    if (placeholder && options.placeholder) {
        initialState.placeholder = placeholder;
    }

    return initialState;
}

const getParams = (customParams: CustomParams = {}) => {
    if (customParams.actionTypes.length === 0) {
        throw new ReduxUtilsError(emptyActionTypesError(customParams));
    }

    const options = {
        ...config.containerReducer.options,
        ...customParams.options,
    };

    const initialState = getInitialState({
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
            ...config.containerReducer.initialState,
            ...initialState,
        },
    };
};

/**
 * @param {object} params 
    * @param {(state: object, action: object) => object} params.childReducer 
    * @param {string[]} params.actionTypes
    * @param {object} [params.initialState]

    * @param {object} params.selectors
        * @param {(action: object) => string} params.selectors.itemId

    * @param {object} [params.options]
        * @param {boolean} params.options.ignoreWarnings
        * @param {boolean} params.options.placeholder

 * @returns {(state: object, action: object) => object}
 */
export default function makeContainerReducer(customParams: CustomParams) {
    const { options, actionTypes, initialState, selectors, childReducer }: CustomParams = getParams(customParams);

    const types = new Set(actionTypes);

    const containerReducer = (state: ApiReducerState = initialState, action: Action) => {
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

        const itemInitialState = initialState[itemId] || initialState.placeholder;

        return {
            ...state,
            [itemId]: childReducer(state[itemId], action, itemInitialState),
        };
    };
    return containerReducer;
}
