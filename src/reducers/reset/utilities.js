const invalidActionTypeError = actionType => ({
    code: 'reset_reducer/invalid_action_type',
    message: `Invalid parameter 'actionType'. It must be an array of action types or action type string, not a ${typeof actionType}.`
});

/**
 * parse actionType
 * @param {String|Array} actionType
 * @return {Array}
 */
export const parseResetActionType = actionType => {
    if (Array.isArray(actionType)) {
        return actionType;
    } else if (typeof actionType === 'string') {
        return [actionType];
    }

    throw invalidActionTypeError(actionType);
};
