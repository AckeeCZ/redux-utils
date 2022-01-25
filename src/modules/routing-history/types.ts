import { Location } from 'history';

export type ReducerName = string;

export interface RoutingHistoryState {
    previousLocation: Location | null;
    activeLocation: Location | null;
}

export interface State {
    [key: string]: RoutingHistoryState;
}
