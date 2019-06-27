# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0-beta.2 - 2019-06-27

### Updated

-   `paginationApiReducer`: `meta.hasMore` flag will set directly `hasMore` property. It's priority over `hasMore: currentCount >= totalCount` expression.

## 2.0.0-beta.1 - 2019-06-24

### Removed

-   Namespace for public exports, e.g.:

    ```js
    // before
    import { reducers } from '@ackee/redux-utils';
    const basicApiReducer = reducers.api.basic;
    const containerReducer = reducers.container.default;

    // now
    import { basicApiReducer, containerReducer } '@ackee/redux-utils';
    ```

-   `createType` utility in favor of `asyncType` utility.

### Updated

-   Rename some properties in `basicApiReducer`:
    -   `isFetching` -> `inProgress`
    -   `didInvalidate` -> `cancelled`
-   Initial `error` value in `basicApiReducer` is empty string now.

### Added

-   `configure` method

    ```js
    import { configure } from '@ackee/redux-utils';

    configure({
        // You can pass its own logger object
        // that must implement the same methods as the console object
        logger: console,
    });
    ```

-   `sideEffects` flag to `package.json`
