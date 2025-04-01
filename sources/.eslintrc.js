module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'object-curly-spacing': ['error', 'always']
    }
}
