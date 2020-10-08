module.exports = {
    transpileDependencies: ['vuex-module-decorators'],
    devServer: {
        port:'8080',
      proxy: 'https://localhost',
  }
}