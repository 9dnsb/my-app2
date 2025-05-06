import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // ✅ Ignore all files and folders under src/app/generated
  {
    ignores: ['src/app/generated/**'],
  },

  // ✅ Apply standard Next.js + TypeScript config
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
]

export default eslintConfig
