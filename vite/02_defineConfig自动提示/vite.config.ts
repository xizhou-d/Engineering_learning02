import { ConfigEnv, defineConfig } from 'vite';
// 直接用 ESM 的方式引入 path，会报错，原因是没找到类型；可以安装 @types/node
import path from 'path' 

export default defineConfig((config: ConfigEnv) => {
    console.log('config', config)
    // config:
    //      - mode: 'development'   // package.json 中的指令后边跟一个 --mode XXX, 会直接反应到 mode 上
    //      - command: 'serve
    //      - isSsrBuild: false,
    //      - isPreview: false

    // 可以根据 mode 不同的模式进行不同的配置
    return {
        server: {
            port: 3000,
            open: true
        }
    }
})