const aliases = {
    Src: '',
    Config: 'config',
    Consts: 'constants',
    Reducers: 'reducers',
    Selectors: 'selectors',
    Utils: 'utilities',
};

const createAliasesForJest = () => {
    const resolvedAliases = {};

    for (const [alias, aliasPath] of Object.entries(aliases)) {
        resolvedAliases[`^${alias}(.*)$`] = `<rootDir>/src/${aliasPath}$1`;
    }

    return resolvedAliases;
};

const createAliasesForBabel = () => {
    const babelAliases = {};

    for (const [alias, aliasPath] of Object.entries(aliases)) {
        babelAliases[alias] = `./src/${aliasPath}`;
    }

    return babelAliases;
};

module.exports = {
    jestAliases: createAliasesForJest(),
    babelAliases: createAliasesForBabel(),
};
