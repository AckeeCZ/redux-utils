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
                'babel-plugin-module-resolver',
                {
                    alias: babelAliases,
                },
            ],
            '@babel/plugin-transform-runtime',
        ],
        presets: presets[api.env()],
        ignore: ['**/__tests__/', '**/*.test.js'],
    };
};
