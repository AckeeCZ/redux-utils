import { ReduxUtilsError } from 'Config';
import { createSelector } from 'reselect';

const stringifyKeys = obj => {
    const keys = Object.keys(obj).map(x => `'${x}'`);

    return `[${keys.join(', ')}]`;
};

/**
 *
 * @param {object} state - Redux state.
 * @param {string} entityKey - Entity name (e.g. 'users', 'user').
 * @param {string} [typeId] - API type ID (e.g. 'fetch', 'delete')
 * @param {string} [itemId] - entity item ID (e.g. 'userId', 'postId')
 * @return {object}
 */
export const apiSelector = (state, entityKey, typeId, itemId) => {
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

/**
 * @param {object} state - Redux state.
 * @param {string} entityKey - Entity name (e.g. 'users', 'user').
 * @param {string} [typeId] - API type ID (e.g. 'fetch', 'delete')
 * @param {string} [itemId] - entity item ID (e.g. 'userId', 'postId')
 * @return {object}
 */
export const paginationApiSelector = createSelector(apiSelector, group => {
    const { page, amount, ...rest } = group;

    return {
        ...rest,
        page,
        amount,
        offset: (page - 1) * amount,
    };
});
