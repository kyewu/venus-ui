import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { VitePWA } from 'vite-plugin-pwa'
import Layouts from 'vite-plugin-vue-layouts-next'
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin'
import Markdown from 'unplugin-vue-markdown/vite'
import prism from 'markdown-it-prism'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    VueRouter({
      dts: 'src/typed-router.d.ts',
      routesFolder: 'src/pages',
      extensions: ['.vue', '.md'],
      exclude: ['**/components/*.vue'],
    }),
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        breaks: true,
        // Add any additional markdown-it options here
      },
      headEnabled: true,
      markdownItUses: [prism]
    }),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],
      imports: ['vue', VueRouterAutoImports, '@vueuse/core', 'pinia'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dts: 'src/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    VitePWA(),
    vueDevTools(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
      watchFiles: true,
      logger: true,
    }),
  ],
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000/', // 代理目标地址
        changeOrigin: true, // 是否改变源
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
      },
    }
  },
  define: {
    __IS_DEVELOPMENT__: JSON.stringify(mode === 'development'),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport8plugin({
          unitToConvert: 'px',
          viewportWidth: 750, // 设计稿宽度
          unitPrecision: 5, // 单位转换后保留的精度
          propList: [
            '*',
            '!border-radius',
            '!box-shadow',
            '!font-size',
            '!letter-spacing',
            '!line-height',
            '!margin',
            '!padding',
            '!text-indent',
            '!text-shadow',
            '!width',
            '!height',
            "!max-width",
            "!min-width"
          ], // 能转化为vw的属性列表
          viewportUnit: 'vw', // 希望使用的视口单位
          fontViewportUnit: 'vw', // 字体使用的视口单位
          selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
          minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
          mediaQuery: false, // 媒体查询里的单位是否需要转换单位
          replace: true, //  是否直接更换属性值，而不添加备用属性
          exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          include: /\/src\//, // 如果设置了include，那将只有匹配到的文件才会被转换
          landscape: true, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: 'vw', // 横屏时使用的单位
          landscapeWidth: 1024, // 横屏时使用的视口宽度
        }),
      ],
    },
  },
}))

