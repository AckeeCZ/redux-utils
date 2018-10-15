import { UNUSED_ACTION_TYPE } from '../../../constants';

export const actionTypes = {
    REQUEST: UNUSED_ACTION_TYPE,
    INVALIDATE: UNUSED_ACTION_TYPE,
    SUCCESS: UNUSED_ACTION_TYPE,
    FAILURE: UNUSED_ACTION_TYPE,
    RESET: UNUSED_ACTION_TYPE
};

export const initialState = {
    isFetching: false,
    error: {
        code: null,
        message: ''
    },
    success: false,
    didInvalidate: false
};

export const options = {
    logging: true
};

export const selectors = {};
