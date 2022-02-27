const path = require('path');
// 使用插件帮助我们自动创建 html 文件，并且自动引入对应的打包好之后的 js 文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 下载 vue-loader 自带的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//webpack 配置
module.exports = {
  //入口文件  打包编译哪个文件
  entry: ['babel-polyfill', './src/main.js'],
  //出口文件  编译完成之后的文件
  // output: {
  //   filename: 'bundle.js',
  //   path: path.
  //     resolve(__dirname, 'dist')
  // },
  // 开发环境中的工具 source-map 将编译好之后的代码内的错误和警告映射到源代码中
  // devtool: 'eval-source-map',
  //开发服务器  监听的文件夹内容  ./dist下的
  // 1. dist 下的内容起在了服务器上 http://localhost:8080 下
  // 2. 当入口文件被修改的时候，会自动重新编译并且重新载入新的编译之后的文件
  // devServer: {
  //   contentBase: './public',
  //   //热重载
  //   // 启用热模块替换功能，也就是说当更新入口文件内容的时候无序刷新整个页面，局部热替换
  //   hot: true,
  //   // 控制台(console)显示消息
  //   clientLogLevel: 'none',
  //   //端口号
  //   port: 8000
  // },
  // 引入 loader 功能，需要在 module 对象内的 rules 属性下添加对应的 loader
  module: {
    rules: [
  //     // 样式模块规则
  //     {
  //       test: /\.(css|less)$/,
  //       // 顺序从下往上
  //       use: [
  //         // 将解析之后的css添加到页面的 style 标签内
  //         'style-loader',
  //         // 先解析 css 模块
  //         'css-loader',
  //         'postcss-loader',
  //         'less-loader'
  //       ]
  //     },
      // {
      //   test: /\.less$/,
      //   use: ['less-loader'] // 将 Less 编译为 CSS
      // },
      // 图片模块
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              esModule: false
            }
          }
        ]
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      // vue 组件模块
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, 
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
         // 这里的 babel-loader 是编译 js 的工具 我们并没有在这给这个 工具添加配置，而是使用了 babel 的默认配置文件 .babelrc 添加的配置，因为这个配置内还需要 给 element ui 设置按需加载。
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      }
    ]
  },
  //模块解析
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    },
    extensions: ['.vue', '.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    // 应用上  HtmlWebpackPlugin 插件功能，自动创建 html 文件，你可以在使用插件的时候 传递一些页面的配置
    // 页面时自动创建的里面基本上什么都没有，如果说你想要以某一个 html 模板创建 index.html 可以借助 html-webpack-template 插件设置
    new HtmlWebpackPlugin({
      // 设置 html 模板
      // title: '我的 webpack-dmeo'
      template: './public/index.html'
    }),
    // Vue-loader 插件
    new VueLoaderPlugin()
  ],
};

//入口   编译谁
//  出口  编译到哪
// loader 编译不同的模块   css png   vue   fonts
//plugin  额外的功能
// devServer 开发服务器
// devTool