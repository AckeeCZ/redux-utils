const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const convertTypeToActionName = (type: string) => {
    const unprefixed: string = type.slice(type.indexOf('/') + 1).toLowerCase();
    const parts: string[] = unprefixed.split('_');
    return parts.slice(1).reduce((name, part) => name + capitalizeFirstLetter(part), parts[0]);
};
