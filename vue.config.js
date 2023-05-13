const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        zlib: require.resolve('browserify-zlib')
      }
    }
  }
}
)
