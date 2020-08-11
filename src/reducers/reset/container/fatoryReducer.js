import { ReduxUtilsError } from 'Config';
import { parseResetActionType } from '../utilities';

const invalidItemIdError = itemId => ({
    code: 'reset_reducers/invalid_item_id',
    message: `'resetItems' object has invalid itemId parameter: ${itemId}. It must be non-empty string.`,
});

const addItemIdToActionTypes = (dest = {}, itemId = '', actionTypes = []) => {
    if (!itemId) {
        throw new ReduxUtilsError(invalidItemIdError(itemId));
    }

    for (const actionType of actionTypes) {
        const itemIds = dest[actionType] || [];

        itemIds.push(itemId);

        dest[actionType] = itemIds;
    }
};

/*
    create map, where key is action type
    and value is set of child reducer ids
 */
const createRevertedMap = (resetItems = {}) => {
    const tempDest = {};

    // create object where key is action type and value is array of items ids
    for (const [itemId, actionType] of Object.entries(resetItems)) {
        const actionTypes = parseResetActionType(actionType);

        addItemIdToActionTypes(tempDest, itemId, actionTypes);
    }

    const revertedMap = new Map();

    // create Map and remove possible duplicit item IDs
    for (const [actionType, itemIds] of Object.entries(tempDest)) {
        revertedMap.set(actionType, new Set(itemIds));
    }

    return revertedMap;
};

const resetItemsToInitialState = (itemIds = new Set(), childReducer, itemInitialState) => {
    const newState = {};
    const mockAction = {};

    for (const itemId of itemIds.values()) {
        newState[itemId] = childReducer(undefined, mockAction, itemInitialState);
    }

    return newState;
};

/**
 * Reset items of container reducer to initial state.
 *
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/containerResetReducer.md
 *
 * @param {object} params
 * @param {(state: object, action: object) => object} params.childReducer
 * @param {(state: object, action: object) => object} params.containerReducer
 * @param {object} params.itemInitialState
 * @param {object} params.resetItems
 *
 * @returns {(state: object, action: object) => object}
 */
const makeResetContainerReducer = params => {
    const { childReducer, containerReducer, itemInitialState, resetItems } = params;
    // create map where key is an action type
    // and value is an array of child reducers keys
    // (resetItems is object where key is reducer key
    // and value is array of action types -> reverted map)
    const actionTypes = createRevertedMap(resetItems);

    return function resetContainerReducer(state, action) {
        const itemIds = actionTypes.get(action.type);

        if (itemIds) {
            const newState = resetItemsToInitialState(itemIds, childReducer, itemInitialState);

            return {
                ...state,
                ...newState,
            };
        }

        return containerReducer(state, action, itemInitialState);
    };
};

export default makeResetContainerReducer;
