import apiRequestActions from '../apiRequestActions';
import { apiRequestType } from '../../../utilities/apiRequestType';

describe('apiRequestActions - list', () => {
    const types: Record<string, string> = apiRequestType({
        modulePrefix: 'articles',
        typePrefix: 'FETCH_ARTICLES_',
    });
    let actions: any;

    beforeEach(() => {
        actions = apiRequestActions(types);
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
            meta,
            payload,
            type: types.FETCH_ARTICLES_SUCCESS,
        });
    });

    it('creates failure action', () => {
        const error = { id: 'error.api.general' };

        expect(actions.fetchArticlesFailure(error)).toEqual({
            error,
            type: types.FETCH_ARTICLES_FAILURE,
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

describe('apiRequestActions - detail', () => {
    const types: Record<string, string> = apiRequestType({
        modulePrefix: 'articles',
        typePrefix: 'FETCH_ARTICLE_',
    });
    let actions: any;

    beforeEach(() => {
        actions = apiRequestActions(types, { isDetailRequest: true });
    });

    it('creates actions from given types', () => {
        expect(typeof actions.fetchArticleRequest).toBe('function');
        expect(typeof actions.fetchArticleSuccess).toBe('function');
        expect(typeof actions.fetchArticleFailure).toBe('function');
        expect(typeof actions.fetchArticleCancel).toBe('function');
        expect(typeof actions.fetchArticleReset).toBe('function');
    });

    it('creates fetch action', () => {
        expect(actions.fetchArticleRequest(45)).toEqual({
            type: types.FETCH_ARTICLE_REQUEST,
            meta: {
                id: 45,
            },
            payload: {},
        });
    });

    it('creates success action', () => {
        const payload = { id: 1, title: 'Test 1' };

        expect(actions.fetchArticleSuccess(1, payload)).toEqual({
            payload,
            type: types.FETCH_ARTICLE_SUCCESS,
            meta: { id: 1 },
        });
    });

    it('creates failure action', () => {
        const error = { id: 'error.api.general' };

        expect(actions.fetchArticleFailure(45, error)).toEqual({
            error,
            type: types.FETCH_ARTICLE_FAILURE,
            meta: { id: 45 },
        });
    });

    it('creates cancel action', () => {
        expect(actions.fetchArticleCancel(45)).toEqual({
            type: types.FETCH_ARTICLE_CANCEL,
            meta: { id: 45 },
        });
    });

    it('creates reset action', () => {
        expect(actions.fetchArticleReset(45)).toEqual({
            type: types.FETCH_ARTICLE_RESET,
            meta: { id: 45 },
        });
    });
});
