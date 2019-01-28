const DEFAULT_SUFFIXES = ['_COMPLETED', '_SUCCEEDED', '_FAILED'];

export default function createType(prefix, suffixes = DEFAULT_SUFFIXES, modulePrefix = '') {
    const types = {
        [prefix]: modulePrefix ? `${modulePrefix}/${prefix}` : prefix,
    };

    for (const suffix of suffixes) {
        const type = `${prefix}${suffix}`;
        types[type] = modulePrefix ? `${modulePrefix}/${type}` : type;
    }

    return types;
}
