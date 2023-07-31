/* eslint-disable */

// 引入配置及插件
const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const fs = require('fs')
const childProcess = require('child_process')
const moment = require('moment')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// 生产模式配置
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

/* ----------- Build Info BEGIN ----------- */
// 获取 build 的时间
const buildDate = moment(Date.now()).format('YYYYMMDD')
const buildMoment = moment(Date.now()).format('HHmmss')
const buildTime = buildDate + 'T' + buildMoment + '+0800'
console.log('[buildInfo] 已获取构建时间：' + buildTime)
// 获取 git commit hash
const buildHash = childProcess.execSync('git rev-parse --short HEAD', { 'encoding': 'utf8' }).split('\n')[0]
console.log('[buildInfo] 已获取构建 commit hash：' + buildHash)
// 合并信息
const buildInfo = '{"time": "' + buildTime + '", "hash": "' + buildHash + '"}'
// 创建文件夹并写入文件
fs.mkdir('temp', err => {
   if(err === null) {
      console.log('[buildInfo] temp 文件夹创建成功！')
   } else {
      if(fs.existsSync('temp')) {
         console.log('[buildInfo] temp 文件夹已存在！')
      } else {
         console.warn('[buildInfo] 构建信息写入失败，详情请参阅：\n' + err)
      }
   }
})
fs.writeFile('./temp/buildInfo.json', buildInfo, err => {
   if(err === null) {
      console.log('[buildInfo] 构建信息写入成功！')
   } else {
      console.log('[buildInfo] 构建信息写入失败，详情请参阅：\n' + err)
   }
})
/* ----------- Build Info END ----------- */

module.exports = defineConfig({

   transpileDependencies: true,
   indexPath: 'index.html',
   outputDir: process.env.outputDir || 'dist',
   productionSourceMap: false,
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
