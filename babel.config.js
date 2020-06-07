const { babelAliases } = require('./config/aliases');

const config = {
    presets: [
        [
            '@babel/env',
            {
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
        '@babel/plugin-transform-runtime',
    ],
    ignore: ['**/__tests__/', '**/*.test.js'],
};

module.exports = config;
