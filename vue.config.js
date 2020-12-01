//此项目服务器设置了cors跨域，所以其实不用代理也可以
module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api":{
        target: "http://mall-pre.springboot.cn",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
}