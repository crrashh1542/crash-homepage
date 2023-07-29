/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 1.1.0
 */

import info from '../../package.json'
import time from '../../temp/buildTime.json'

// 获取项目和框架版本
const repoVer = info.version
const frameVer = info.dependencies.vue.split('^')[1]
// 获取时间和日期

let build = 'Version: ' + repoVer + '@' + time.t

export default function showInfo(){
    console.log('%c%s', 'font-size: 14px; margin: 5px', build)
    console.log('%c%s',
        'color: #fff; background: #42b883; padding: 5px 10px; border-radius: 4px; font-size: 14px;',
        'Built with Vue ' + frameVer + '.')
}
