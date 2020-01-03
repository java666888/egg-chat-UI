module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                //名字可以自定义，这里我用的是api
                '/BackgroundImage': {
                  target: 'http://www.bing.com',//设置你调用的接口域名和端口号 别忘了加http 
                  changeOrigin: true,//这里设置是否跨域
                  pathRewrite: {
                    '^/BackgroundImage': ''
                  }
                },
                '/api': {
                  target: 'http://localhost:8081',//设置你调用的接口域名和端口号 别忘了加http 
                  changeOrigin: true,//这里设置是否跨域
                  pathRewrite: {
                    '^/api': ''
                  }
                }
            }
        }
    },
}