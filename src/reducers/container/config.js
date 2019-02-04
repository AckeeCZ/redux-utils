import { isEnvDevelopment } from '../../constants';

export const actionTypes = [];

export const initialState = {};

export const options = {
    ignoreWarnings: !isEnvDevelopment,
    placeholder: true,
    logging: isEnvDevelopment,
};

export const selectors = {
    itemId: action => action.meta.itemId,
};
