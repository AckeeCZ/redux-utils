import { ApiCustomParams } from '../../../config';
import { UNUSED_ACTION_TYPE } from '../../../constants';
import makeBasicApiReducer from '../basic/factoryReducer';

describe('Basic api reducer with UNUSED_ACTION_TYPEs', () => {
    const actionTypes: ApiCustomParams['actionTypes'] = {
        REQUEST: UNUSED_ACTION_TYPE,
        FAILURE: UNUSED_ACTION_TYPE,
        SUCCESS: UNUSED_ACTION_TYPE,
    } as const;

    it('should initialize api reducer without an error', () => {
        expect(() => makeBasicApiReducer({ actionTypes })).not.toThrowError();
    });
});
