module.exports = {
    root: true,
    env: {
        node: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            legacyDecorators: true
        },
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'class-methods-use-this': 0,
        'no-continue': 0,
        'no-mixed-operators': 0,
        'no-restricted-syntax': 0,
        'import/no-named-as-default-member': 0,
        'comma-dangle': ['error', 'never'],
        camelcase: [0, { properties: 'always' }],
        'spaced-comment': [0, 'always'],
        'func-names': 0,
        'no-await-in-loop': 0,
        radix: 0,
        indent: 0,
        semi: [2, 'never'],
        'space-before-function-paren': ['error', 'always'],
        'template-curly-spacing': ['error', 'always'],
        'no-underscore-dangle': 0,
        'no-param-reassign': 0,
        'arrow-body-style': ['error', 'always'],
        'max-len': ['error', 120, 4, { ignoreUrls: true, ignoreTrailingComments: true }],
        'import/extensions': 0,
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 0
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 1,
                allowFirstLine: true
            }
        }],
        'vue/comment-directive': 0
    }
}
