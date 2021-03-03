/* tslint:disable */
const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

export const convertTypeToActionName = type => {
    const unprefixed = type.slice(type.indexOf('/') + 1).toLowerCase();
    const parts = unprefixed.split('_');
    return parts.slice(1).reduce((name, part) => name + capitalizeFirstLetter(part), parts[0]);
};
