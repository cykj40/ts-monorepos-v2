import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const __filename = fileURLToPath(import.meta.url) as string
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const __dirname = dirname(__filename) as string

export default defineConfig([
	eslint.configs.recommended,
	tseslint.configs.strictTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.mts', '*.mjs'],
				},
				tsconfigRootDir: __dirname,
			},
		},
	},
	{
		files: ['src/**/*.ts', 'tests/**/*.ts'],
		rules: {
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{ allowNumber: true, allowBoolean: true },
			],
		},
	},
	{
		ignores: ['**/assets/**/*', '**/dist/**/*', '**/node_modules/**/*', 'packages/**/*'],
	},
	{
		files: ['**/tailwind.config.js'],
		rules: {},
	},
	{
		files: ['**/postcss.config.cjs'],
		languageOptions: {
			globals: {
				require: 'readonly',
				module: 'readonly',
				exports: 'readonly',
				process: 'readonly',
				console: 'readonly',
			},
		},
	},
])
