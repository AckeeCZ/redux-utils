import { config, ReduxUtilsError } from '../config';

config.init = false;

export default function configure(customConfig = {}) {
    if (config.init) {
        throw new ReduxUtilsError(`The 'configure' method may be called only once.`);
    }

    config.init = true;

    Object.assign(config, customConfig);
    Object.freeze(config);
}
