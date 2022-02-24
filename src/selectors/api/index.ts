import { createSelector } from 'reselect';
import { ApiState, PaginationApiState, ReduxUtilsError } from '../../config';

const stringifyKeys = (obj: object): string => {
    const keys = Object.keys(obj).map(x => `'${x}'`);

    return `[${keys.join(', ')}]`;
};

export const apiSelector = <
    ApiStates extends { [entity: string]: AS | { [type: string]: AS | { [item: string]: AS } } },
    AS extends ApiState = ApiState
>(
    state: { api: ApiStates },
    entityKey: keyof ApiStates,
    typeId?: string,
    itemId?: string,
): AS => {
    const entity = state.api[entityKey];

    if (entity === undefined) {
        const validKeys = stringifyKeys(state.api);
        throw new ReduxUtilsError(`No entity with the '${entityKey}' key was found.\nValid entity keys: ${validKeys}.`);
    }

    if (typeId === undefined) {
        return entity as AS;
    }

    const entityTypes = entity[typeId];

    if (entityTypes === undefined) {
        const validEntityTypes = stringifyKeys(entity);
        throw new ReduxUtilsError(
            `No entity type with the '${typeId}' type was found within '${entityKey}' entity.\nValid entity types: ${validEntityTypes}.`,
        );
    }

    if (itemId === undefined) {
        return entityTypes as AS;
    }

    return entityTypes[itemId] || entityTypes.placeholder;
};

export const paginationApiSelector = createSelector(apiSelector, (group: PaginationApiState) => {
    const { page, amount, ...rest } = group;

    return {
        ...rest,
        page,
        amount,
        offset: (page - 1) * amount,
    };
});
