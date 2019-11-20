import { config, ReduxUtilsError } from '../config';

import configBasicApiReducer from '../config/reducers/basicApiReducer';
import configPaginationApiReducer from '../config/reducers/paginationApiReducer';
import configInfiniteListReducer from '../config/reducers/infiniteListApiReducer';
import configContainerReducer from '../config/reducers/containerReducer';

config.init = false;

export default function configure(customConfig = {}) {
    if (config.init) {
        throw new ReduxUtilsError(`The 'configure' method may be called only once.`);
    }

    config.init = true;

    config.basicApiReducer = configBasicApiReducer(customConfig.basicApiReducer);
    config.paginationApiReducer = configPaginationApiReducer(customConfig.paginationApiReducer);
    config.infiniteListApiReducer = configInfiniteListReducer(customConfig.infiniteListApiReducer);
    config.containerReducer = configContainerReducer(customConfig.containerReducer);

    config.logger = customConfig.logger || config.logger;

    Object.freeze(config);
}
