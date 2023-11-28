import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteAliases } from 'vite-aliases'

// 自动导入vue函数
import AutoImport from 'unplugin-auto-import/vite'

// 自动导入vue组件
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'

// import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        // presetIcons({
        //   extraProperties: {
        //     display: "inline-block",
        //     "vertical-align": "middle",
        //   },
        //   collections: {
        //     custom: FileSystemIconLoader(iconDirectory),
        //   },
        // }),
      ],
    }),
    vue(),
    ViteAliases({
      deep: true,
      prefix: '@',
    }),
    AutoImport({
      imports: ['vue'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components(),
  ],
  server: {
    host: 'localhost', // 替换成你实际使用的主机地址
    port: 9000,
    open: true, // 这里开启自动打开浏览器是可选项
  },
})
