module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off', // 关闭 no-console 规则
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
