import { parseResetActionType } from '../utilities';
import { AnyAction } from '@reduxjs/toolkit';
type Reducer = (state: any, action: AnyAction) => any;

/**
 * Reset reducer to initial state when 'actionType' is dispatched.
 *
 * Docs: https://github.com/AckeeCZ/redux-utils/blob/master/docs/reducers/basicResetReducer.md
 *
 */
export default function makeResetReducer<R extends Reducer>(reducer: R, actionType: string | string[]) {
    const actionTypes = new Set(parseResetActionType(actionType));

    type State = Parameters<R>[0];
    type Action = Parameters<R>[1];

    const resetReducer = (state: State, action: Action): ReturnType<R> => {
        // if actionType matches to the current action.type,
        // then get initialState by passing undefined state to the reducer
        const newState = actionTypes.has(action.type) ? undefined : state;

        return reducer(newState, action);
    };

    return resetReducer;
}
