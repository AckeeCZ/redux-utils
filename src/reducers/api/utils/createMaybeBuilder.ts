import type { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { UNUSED_ACTION_TYPE } from '../../../constants';

export function createMaybeBuilder<State extends any, Builder extends ActionReducerMapBuilder<State>>(
    builder: Builder,
): Builder {
    type AddCaseParams = Parameters<Builder['addCase']>;

    const addCase = builder.addCase;

    builder.addCase = function maybeAddCase(actionCreator: AddCaseParams[0], reducer: AddCaseParams[1]) {
        if (actionCreator === UNUSED_ACTION_TYPE) {
            return builder;
        }

        return addCase(actionCreator, reducer);
    };

    return builder;
}
