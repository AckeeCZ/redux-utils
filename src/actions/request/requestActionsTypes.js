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

export default requestActionsTypes;
