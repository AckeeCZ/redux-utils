/* tslint:disable */
import { parseResetActionType } from '../utilities';

/**
 * reset reducer to initial state when 'actionType' is dispatched
 * @param {Function} reducer
 * @param {String|Array} actionType
 */
export default function makeResetReducer(reducer, actionType) {
    const actionTypes = new Set(parseResetActionType(actionType));

    return function resetReducer(state, action) {
        // if actionType matches to the current action.type,
        // then get initialState by passing undefined state to the reducer
        const newState = actionTypes.has(action.type) ? undefined : state;

        return reducer(newState, action);
    };
}
