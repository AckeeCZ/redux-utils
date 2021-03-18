import { convertTypeToActionName } from '../utils';

describe('utils', () => {
    it('converts unprefixed type', () => {
        expect(convertTypeToActionName('FETCH_ARTICLES_REQUEST')).toBe('fetchArticlesRequest');
    });

    it('converts prefixed type', () => {
        expect(convertTypeToActionName('articles/FETCH_ARTICLES_REQUEST')).toBe('fetchArticlesRequest');
    });
});
