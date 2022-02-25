const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const convertTypeToActionName = (type: string) => {
    const unprefixed: string = type.slice(type.indexOf('/') + 1).toLowerCase();
    const parts: string[] = unprefixed.split('_');
    return parts.slice(1).reduce((name, part) => name + capitalizeFirstLetter(part), parts[0]);
};

type SnakeCaseToCamelCase<S> = S extends `${infer H}_${infer R}` ? SnakeCaseToCamelCase<`${H}${Capitalize<R>}`> : S;

export type TypeToActionName<T extends string | number | symbol> = T extends string
    ? SnakeCaseToCamelCase<Lowercase<T extends `${any}/${infer Unprefixed}` ? Unprefixed : T>>
    : never;
