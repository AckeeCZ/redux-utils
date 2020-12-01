const { webpackAliases } = require('./config/aliases');

module.exports = {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    resolve: {
        alias: webpackAliases,
    },
};
