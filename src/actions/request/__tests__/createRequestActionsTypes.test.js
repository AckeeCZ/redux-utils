import requestActionsTypes from '../requestActionsTypes';

describe('createRequestActionsTypes', () => {
    let types;
    let actions;

    beforeEach(() => {
        const obj = requestActionsTypes({
            modulePrefix: 'articles',
            typePrefix: 'FETCH_ARTICLES_',
        });

        // eslint-disable-next-line prefer-destructuring
        types = obj.types;
        // eslint-disable-next-line prefer-destructuring
        actions = obj.actions;
    });

    it('creates object with types and actions', () => {
        expect(typeof types).toBe('object');
        expect(typeof actions).toBe('object');
    });

    it('creates types', () => {
        expect(types.FETCH_ARTICLES_REQUEST).toBe('articles/FETCH_ARTICLES_REQUEST');
        expect(types.FETCH_ARTICLES_SUCCESS).toBe('articles/FETCH_ARTICLES_SUCCESS');
        expect(types.FETCH_ARTICLES_FAILURE).toBe('articles/FETCH_ARTICLES_FAILURE');
        expect(types.FETCH_ARTICLES_CANCEL).toBe('articles/FETCH_ARTICLES_CANCEL');
        expect(types.FETCH_ARTICLES_RESET).toBe('articles/FETCH_ARTICLES_RESET');
    });
});
