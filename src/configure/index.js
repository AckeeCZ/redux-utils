import { config, ReduxUtilsError } from '../config';

import configBasicApiReducer from '../config/reducers/basicApiReducer';
import configPaginationApiReducer from '../config/reducers/paginationApiReducer';
import configInfiniteListReducer from '../config/reducers/infiniteListApiReducer';
import configContainerReducer from '../config/reducers/containerReducer';

config.init = false;

/**
 * Docs:https://github.com/ackeeCZ/redux-utils#configuration-optional
 *
 * @param {object} customConfig
 * @param {object} customConfig.basicApiReducer
 * @param {object} customConfig.paginationApiReducer
 * @param {object} customConfig.containerReducer
 * @param {object} customConfig.logger
 * @param {function} customConfig.logger.warn
 */
export default function configure(customConfig = {}) {
    if (config.init) {
        throw new ReduxUtilsError(`The 'configure' method may be called only once.`);
    }

    config.init = true;

    config.basicApiReducer = configBasicApiReducer(customConfig.basicApiReducer);
    config.paginationApiReducer = configPaginationApiReducer(
        customConfig.paginationApiReducer,
        config.basicApiReducer.initialState,
    );
    config.infiniteListApiReducer = configInfiniteListReducer(
        customConfig.infiniteListApiReducer,
        config.basicApiReducer.initialState,
    );
    config.containerReducer = configContainerReducer(customConfig.containerReducer);

    config.logger = customConfig.logger || config.logger;

    Object.freeze(config);
}
