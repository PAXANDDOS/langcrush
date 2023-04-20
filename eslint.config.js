export default [
    {
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
        ],
        plugins: ['@typescript-eslint'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            parser: '@typescript-eslint/parser',
        },
        rules: {
            semi: 'error',
            'prefer-const': 'error',
            quotes: ['warn', 'single'],
        },
        ignores: [
            '.git/**',
            '.husky/**',
            'node_modules/**',
            'public/**',
            'dist/**',
            'dev-dist/**',
            '**/*.config.js',
        ],
    },
]
