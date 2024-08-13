import { ConfigEnv, defineConfig } from 'vite';

export default defineConfig((config: ConfigEnv) => {
    console.log('config', config)
    return {
        server: {
            port: 3000,
            open: true
        }
    }
})