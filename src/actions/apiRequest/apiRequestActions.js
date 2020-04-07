import { convertTypeToActionName } from './utils';
import templates from './templates';

/**
 * Generates Redux action creators for given action types
 * @param {Array.<string>} types Redux action types
 * @returns {object} generated action creators
 */
const apiRequestActions = types => {
    return Object.values(types).reduce((actions, type) => {
        const name = convertTypeToActionName(type);
        const suffix = type.slice(type.lastIndexOf('_') + 1);

        actions[name] = templates[suffix](type);
        return actions;
    }, {});
};

export default apiRequestActions;
