// @ts-nocheck
import { UNUSED_ACTION_TYPE } from 'Consts';
import * as BasicApiReducerConfig from '../basic/config';

export const actionTypes = {
    ...BasicApiReducerConfig.actionTypes,
    SET_PAGE: UNUSED_ACTION_TYPE,
};

export const actionFilters = {
    setPage: () => true,
};
