import { ApiCustomParams } from '../../../config';
import { UNUSED_ACTION_TYPE } from '../../../constants';
import makeBasicApiReducer from '../basic/factoryReducer';

describe('Basic api reducer', () => {
    const actionTypes: ApiCustomParams['actionTypes'] = {
        REQUEST: 'req',
        FAILURE: 'fail',
        SUCCESS: 'succ',
        RESET: 'res',
        CANCEL: UNUSED_ACTION_TYPE,
        UPDATE: 'upd',
    } as const;

    const makeAction = (type: string, params?: {}) => ({
        type,
        ...params,
    });

    it('should use default initial state', () => {
        const reducer = makeBasicApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('foo'))).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
        });
    });

    it('should set in progress state on request', () => {
        const reducer = makeBasicApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('req'))).toEqual({
            inProgress: true,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
        });
    });

    it('should set sucess state on success', () => {
        const reducer = makeBasicApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('succ', { meta: { lastSuccessAt: 'today' } }))).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: true,
            lastSuccessAt: 'today',
        });
    });

    it('should set error state on failure', () => {
        const reducer = makeBasicApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('fail', { error: 'err' }))).toEqual({
            inProgress: false,
            cancelled: false,
            error: 'err',
            success: false,
            lastSuccessAt: null,
        });
    });

    it('should reset to initial state on reset', () => {
        const reducer = makeBasicApiReducer({ actionTypes });

        expect(
            reducer(
                {
                    inProgress: false,
                    cancelled: false,
                    error: '',
                    success: true,
                    lastSuccessAt: 'yesterday',
                },
                makeAction('res'),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
        });
    });

    it('should update state on update action', () => {
        const reducer = makeBasicApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('upd', { payload: { cancelled: true, error: 'cancelled' } }))).toEqual({
            inProgress: false,
            cancelled: true,
            error: 'cancelled',
            success: false,
            lastSuccessAt: null,
        });
    });
});
