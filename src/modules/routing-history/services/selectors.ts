import { CombinedState } from 'redux';
import type { RoutingHistoryState } from '../types';

const defaultHistoryObject = {
    pathname: '',
};

export const previousLocationSelectorFactory =
    <State extends CombinedState<{ [key in K]: RoutingHistoryState }>, K extends keyof State>(reducerName: K) =>
    (state: State) =>
        state[reducerName].previousLocation || defaultHistoryObject;

export const activeLocationSelectorFactory =
    <State extends CombinedState<{ [key in K]: RoutingHistoryState }>, K extends keyof State>(reducerName: K) =>
    (state: State) =>
        state[reducerName].activeLocation || defaultHistoryObject;
