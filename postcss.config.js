module.exports = {
    plugins: {
        'postcss-import': {},
        '@tailwindcss/postcss': {},
        'postcss-preset-env': {
            stage: 3, // Adjust stage as needed
            features: {
                'nesting-rules': true,
            },
        },
        autoprefixer: {},
    },
};