const invalidActionTypeError = (actionType: string[]) => ({
    code: 'reset_reducer/invalid_action_type',
    message: `Invalid parameter 'actionType'. It must be an array of action types or action type string, not a ${typeof actionType}.`,
});

export const parseResetActionType = (actionType: string | string[]) => {
    if (Array.isArray(actionType)) {
        return actionType;
    }

    if (typeof actionType === 'string') {
        return [actionType];
    }

    throw invalidActionTypeError(actionType);
};
