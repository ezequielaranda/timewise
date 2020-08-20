const path = require('path')

module.exports = {
  publicPath: '',
  outputDir: 'extension/dist',
  runtimeCompiler: true,
  productionSourceMap: false,
  // configureWebpack: {
  //   optimization: {
  //     splitChunks: false
  //   }
  // },
  // css: {
  //   extract: false,
  // },
  // filenameHashing: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/scss/common.scss'),
      ],
    },
  },
}