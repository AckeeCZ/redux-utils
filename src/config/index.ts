import configBasicApiReducer from './reducers/basicApiReducer';
import configPaginationApiReducer from './reducers/paginationApiReducer';
import configInfiniteListApiReducer from './reducers/infiniteListApiReducer';
import configContainerReducer from './reducers/containerReducer';
import { CustomConfig } from './types';

export * from './reducers/types';
export * from './types';

export const config: CustomConfig = {
    logger: console,

    basicApiReducer: configBasicApiReducer(),
    paginationApiReducer: configPaginationApiReducer(),
    infiniteListApiReducer: configInfiniteListApiReducer(),
    containerReducer: configContainerReducer(),
};
export class ReduxUtilsError extends Error {
    constructor(message: string | object) {
        super(typeof message === 'string' ? message : JSON.stringify(message, null, 2));
        this.name = 'ReduxUtilsError';
    }
}

export const emptyActionTypesError = customParams => ({
    code: 'container/empty_actionTypes',
    reason: `'actionTypes' must be non empty array of strings. Received params: ${customParams}`,
});

export const undefinedActionTypesWarning = (reducerName, params) => ({
    code: `${reducerName}/missing_actionTypes`,
    reason: `'actionTypes' parameter is undefined, params: ${JSON.stringify(params, null, 2)}`,
});

export const undefinedItemIdWarning = action => ({
    code: 'container/missing_itemId',
    reason: `'itemId' is undefined. Check if 'selectors.itemId' returns item id from Redux action.`,
    action: JSON.stringify(action, null, 2),
});
