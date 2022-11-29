/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        defineOptions: 'readonly',
        NodeJS: 'readonly',
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier',
    ],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                // 在语句末尾打印分号
                semi: true,
                // 使用单引号而不是双引号
                singleQuote: true,
                // 指定HTML文件的全局空格敏感度 css\strict\ignore
                htmlWhitespaceSensitivity: 'ignore',
                endOfLine: 'lf',
                // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
                arrowParens: 'avoid',
            },
        ],
        'no-var': 'error',
        'prefer-const': 'error',
        'no-alert': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'off', // 关闭any类型的警告
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-vars': [
            'error',
            {
                ignorePattern: '^_',
            },
        ],
        'vue/no-lone-template': [
            'error',
            {
                ignoreAccessible: false,
            },
        ],
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: false,
                ignores: ['/^el-/', '/^px-/', 'component'],
            },
        ],
        // "vue/max-attributes-per-line": ["error", {
        //   "singleline": { "max": 3 },
        //   "multiline": { "max": 1 }
        // }],
        'vue/block-lang': ['error', { script: { lang: 'ts' } }],
        'vue/component-api-style': [
            'error',
            ['script-setup'], // "script-setup", "composition", "composition-vue2", or "options"
        ],
        'vue/define-macros-order': [
            'error',
            {
                order: ['defineProps', 'defineEmits'],
            },
        ],
        'vue/html-comment-content-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
            {
                exceptions: [],
            },
        ],
        'vue/html-comment-indent': ['error', 2],
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-ref-object-destructure': 'error',
        'vue/no-undef-components': [
            'error',
            {
                ignorePatterns: ['el(\\-\\w+)+', 'px(\\-\\w+)+', 'RouterLink', 'RouterView'],
            },
        ],
        'vue/no-undef-properties': [
            'error',
            {
                ignores: ['/^\\$/'],
            },
        ],
        'vue/no-unsupported-features': [
            'error',
            {
                version: '^3.2.25',
                ignores: [],
            },
        ],
        'vue/no-unused-refs': 'error',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/padding-line-between-tags': ['error', [{ blankLine: 'always', prev: '*', next: '*' }]],
        'vue/prefer-prop-type-boolean-first': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/prefer-true-attribute-shorthand': ['error', 'always'],
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style'],
            },
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            },
        ],
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
    },
}
