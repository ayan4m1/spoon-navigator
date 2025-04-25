import globals from 'globals';
import eslint from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
// eslint-disable-next-line import-x/default
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { flatConfigs as importConfigs } from 'eslint-plugin-import-x';
import { config, configs as typescriptConfigs } from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default config(
  eslint.configs.recommended,
  ...typescriptConfigs.recommended,
  importConfigs.recommended,
  importConfigs.typescript,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import-x/resolver': {
        node: {
          paths: ['./src/']
        }
      }
    }
  },
  prettierPlugin
);
