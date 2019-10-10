const path = require("path");
module.exports = {
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        }
      }
  },
  devServer: {
    proxy: {
      "/wangyi":{
        target: "http://m.you.163.com",
        pathRewrite: { "^/wangyi": "" },
        changeOrigin: true
      },
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      },
    }
  },
  /* 编写webpack支持的配置 */
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve(__dirname, "src"),
        components: path.resolve("src/components"),
        pages: path.resolve("src/pages"),
        assets: path.resolve("src/assets")
      }
    }
  }
};
