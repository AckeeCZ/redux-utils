# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.4.3 - 2020-08-11

### Fixes

-   Fixes babel config.

## 2.4.1 - 2020-08-11

### Added

-   Add jsdocs comments.

### Updated

-   Upgrade `@ackee/browserslist-config`.
-   Update babel config.

## 2.4.0 - 2020-07-01

### Added

-   `infiniteListApiReducer` - add `totalCount` prop support.

## 2.3.3 - 2020-06-07

### Updated

-   Disable `debug` option in babel config.

## 2.3.2 - 2020-06-07

### Added

-   Add shared browserslist - `@ackee/browserslist-config`.

### Updated

-   Upgrade dependencies.

## 2.3.0 - 2020-05-19

-   Reset `lastSuccessAt` prop only on `SUCCESS`, `RESET` and `UPDATE`. Don't reset it on `REQUEST`.

## 2.2.2 - 2020-03-18

### Fixed

-   Set return values of `actionFilters` of api reducers by default to `true` (as it has been already written in documentation).

## 2.2.1 - 2019-11-20

### Fixed

-   Custom `basicApiReducer` initial state propagates to `inititeListApiReducer` and `paginationApiReducer` initial state.

## 2.2.0 - 2019-11-20

### Added

-   `infiniteListApiReducer`

## 2.1.1 - 2019-11-15

### Updated

-   Upgrade dependencies.
-   Babel config
    -   Use `@babel/preset-modules` for `/es` output -> decreased package size.
    -   Enable `loose` option -> decreased package size.

## 2.1.0 - 2019-11-11

### Updated

-   `configure`: make possible configure `basicApiReducer`, `paginationApiReducer` and `containerReducer` globally.

## 2.0.0 - 2019-09-02

-   `paginationApiReducer`: use condition `hasMore = currentCount >= state.limit` instead of `hasMore = currentCount >= state.amount`

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
