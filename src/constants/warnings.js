export const undefinedActionTypes = (reducerType, params) => ({
    code: `${reducerType}/missing_actionTypes`,
    reason: `'actionTypes' parameter is undefined, params: ${JSON.stringify(params, null, 2)}`,
});

export const undefinedItemId = action => ({
    code: 'container/missing_itemId',
    reason: `'itemId' is undefined. Check if 'selectors.itemId' returns item id from Redux action.`,
    action: JSON.stringify(action, null, 2),
});
