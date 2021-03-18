import { apiRequestType, createApiRequestType } from './apiRequestType';

describe('apiRequestType', () => {
    it('creates types', () => {
        const types: Record<string, string> = apiRequestType({
            types: ['REQUEST', 'SUCCESS', 'FAILURE'],
        });

        expect(types).toEqual({
            REQUEST: 'REQUEST',
            SUCCESS: 'SUCCESS',
            FAILURE: 'FAILURE',
        });
    });

    it('creates types with a type and module prefix', () => {
        const types: Record<string, string> = apiRequestType({
            typePrefix: 'FETCH_',
            modulePrefix: 'articles',
        });

        expect(types).toEqual({
            FETCH_REQUEST: 'articles/FETCH_REQUEST',
            FETCH_SUCCESS: 'articles/FETCH_SUCCESS',
            FETCH_FAILURE: 'articles/FETCH_FAILURE',
            FETCH_RESET: 'articles/FETCH_RESET',
            FETCH_CANCEL: 'articles/FETCH_CANCEL',
        });
    });
});

describe('createApiRequestType', () => {
    it('creates a factory with module prefix', () => {
        const createTypes: Function = createApiRequestType({ modulePrefix: 'articles' });
        const types: Record<string, string> = createTypes({ typePrefix: 'FETCH_' });

        expect(typeof createTypes).toBe('function');
        expect(types).toEqual({
            FETCH_REQUEST: 'articles/FETCH_REQUEST',
            FETCH_SUCCESS: 'articles/FETCH_SUCCESS',
            FETCH_FAILURE: 'articles/FETCH_FAILURE',
            FETCH_RESET: 'articles/FETCH_RESET',
            FETCH_CANCEL: 'articles/FETCH_CANCEL',
        });
    });
});
