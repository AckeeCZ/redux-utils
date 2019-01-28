import * as Config from './config';
import * as Consts from '../../../constants';

const getParams = (customParams = {}) => {
    const options = {
        ...Config.options.logging,
        ...customParams.options,
    };

    if (options.logging && !customParams.actionTypes) {
        const { BASIC } = Consts.types;
        // eslint-disable-next-line
        console.warn(Consts.warnings.undefinedActionTypes(BASIC, customParams));
    }

    return {
        initialState: Object.freeze({
            ...Config.initialState,
            ...customParams.initialState,
        }),
        actionTypes: {
            ...Config.actionTypes,
            ...customParams.actionTypes,
        },
        options,
    };
};

export default function makeBasicApiReducer(customParams) {
    const { actionTypes: types, initialState } = getParams(customParams);

    function basicApiReducer(state = initialState, action) {
        switch (action.type) {
            case types.REQUEST:
                return {
                    ...state,
                    error: initialState.error,
                    isFetching: true,
                    didInvalidate: false,
                    success: false,
                };

            case types.INVALIDATE:
                return {
                    ...state,
                    isFetching: false,
                    didInvalidate: true,
                };

            case types.SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    success: true,
                };

            case types.FAILURE: {
                const { error = initialState.error } = action.payload;

                return {
                    ...state,
                    isFetching: false,
                    error,
                };
            }

            case types.RESET:
                return initialState;

            default:
                return state;
        }
    }

    basicApiReducer.getInitialState = () => initialState;

    return basicApiReducer;
}
