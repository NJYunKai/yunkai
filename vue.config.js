module.exports = {
    // 根路径 默认使用/ vue cli 3.3+ 弃用 baseUrl
    publicPath: './', // 此处改为 './' 即可
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8081',
        https: false,
        hotOnly: false, 
        proxy: {
            '/website/interface/': {
                target: 'http://localhost:8081', //API服务器的地址
                ws: true,  //代理websockets
                changeOrigin: true, // 虚拟的站点需要更管origin
                pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
                    // '^/api': '/website/interface/'
                }
            }
        },
    }
  }