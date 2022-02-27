// 生产环境下的webpack配置
const path = require('path')
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
//css分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//压缩css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//安装 2 版本
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'js/bundle.[hash:8].js',
    path: path.
      resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // 样式模块规则
      {
        test: /\.(css|less)$/,
        // 顺序从下往上
        use: [
          // 将解析之后的css添加到页面的 style 标签内
          // 'style-loader',
          {
            loader: MiniCssExtractPlugin.loader
          },
          // 先解析 css 模块
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      // new UglifyJsPlugin()
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions:{
          compress:{
            pure_funcs:['console.log']
          }
        }
      }),
    ],
  },
  plugins:[
    new webpack.DefinePlugin({
      ENV:JSON.stringify('production')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new CleanWebpackPlugin(),
  ]
})