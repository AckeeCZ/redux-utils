const { babelAliases } = require('./config/aliases');

const config = {
    presets: [],
    plugins: [
        [
            'babel-plugin-module-resolver',
            {
                alias: babelAliases,
                root: ['./src'],
            },
        ],
    ],
    ignore: process.env.BABEL_ENV === 'test' ? [] : ['**/__tests__/', '**/*.test.js'],
};

if (process.env.BABEL_ENV === 'es') {
    config.presets.push([
        '@babel/modules',
        {
            loose: true,
        },
    ]);
} else {
    config.presets.push([
        '@babel/env',
        {
            loose: true,
        },
    ]);

    config.plugins.push(...['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime']);
}

module.exports = config;