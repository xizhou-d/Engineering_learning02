import { defineConfig } from 'rollup'

export default defineConfig({
    input: 'src/index.ts',
    output: {
        file: 'dist/esm/index.js',
        format: 'esm',
        name: 'rollup-npm'
    }
})