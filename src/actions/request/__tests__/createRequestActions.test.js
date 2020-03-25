import requestActions from '../requestActions';
import { asyncType } from '../../../utilities/asyncType';

describe('createRequestActions', () => {
    const types = asyncType({
        modulePrefix: 'articles',
        typePrefix: 'FETCH_ARTICLES_',
    });
    let actions;

    beforeEach(() => {
        actions = requestActions(types);
    });

    it('creates actions from given types', () => {
        expect(typeof actions.fetchArticlesRequest).toBe('function');
        expect(typeof actions.fetchArticlesSuccess).toBe('function');
        expect(typeof actions.fetchArticlesFailure).toBe('function');
        expect(typeof actions.fetchArticlesCancel).toBe('function');
        expect(typeof actions.fetchArticlesReset).toBe('function');
    });

    it('creates fetch action', () => {
        const params = { page: 2, limit: 10, state: 'active' };

        expect(actions.fetchArticlesRequest(params)).toEqual({
            type: types.FETCH_ARTICLES_REQUEST,
            payload: {
                ...params,
            },
        });
    });

    it('creates success action', () => {
        const payload = [
            { id: 1, title: 'Test 1' },
            { id: 2, title: 'Test 2' },
        ];
        const meta = { totalCount: 4 };

        expect(actions.fetchArticlesSuccess(payload, meta)).toEqual({
            type: types.FETCH_ARTICLES_SUCCESS,
            meta,
            payload,
        });
    });

    it('creates failure action', () => {
        const error = { id: 'error.api.general' };

        expect(actions.fetchArticlesFailure(error)).toEqual({
            type: types.FETCH_ARTICLES_FAILURE,
            error,
        });
    });

    it('creates cancel action', () => {
        expect(actions.fetchArticlesCancel()).toEqual({
            type: types.FETCH_ARTICLES_CANCEL,
        });
    });

    it('creates reset action', () => {
        expect(actions.fetchArticlesReset()).toEqual({
            type: types.FETCH_ARTICLES_RESET,
        });
    });
});
