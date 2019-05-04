const { babelAliases } = require('./config/aliases');

module.exports = function(api) {
    const presets = {
        lib: ['@babel/env'],
        es: [
            [
                '@babel/env',
                {
                    modules: false,
                },
            ],
        ],
        test: ['@babel/env'],
    };

    return {
        plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-export-namespace-from',
            [
                require.resolve('babel-plugin-module-resolver'),
                {
                    alias: babelAliases,
                },
            ],
        ],
        presets: presets[api.env()],
        ignore: ['**/__tests__/'],
    };
};
