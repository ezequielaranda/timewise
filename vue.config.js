module.exports = {
  publicPath: '',
  outputDir: 'extension/dist',
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  css: {
    extract: false,
  },
  filenameHashing: false,
}