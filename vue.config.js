/* eslint-disable */

// 引入配置及插件
const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const fs = require('fs')
const moment = require('moment')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 生产模式配置
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

// 获取 build 的时间并写入
const date = moment(Date.now()).format('YYYYMMDD')
const time = moment(Date.now()).format('HHmmss')
const timeData = '{"t": "' + date + 'T' + time + '+0800"}'
fs.writeFile('./temp/build-time.json', timeData, err => {
   // 如果 build 时间写入成功，返回 null
   if(err === null) {
      console.log('[buildTimer] build 时间写入成功！')
   } else {
      console.log('[buildTimer] build 时间写入失败，详情请参阅：\n' + err)
   }
})

module.exports = defineConfig({

   transpileDependencies: true,
   indexPath: 'index.html',
   outputDir: process.env.outputDir || 'dist',
   assetsDir: 'assets',

   configureWebpack: config => {
      // gzip 处理
      const plugins = [];
      if (IS_PROD) {
         plugins.push(
            new CompressionWebpackPlugin({
               filename: "[path].gz[query]",
               algorithm: "gzip",
               test: productionGzipExtensions,
               threshold: 10240,
               minRatio: 0.8
            })
         )
      }

      // 分析各个模板编译时长
      config.plugins.push(
         new SpeedMeasurePlugin()
      )

   },

   // chunk 拆分
   chainWebpack: config => {
      config.optimization.splitChunks({
         chunks: 'all',
         cacheGroups: {
            vendor: {
               name: 'vendors',
               test: /[\\/]node_modules[\\/]/,
               priority: 10,
               chunks: 'initial'
            },
            mdui: {
               name: 'chunks',
               priority: 20,
               test: /[\\/]node_modules[\\/]_?mdui(.*)/
            },
            commons: {
               name: 'common',
               test: resolve('src/components'),
               priority: 5,
               reuseExistingChunk: true
            },
         },
      })
      config.optimization.runtimeChunk({
         name: 'runtime'
      })
   },

   devServer: {
      host: "localhost",
      port: 8080,
      open: false
   }
})
