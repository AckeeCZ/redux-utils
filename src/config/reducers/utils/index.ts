const defaultCustomConfigure = config => config;

export const mergeConfigs = <Config>(
    defaults: Config,
    customConfigure: (c: Config) => Config = defaultCustomConfigure,
) => customConfigure(defaults);
