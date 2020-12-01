const { jestAliases } = require('./config/aliases');

module.exports = {
    roots: ['<rootDir>/src'],
    testPathIgnorePatterns: ['/node_modules', '/lib', '/es'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: jestAliases,
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
};
