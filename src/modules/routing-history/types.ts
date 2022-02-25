import type { Location } from 'history';

export interface RoutingHistoryState {
    previousLocation: Location | null;
    activeLocation: Location | null;
}
