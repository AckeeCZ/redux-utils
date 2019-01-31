module.exports = function(api) {
    const presets = {
        lib: ['@babel/env'],
        es: [
            [
                '@babel/preset-env',
                {
                    modules: false,
                },
            ],
        ],
    };

    return {
        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-export-namespace-from'],
        presets: presets[api.env()],
        ignore: ['**/__tests__/'],
    };
};
