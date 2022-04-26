const { defineConfig } = require("@vue/cli-service")
const { VUE_APP_PROXY_HOST, VUE_APP_ENV } = process.env

module.exports = defineConfig({
  assetsDir: "static",
  outputDir: `dist-${VUE_APP_ENV}`,
  // 是否打包生成map文件
  productionSourceMap: false,
  devServer: {
    port: 9600,
    proxy: {
      "/worldlet_interface": {
        target: VUE_APP_PROXY_HOST || "",
        changeOrigin: true,
      },
      "/media": {
        target: VUE_APP_PROXY_HOST || "",
        changeOrigin: true,
      },
    },
  },
  chainWebpack(config) {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch")
    // 设置标签页标题
    config.plugin("html").tap((args) => {
      args[0].title = "Worldlet"
      return args
    })
  },
})
