const path = require('path');

module.exports = {
    extends: ['@ackee/eslint-config', 'prettier'],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, './src')],
                extensions: ['.ts'],
            },
        },
    },
};
