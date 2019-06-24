const { babelAliases } = require('./config/aliases');

module.exports = {
    presets: [
        [
            '@babel/env',
            {
                modules: process.env.BABEL_ENV === 'es' ? false : 'auto',
            },
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        [
            'babel-plugin-module-resolver',
            {
                alias: babelAliases,
            },
        ],
        '@babel/plugin-transform-runtime',
    ],
    ignore: ['**/__tests__/', '**/*.test.js'],
};
