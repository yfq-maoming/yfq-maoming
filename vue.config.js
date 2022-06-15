const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  productionSourceMap:false,
  //关闭eslint
  lintOnSave:false,
  //代理服务器
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn',
        // pathRewrite:{"/api":''}
      }
    }
  }
}