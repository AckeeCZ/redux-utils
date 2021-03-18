const path = require('path');
const { babelAliases } = require('./config/aliases');

const config = {
    presets: [
        '@babel/preset-typescript',
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
        '@babel/proposal-class-properties',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        [
            'babel-plugin-custom-import-path-transform',
            {
                transformImportPath: path.resolve(__dirname, 'scripts/transformImportPath.js'),
            },
        ],
        [
            'babel-plugin-module-resolver',
            {
                alias: babelAliases,
                root: ['./src'],
            },
        ],
        '@babel/plugin-proposal-object-rest-spread',
        [
            '@babel/plugin-transform-runtime',
            {
                useESModules: false,
                regenerator: false,
                helpers: true,
            },
        ],
    ],
    ignore: process.env.BABEL_ENV === 'test' ? [] : ['**/__tests__/', '**/*.test.ts'],
};

module.exports = config;
