import { convertTypeToActionName, TypeToActionName } from './utils';
import { list, detail } from './templates';

interface Options {
    isDetailRequest?: boolean;
}

const defaultOptions: Options = {
    isDetailRequest: false,
};

type ListTemplates = typeof list;
type DetailTemplates = typeof detail;

type ExtractSuffix<S> = S extends string ? (S extends `${any}_${infer T}` ? ExtractSuffix<T> : S) : never;

type ActionTemplate<Suff extends string, IsDetail extends true | false> = IsDetail extends true
    ? Suff extends keyof DetailTemplates
        ? ReturnType<DetailTemplates[Suff]>
        : never
    : Suff extends keyof ListTemplates
    ? ReturnType<ListTemplates[Suff]>
    : never;

const apiRequestActions = <T extends { [KT: string]: string }, O extends Options>(
    types: T,
    options: O = defaultOptions as O,
) => {
    type ActionCreators = {
        [K in keyof T as TypeToActionName<K>]: typeof options['isDetailRequest'] extends true
            ? ActionTemplate<ExtractSuffix<K>, true>
            : ActionTemplate<ExtractSuffix<K>, false>;
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
