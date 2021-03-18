import { ApiReducerState, Action } from '../../../config';
import { parseResetActionType } from '../utilities';

/**
 * Reset reducer to initial state when 'actionType' is dispatched.
 *
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/basicResetReducer.md
 *
 * @param {(state: object, action: object) => object} reducer
 * @param {string | string[]} actionType
 * @returns {(state: object, action: object) => object}
 */
export default function makeResetReducer(reducer: Function, actionType: string) {
    const actionTypes = new Set(parseResetActionType(actionType));

    const resetReducer = (state: ApiReducerState, action: Action) => {
        // if actionType matches to the current action.type,
        // then get initialState by passing undefined state to the reducer
        const newState = actionTypes.has(action.type) ? undefined : state;

        return reducer(newState, action);
    };
    return resetReducer;
}
