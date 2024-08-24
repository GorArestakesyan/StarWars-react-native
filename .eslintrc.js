export default {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
  ],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Add any specific rules you need here
  },
};
