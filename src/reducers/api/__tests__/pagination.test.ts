import { PaginationApiCustomParams } from '../../../config';
import makePaginationApiReducer from '../pagination/factoryReducer';

describe('Pagination api reducer', () => {
    const actionTypes: PaginationApiCustomParams['actionTypes'] = {
        REQUEST: 'req',
        FAILURE: 'fail',
        SUCCESS: 'succ',
        RESET: 'res',
        CANCEL: 'can',
        UPDATE: 'upd',
        SET_PAGE: 'page',
    } as const;

    const makeAction = (type: string, params?: {}) => ({
        type,
        ...params,
    });

    it('should use default initial state', () => {
        const reducer = makePaginationApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('foo'))).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            page: 1,
            amount: 4,
            totalCount: 0,
            limit: 20,
        });
    });

    it('should set in progress state on request', () => {
        const reducer = makePaginationApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('req'))).toEqual({
            inProgress: true,
            cancelled: false,
            error: '',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            page: 1,
            amount: 4,
            totalCount: 0,
            limit: 20,
        });
    });

    it('should set sucess state with provided hasMore on success', () => {
        const reducer = makePaginationApiReducer({ actionTypes });

        expect(
            reducer(
                undefined,
                makeAction('succ', {
                    payload: { ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] },
                    meta: { lastSuccessAt: 'today', totalCount: 30, currentCount: 19, hasMore: true },
                }),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: true,
            lastSuccessAt: 'today',
            hasMore: true,
            page: 1,
            amount: 4,
            totalCount: 30,
            limit: 20,
        });
    });

    it('should set sucess state with counted hasMore on success', () => {
        const reducer = makePaginationApiReducer({ actionTypes, initialState: {} });

        expect(
            reducer(
                undefined,
                makeAction('succ', {
                    payload: { ids: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
                    meta: { lastSuccessAt: 'yesterday', totalCount: 20, currentCount: 19 },
                }),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: false,
            error: '',
            success: true,
            lastSuccessAt: 'yesterday',
            hasMore: false,
            page: 1,
            amount: 4,
            totalCount: 20,
            limit: 20,
        });
    });

    it('should set error state on failure', () => {
        const reducer = makePaginationApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('fail', { error: 'err' }))).toEqual({
            inProgress: false,
            cancelled: false,
            error: 'err',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            page: 1,
            amount: 4,
            totalCount: 0,
            limit: 20,
        });
    });

    it('should reset to initial state on reset', () => {
        const reducer = makePaginationApiReducer({ actionTypes });

        expect(
            reducer(
                {
                    inProgress: false,
                    cancelled: false,
                    error: '',
                    success: true,
                    lastSuccessAt: 'yesterday',
                    hasMore: true,
                    page: 1,
                    amount: 4,
                    totalCount: 0,
                    limit: 20,
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
            page: 1,
            amount: 4,
            totalCount: 0,
            limit: 20,
        });
    });

    it('should update state on update action', () => {
        const reducer = makePaginationApiReducer({ actionTypes });

        expect(reducer(undefined, makeAction('upd', { payload: { cancelled: true, error: 'cancelled' } }))).toEqual({
            inProgress: false,
            cancelled: true,
            error: 'cancelled',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            page: 1,
            amount: 4,
            totalCount: 0,
            limit: 20,
        });
    });

    it('should set page if setPage action filter confirms it', () => {
        const reducer = makePaginationApiReducer({ actionTypes });

        expect(
            reducer(
                {
                    inProgress: false,
                    cancelled: true,
                    error: 'cancelled',
                    success: false,
                    lastSuccessAt: null,
                    hasMore: true,
                    page: 3,
                    amount: 4,
                    totalCount: 0,
                    limit: 20,
                },
                makeAction('page', { payload: { page: 4 } }),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: true,
            error: 'cancelled',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            page: 4,
            amount: 4,
            totalCount: 0,
            limit: 20,
        });
    });

    it('should not set page if setPage action filter rejects it', () => {
        const reducer = makePaginationApiReducer({ actionTypes, actionFilters: { setPage: () => false } });

        expect(
            reducer(
                {
                    inProgress: false,
                    cancelled: true,
                    error: 'cancelled',
                    success: false,
                    lastSuccessAt: null,
                    hasMore: true,
                    page: 2,
                    amount: 4,
                    totalCount: 0,
                    limit: 20,
                },
                makeAction('page', { payload: { page: 3 } }),
            ),
        ).toEqual({
            inProgress: false,
            cancelled: true,
            error: 'cancelled',
            success: false,
            lastSuccessAt: null,
            hasMore: true,
            page: 2,
            amount: 4,
            totalCount: 0,
            limit: 20,
        });
    });
});
