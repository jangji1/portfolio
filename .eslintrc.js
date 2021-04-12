module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    //'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'vue/order-in-components': 'error',
    'prefer-const': 'error',
    'vue/no-v-html': 'error',
    'vue/no-parsing-error': ['error', { 'control-character-in-input-stream': false }],
    'vue/html-closing-bracket-spacing': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    yoda: 'off',
    'no-return-assign': 'off',
    'no-multi-spaces': 'off',
    'spaced-comment': 'off',
    'padded-blocks': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    //'@typescript-eslint/camelcase': [
    //  'error',
    //  {
    //    allow: [
    //      '^mixin', // mixin convention
    //      '^ordr_',
    //      '^good_',
    //      '^buyr_', // payment params
    //      '^payment_',
    //      '^card_', // payment response
    //      '^special_',
    //      '^suddenly_', // promotion params
    //    ],
    //  },
    //],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': 'off',
    'import/no-mutable-exports': 'off',
  },
}
