const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 只能配置一个
  // 不能灵活控制走不走代理
  // devServer: {
    // 开启代理服务器
    // 只需要写到端口号 
    // 告诉服务器一会儿把请求转发给谁，就写谁
    // proxy: "http://localhost:5000"
  // }
  
  // 方式二
  
  devServer: {
    proxy: {
      // 请求前缀 
      // 如果请求前缀是/api 就把请求转发给http://localhost:5000
      '/api': {
        target: 'http://localhost:5000',        
        pathRewrite:{'^/api':''},  //转发给5000d的时候就只有/students
        ws: true,   //不写 默认为true 
        changeOrigin: true  //不写 默认为true
      },
      '/foo': {
        target: 'http://localhost:5001'
      }
    }
  }
})
