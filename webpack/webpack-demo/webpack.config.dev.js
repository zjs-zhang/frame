// 开发环境下的webpack配置
//安装版本不一样，导出方式不一样
const path = require('path')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const webpack = require('webpack')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.
      resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './public',
    //热重载
    // 启用热模块替换功能，也就是说当更新入口文件内容的时候无序刷新整个页面，局部热替换
    hot: true,
    // 控制台(console)显示消息
    clientLogLevel: 'none',
    //端口号
    port: 8000,
    historyApiFallback:true,
    //解决跨域请求
    proxy:{
      "/api":{
        target:'https://www.vue-js.com/api/v1',
        pathRewrite:{'^/api':''},
        changeOrigin:true
      }
    }
  },
  module: {
    rules: [
      // 样式模块规则
      {
        test: /\.(css|less)$/,
        // 顺序从下往上
        use: [
          // 将解析之后的css添加到页面的 style 标签内
          'style-loader',
          // 先解析 css 模块
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENV:JSON.stringify('development')
    })
  ]
});