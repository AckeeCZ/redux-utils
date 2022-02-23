import { InfiniteListApiCustomParams } from '../../../config';
import makeInfiniteListApiReducer from '../infiniteList/factoryReducer';

describe('Infinite list api reducer', () => {
    const actionTypes: InfiniteListApiCustomParams['actionTypes'] = {
        REQUEST: 'req',
        FAILURE: 'fail',
        SUCCESS: 'succ',
        RESET: 'res',
        CANCEL: 'can',
        UPDATE: 'upd',
    } as const;

    const makeAction = (type: string, params?: {}) => ({
        type,
        ...params,
    });

    it('should use default initial state', () => {
        const reducer = makeInfiniteListApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('foo'))).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            payloadSize: 10,
            totalCount: 0,
            totalOffset: 0,
        });
    });

    it('should set in progress state on request', () => {
        const reducer = makeInfiniteListApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('req'))).toEqual({
            inProgress: true,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            payloadSize: 10,
            totalCount: 0,
            totalOffset: 0,
        });
    });

    it('should set sucess state with more items on success', () => {
        const reducer = makeInfiniteListApiReducer({ actionTypes });

        expect(
            reducer(
                undefined,
                makeAction('succ', {
                    payload: { ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
                    meta: { lastSuccessAt: 'today', totalCount: 30 },
                }),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: true,
            lastSuccessAt: 'today',
            hasMore: true,
            payloadSize: 10,
            totalCount: 30,
            totalOffset: 10,
        });
    });

    it('should set sucess state with no more items on success', () => {
        const reducer = makeInfiniteListApiReducer({ actionTypes, initialState: { totalOffset: 20 } });

        expect(
            reducer(
                undefined,
                makeAction('succ', {
                    payload: { ids: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
                    meta: { lastSuccessAt: 'today', totalCount: 30 },
                }),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: true,
            lastSuccessAt: 'today',
            hasMore: false,
            payloadSize: 10,
            totalCount: 30,
            totalOffset: 29,
        });
    });

    it('should set error state on failure', () => {
        const reducer = makeInfiniteListApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('fail', { error: 'err' }))).toEqual({
            inProgress: false,
            cancelled: false,
            error: 'err',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            payloadSize: 10,
            totalCount: 0,
            totalOffset: 0,
        });
    });

    it('should reset to initial state on reset', () => {
        const reducer = makeInfiniteListApiReducer({ actionTypes });

        expect(
            reducer(
                {
                    inProgress: false,
                    cancelled: false,
                    error: '',
                    success: true,
                    lastSuccessAt: 'yesterday',
                    hasMore: true,
                    payloadSize: 20,
                    totalCount: 0,
                    totalOffset: 0,
                },
                makeAction('res'),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            payloadSize: 10,
            totalCount: 0,
            totalOffset: 0,
        });
    });

    it('should update state on update action', () => {
        const reducer = makeInfiniteListApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('upd', { payload: { cancelled: true, error: 'cancelled' } }))).toEqual({
            inProgress: false,
            cancelled: true,
            error: 'cancelled',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            payloadSize: 10,
            totalCount: 0,
            totalOffset: 0,
        });
    });
});
