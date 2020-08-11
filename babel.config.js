const { babelAliases } = require('./config/aliases');

const config = {
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: false,
                loose: true,
                modules: process.env.BABEL_ENV === 'es' ? false : 'commonjs',
                bugfixes: true,
            },
        ],
    ],
    plugins: [
        [
            'babel-plugin-module-resolver',
            {
                alias: babelAliases,
            },
        ],
        '@babel/plugin-proposal-object-rest-spread',
        [
            '@babel/plugin-transform-runtime',
            {
                useESModules: true,
                regenerator: false,
                helpers: true,
            },
        ],
    ],
    ignore: ['**/__tests__/', '**/*.test.js'],
};

module.exports = config;
