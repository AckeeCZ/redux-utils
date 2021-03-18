import { createSelector } from 'reselect';
import { ReduxUtilsError } from '../../config';

const stringifyKeys = obj => {
    const keys = Object.keys(obj).map(x => `'${x}'`);

    return `[${keys.join(', ')}]`;
};

export const apiSelector = (state: any, entityKey: string, typeId?: string, itemId?: string) => {
    const entity = state.api[entityKey];

    if (entity === undefined) {
        const validKeys = stringifyKeys(state.api);
        throw new ReduxUtilsError(`No entity with the '${entityKey}' key was found.\nValid entity keys: ${validKeys}.`);
    }

    if (typeId === undefined) {
        return entity;
    }

    const entityTypes = entity[typeId];

    if (entityTypes === undefined) {
        const validEntityTypes = stringifyKeys(entity);
        throw new ReduxUtilsError(
            `No entity type with the '${typeId}' type was found within '${entityKey}' entity.\nValid entity types: ${validEntityTypes}.`,
        );
    }

    if (itemId === undefined) {
        return entityTypes;
    }

    return entityTypes[itemId] || entityTypes.placeholder;
};

export const paginationApiSelector = createSelector(apiSelector, group => {
    const { page, amount, ...rest } = group;

    return {
        ...rest,
        page,
        amount,
        offset: (page - 1) * amount,
    };
    // TODO Set types for return
});
