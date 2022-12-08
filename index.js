/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

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
        'eslint:recommended',
        'plugin:vue/vue3-essential',
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
        'prettier/prettier': ['error', { semi: true, singleQuote: true }],

        // js/ts
        camelcase: ['error', { properties: 'never' }],
        'no-console': ['warn', { allow: ['error'] }],
        'no-debugger': 'warn',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
        'no-return-await': 'error',
        'no-var': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'prefer-const': [
            'warn',
            { destructuring: 'all', ignoreReadBeforeAssign: true },
        ],
        'prefer-arrow-callback': [
            'error',
            { allowNamedFunctions: false, allowUnboundThis: true },
        ],
        'object-shorthand': [
            'error',
            'always',
            { ignoreConstructors: false, avoidQuotes: true },
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'error',

        // best practice
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'sort-imports': [
            'warn',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],

        // ts
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            { disallowTypeAnnotations: false },
        ],
        '@typescript-eslint/ban-ts-comment': ['off', { 'ts-ignore': false }],

        // vue
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-explicit-emits': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/prefer-import-from-vue': 'off',
        'vue/no-v-text-v-html-on-component': 'off',
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

        // best practice
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
        'vue/block-lang': ['error', { script: { lang: ['ts', 'tsx'] } }],
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
                ignorePatterns: [
                    'el(\\-\\w+)+',
                    'px(\\-\\w+)+',
                    'RouterLink',
                    'RouterView',
                ],
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
        'vue/padding-line-between-tags': [
            'error',
            [{ blankLine: 'always', prev: '*', next: '*' }],
        ],
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
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always',
            },
        ],
    },
};
