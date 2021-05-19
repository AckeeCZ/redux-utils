import { createApiRequestActions, createApiDetailRequestActions } from '../createApiRequestActions';

describe('createApiRequestActions', () => {
    it('creates actions for all defined action types', () => {
        const actions = createApiRequestActions({
            REQUEST: 'REQUEST',
            SUCCESS: 'SUCCESS',
            FAILURE: 'FAILURE',
            CANCEL: 'CANCEL',
            RESET: 'RESET',
        });

        expect(actions.request).toBeInstanceOf(Function);
        expect(actions.success).toBeInstanceOf(Function);
        expect(actions.failure).toBeInstanceOf(Function);
        expect(actions.cancel).toBeInstanceOf(Function);
        expect(actions.reset).toBeInstanceOf(Function);
    });

    it('creates actions only for required action types', () => {
        const actions = createApiRequestActions({
            REQUEST: 'REQUEST',
            SUCCESS: 'SUCCESS',
            FAILURE: 'FAILURE',
        });

        expect(actions.request).toBeInstanceOf(Function);
        expect(actions.success).toBeInstanceOf(Function);
        expect(actions.failure).toBeInstanceOf(Function);
        expect(actions.cancel).toBeUndefined();
        expect(actions.reset).toBeUndefined();
    });
});

describe('createApiDetailRequestActions', () => {
    it('creates actions for all defined action types', () => {
        const actions = createApiDetailRequestActions({
            REQUEST: 'REQUEST',
            SUCCESS: 'SUCCESS',
            FAILURE: 'FAILURE',
            CANCEL: 'CANCEL',
            RESET: 'RESET',
        });

        expect(actions.request).toBeInstanceOf(Function);
        expect(actions.success).toBeInstanceOf(Function);
        expect(actions.failure).toBeInstanceOf(Function);
        expect(actions.cancel).toBeInstanceOf(Function);
        expect(actions.reset).toBeInstanceOf(Function);
    });

    it('creates actions only for required action types', () => {
        const actions = createApiDetailRequestActions({
            REQUEST: 'REQUEST',
            SUCCESS: 'SUCCESS',
            FAILURE: 'FAILURE',
        });

        expect(actions.request).toBeInstanceOf(Function);
        expect(actions.success).toBeInstanceOf(Function);
        expect(actions.failure).toBeInstanceOf(Function);
        expect(actions.cancel).toBeUndefined();
        expect(actions.reset).toBeUndefined();
    });
});
