import { createSelector } from 'reselect';

/**
 *
 * @param {Object} state - Redux state.
 * @param {String} entityKey - Entity name (e.g. 'users', 'user').
 * @param {String} [typeId] - API type ID (e.g. 'fetch', 'delete')
 * @param {String} [itemId] - entity item ID (e.g. 'userId', 'postId')
 */
export const apiSelector = (state, entityKey, typeId, itemId) => {
    const entity = state.api[entityKey];

    if (entity === undefined) {
        const validKeys = `[${Object.keys(state.api)}]`;
        throw new Error(`No entity with the '${entityKey}' key wasn't found.\nValid entity keys: ${validKeys}.`);
    }

    if (typeId === undefined) {
        return entity;
    }

    const entityTypes = entity[typeId];

    if (entityTypes === undefined) {
        const validEntityTypes = `[${Object.keys(entity)}]`;
        throw new Error(
            `No entity type with the '${typeId}' type wasn't found.\nValid entity types: ${validEntityTypes}.`,
        );
    }

    if (itemId === undefined) {
        return entityTypes;
    }

    return entityTypes[itemId] || entityTypes.placeholder;
};

export const apiPaginationSelector = createSelector(
    apiSelector,
    group => {
        const { page, amount, ...rest } = group;

        return {
            ...rest,
            page,
            amount,
            offset: (page - 1) * amount,
        };
    },
);
