const path = require('path');
const { babelAliases } = require('./config/aliases');

const config = {
    presets: [
        '@babel/preset-typescript',
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                corejs: '3.x',
                loose: true,
                modules: process.env.BABEL_ENV === 'es' ? false : 'commonjs',
                bugfixes: true,
                browserslistEnv: 'production',
            },
        ],
    ],
    plugins: [
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
    ],
    ignore: process.env.BABEL_ENV === 'test' ? [] : ['**/__tests__/', '**/*.test.ts'],
};

module.exports = config;
