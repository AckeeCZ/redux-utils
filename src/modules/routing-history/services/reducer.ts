import { createReducer } from '@reduxjs/toolkit';
import { LOCATION_CHANGE, LocationChangeAction } from 'connected-react-router';

import type { RoutingHistoryState } from '../types';

const initialState: RoutingHistoryState = {
    previousLocation: null,
    activeLocation: null,
};

export const routingHistoryReducer = createReducer(initialState, builder => {
    builder.addCase(LOCATION_CHANGE, (state, action: LocationChangeAction) => {
        state.previousLocation = state.activeLocation;
        state.activeLocation = action.payload.location;
    });
});
