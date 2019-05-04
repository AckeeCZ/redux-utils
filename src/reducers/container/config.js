export const actionTypes = [];

export const initialState = {};

export const options = {
    ignoreWarnings: process.env.NODE_ENV !== 'development',
    placeholder: true,
};

export const selectors = {
    itemId: action => action.meta.itemId,
};
