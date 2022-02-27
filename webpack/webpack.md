### webpack 静态模块打包器(浏览器不认识，需 webpack 打包编译 )

#### 起步

- 初始化项目为 node 项目 'npm init -y'
- 项目内安装 webpack 'npm install webpack webpack-cli --save-dev'
- 执行编译打包命令 `npx webpack`，会将 src 下的 index.js 打包编译到项目下的 dist 文件夹下的 main.js ，页面导入打包好的 js

#### 概念

- 入口(entry)
- 出口(output)
- loader(loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）) 如 css png vue fonts
- 插件(plugins)

#### 配置文件 webpack.config.js

##### 概念

- 入口文件 出口文件

```js
const path = require("path")
module.exports = {
  //入口文件  打包编译哪个文件
  entry: "./src/index.js",
  //出口文件  编译完成之后的文件
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}
```

##### 指南

- 开发服务器 devServer
  安装的是 webpack-dev-server@3 版本，需搭配 webpack@4 和 webpack-cli@3 使用
  - 监听的文件夹内容 ./dist 下的
  - dist 下的内容起在了服务器上 http://localhost:8080 下（默认只起在 8080 下）
  - 当入口文件被修改的时候，会自动重新编译并且重新载入新的编译之后的文件
  - 添加一个 script 脚本，可以直接运行开发服务器(dev server)："serve": "webpack-dev-server --open"
  ```js
  devServer: {
    contentBase: './public',
    //热重载
    // 启用热模块替换功能，也就是说当更新入口文件内容的时候无序刷新整个页面，局部热替换
    hot: true,
    // 控制台(console)显示消息(配置：开发中)
    clientLogLevel: 'none',
    //端口号
    port: 8000,
    // 当使用 vue 路由的时候，选择了  history 模式,在这个模式下，刷新非首页的页面，直接找不到 404,需要将该服务器下的所有页面请求 全部指向到 首页 index.html
    historyApiFallback:true
  },
  ```
- 管理资源
  - 加载 CSS
  ```js
  npm install --save-dev style-loader css-loader
  // 引入 loader 功能，需要在 module 对象内的 rules 属性下添加对应的 loader
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
          //安装 less、less-loader 解析less样式
          'less-loader'
        ]
      }
  ```
  - 加载 images 图像
    图片当作模块引入，解析之后相当于存在服务器下的图片
  ```js
  npm install --save-dev file-loader
  //图片模块
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
    'file-loader'
    ]
  }
  ```
- 开发环境中的工具 source-map
  将编译好之后的代码内的错误和警告映射到源代码中,具体的选择看需求[见文档](https://www.webpackjs.com/configuration/devtool/)(包括开发环境和生产环境 )

```js
devtool: "eval-source-map"
```

- 管理输出
  设定 HtmlWebpackPlugin

```js
  npm install --save-dev html-webpack-plugin
  // 使用插件帮助我们自动创建 html 文件(将原来的替换)，并且自动引入对应的打包好之后的 js 文件
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  plugins: [
      // 应用上  HtmlWebpackPlugin 插件功能，自动创建 html 文件，你可以在使用插件的时候 传递一些页面的配置
      // 页面时自动创建的里面基本上什么都没有，如果说你想要以某一个 html 模板创建 index.html 可以借助 html-webpack-template 插件设置
      new HtmlWebpackPlugin({
        // 设置 html 模板
        // title: '我的 webpack-dmeo'
        template: './public/index.html'
      })
  ]
```

##### loader

- vue-loader(加载和转译 Vue 组件)

```js
npm install -D vue-loader vue-template-compiler
// 下载 vue-loader 自带的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// vue 组件模块（解析vue组件）
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
plugins: [
    // Vue-loader 插件（解析组件内的内容--语法）
    new VueLoaderPlugin()
  ]
```

- babel-loader(解析 js 语法,加载 ES2015+ 代码，使用 Babel 转译为 ES5)

```js
// element-ui的按需加载 .babelrc 配置文件
npm install -D babel-loader @babel/core @babel/preset-env
rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        // 这里的 babel-loader 是编译 js 的工具 我们并没有在这给这个 工具添加配置，而是使用了 babel 的默认配置文件 .babelrc 添加的配置，因为这个配置内还需要 给 element ui 设置按需加载
        loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env']
        // }
      }
    }
  ]
```

- 解析 jsx 语法

```js
npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx -D
// 在 .babelrc 中
"plugins": ["transform-vue-jsx"]
```

- postcss-loader(使用 PostCSS 加载和转译 CSS/SSS 文件)
  使样式加上浏览器厂商前缀

```js
npm i -D postcss-loader autoprefixing
// 在 postcss.config.js中
// autoprefixer 使用的时候必须提供配置才能生效
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist:[
        "Android 4.1",
        'ios 7.1',
        'chrome > 31',
        'ff > 31',
        'ie >= 8'
        //所有浏览器的最新的俩个版本
        //'last 2 version'
      ],
      grid: true
    })
  ]
}
```
-babel-polyfill(做 ie9 兼容)  
```js
npm i -D babel-polyfill
// 入口文件内添加一个 babel-polyfill 
entry: ['babel-polyfill','./src/main.js'],
```

#### 其他快捷配置

- 在 package.json 添加一个 npm 脚本(npm script)：'"build": "webpack"',使用 npm run build 命令，来替代我们之前使用的 npx 命令
-

#### 其他知识点

- 原生事件的三种绑定形式
  - document.querySelector('.xxx').onclick = function(){console.log()}
  - document.querySelector('.xxx').addEventListener('click',function(){})
  - 在 html 标签内
  ```js
   <h1 onclick='fun()'></h1>
   <!-- 原生事件传递参数 参数必须是字符串格式 -->
  ```
- JSX 中不能写指令语法
