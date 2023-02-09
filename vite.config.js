import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import DefineOptions from 'unplugin-vue-define-options/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

// https://cn.vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 9600,
    proxy: {
      '/api': {
        target: 'https://cn.vitejs.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    port: 9601,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    // DefineOptions(),
    // vueJsx(),
    // AutoImport({
    //   // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    //   imports: ['vue'],
    //   // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      // 自动注册 Element Plus 组件和图标组件
      resolvers: [ElementPlusResolver(), IconsResolver()],
    }),
    Icons({ autoInstall: true }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
    }),
  ],
})
