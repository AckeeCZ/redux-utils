import createRequestActions from './requestActions';
import { asyncType } from '../../utilities/asyncType';

/**
 * Generates Redux action types and creators by given config
 * @param {Object} config configuration object same as for asyncType factory
 * @returns {Object} consisting of types and actions objects
 */
const requestActionsTypes = config => {
    const types = asyncType(config);
    const actions = createRequestActions(types);

    return { actions, types };
};

/**
 * Generates a factory to create Redux actions and types with predefined module prefix and default types
 * @param {Object} config { modulePrefix: String, defaultTypes: Array<Sting> }
 * @returns {Function} factory for creating the actions and types
 */
export const createRequestActionsTypes = ({ modulePrefix, defaultTypes }) => config =>
    requestActionsTypes({
        types: defaultTypes,
        ...config,
        modulePrefix,
    });

export default requestActionsTypes;
