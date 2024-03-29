import { config, CustomConfig, ReduxUtilsError } from '../config';

import configBasicApiReducer from '../config/reducers/basicApiReducer';
import configPaginationApiReducer from '../config/reducers/paginationApiReducer';
import configInfiniteListReducer from '../config/reducers/infiniteListApiReducer';
import configContainerReducer from '../config/reducers/containerReducer';

config.init = false;

export default function configure(customConfig: CustomConfig = {}) {
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
