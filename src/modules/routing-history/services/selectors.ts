import type { ReducerName, State } from '../types';

const defaultHistoryObject = {
    pathname: '',
};

export const previousLocationSelectorFactory = (reducerName: ReducerName) => (state: State) =>
    state[reducerName].previousLocation || defaultHistoryObject;

export const activeLocationSelectorFactory = (reducerName: ReducerName) => (state: State) =>
    state[reducerName].activeLocation || defaultHistoryObject;
