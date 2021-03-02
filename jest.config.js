const { jestAliases } = require('./config/aliases');

module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: jestAliases,
};