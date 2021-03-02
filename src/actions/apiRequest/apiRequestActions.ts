import { convertTypeToActionName } from './utils';
import { list, detail } from './templates';

interface Options {
    isDetailRequest?: boolean;
}

const defaultOptions: Options = {
    isDetailRequest: false,
};

/**
 * Generates Redux action creators for given action types
 * @param {Object} types Redux action types
 * @param {Object} [options] for creating action creators
 * @returns {Object} generated action creators
 */
const apiRequestActions = (types: Record<string, string>, options: Options = defaultOptions): object => {
    const actionCreators = Object.values(types).reduce((actions: object, type: string) => {
        const template = options.isDetailRequest ? detail : list;
        const name = convertTypeToActionName(type);
        const suffix = type.slice(type.lastIndexOf('_') + 1);

        actions[name] = template[suffix](type);
        return actions;
    }, {});

    return Object.freeze(actionCreators);
};

export default apiRequestActions;
