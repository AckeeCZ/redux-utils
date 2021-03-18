export const mergeConfigs = (defaults, customConfigure = config => config) => customConfigure(defaults);
