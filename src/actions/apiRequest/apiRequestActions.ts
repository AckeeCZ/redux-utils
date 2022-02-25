import { convertTypeToActionName, TypeToActionName } from './utils';
import { list, detail } from './templates';

interface Options {
    isDetailRequest?: boolean;
}

const defaultOptions: Options = {
    isDetailRequest: false,
};

const apiRequestActions = <T extends { [KT: string]: string }>(types: T, options: Options = defaultOptions) => {
    type ActionCreators = {
        [K in keyof T as TypeToActionName<K>]: Function;
    };

    const actionCreators = Object.values(types).reduce((actions, type) => {
        const template = options.isDetailRequest ? detail : list;
        const name = convertTypeToActionName(type) as keyof ActionCreators;
        const suffix = type.slice(type.lastIndexOf('_') + 1);

        actions[name] = template[suffix](type);
        return actions;
    }, {} as ActionCreators);

    return Object.freeze<ActionCreators>(actionCreators);
};

export default apiRequestActions;
