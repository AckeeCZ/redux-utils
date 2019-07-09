import { UNUSED_ACTION_TYPE } from '../../../constants';

export const actionTypes = {
    REQUEST: UNUSED_ACTION_TYPE,
    CANCEL: UNUSED_ACTION_TYPE,
    SUCCESS: UNUSED_ACTION_TYPE,
    FAILURE: UNUSED_ACTION_TYPE,
    RESET: UNUSED_ACTION_TYPE,
    UPDATE: UNUSED_ACTION_TYPE,
};

export const initialState = {
    inProgress: false,
    cancelled: false,
    error: '',
    success: false,
    lastSuccessAt: null,
};

export const actionFilters = {
    update: () => false,
};
