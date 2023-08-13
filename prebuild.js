/* eslint-disable */
/**
 * 此脚本用于在开始打包前处理配置信息
 * @author crrashh1542
 * @version 1.4.0
 */

// STEP1 -------- 导入依赖
const fs = require('fs')
const childProcess = require('child_process')
const moment = require('moment')

// STEP2 -------- 获取构建时间
function getTime() {
   const buildTime = moment(Date.now()).format()
   console.log('[buildInfo] 已获取构建时间：' + buildTime)
   return buildTime
}

// STEP3 -------- 获取构建 hash
function getHash(params) {
   const buildHash = childProcess.execSync('git rev-parse --short HEAD', { 'encoding': 'utf8' }).split('\n')[0]
   console.log('[buildInfo] 已获取构建 commit hash：' + buildHash)
   return buildHash
}

// STEP4 -------- 获取构建环境
function getEnv() {
   let buildEnv
   if (process.env.NODE_ENV === "development") {
      buildEnv = 'dev'
   } else if (process.env.NODE_ENV === "production") {
      buildEnv = 'prod'
   } else {
      buildEnv = process.env.NODE_ENV
   }
   console.log('[buildInfo] 已获取构建环境：' + buildEnv)
   return buildEnv
}

// STEP5 -------- 组装并输出到文件
function writeInfo() {
   // 组装要输出的内容
   const content = '{"time": "' + getTime() + '", "hash": "' + getHash() + '", "env": "' + getEnv() + '"}'

   // 新建 temp 文件夹
   fs.mkdir('./temp', err => {
      if (err === null) {
         console.log('\n[buildInfo] temp 文件夹创建成功！')
      } else {
         if (fs.existsSync('temp')) {
            console.log('\n[buildInfo] temp 文件夹已存在！')
         } else {
            console.warn('\n[buildInfo] 构建信息写入失败，详情请参阅：\n' + err)
         }
      }
   })
   // 将 buildInfo 内容写入文件
   fs.writeFile('./temp/buildInfo.json', content, err => {
      if (err === null) {
         console.log('[buildInfo] 构建信息写入成功！')
      } else {
         console.log('[buildInfo] 构建信息写入失败，详情请参阅：\n' + err)
      }
   })

}

// STEP6 -------- 导出函数
module.exports = writeInfo