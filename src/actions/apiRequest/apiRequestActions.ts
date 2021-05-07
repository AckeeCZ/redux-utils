import { convertTypeToActionName } from './utils';
import { list, detail } from './templates';

interface Options {
    isDetailRequest?: boolean;
}

const defaultOptions: Options = {
    isDetailRequest: false,
};

const apiRequestActions = (
    types: Record<string, string>,
    options: Options = defaultOptions,
): Record<string, Function> => {
    const actionCreators = Object.values(types).reduce((actions, type) => {
        const template = options.isDetailRequest ? detail : list;
        const name = convertTypeToActionName(type);
        const suffix = type.slice(type.lastIndexOf('_') + 1);

        actions[name] = template[suffix](type);
        return actions;
    }, {});

    return Object.freeze(actionCreators);
};

export default apiRequestActions;
