/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 1.2.0
 */

import info from '../../package.json'
import time from '../../temp/buildInfo.json'

// 获取项目和框架版本
const repoVer = info.version
const frameVer = info.dependencies.vue.split('^')[1]
// 获取时间和日期

// let build = 'Version: ' + repoVer + '@' + time.t

export default function showInfo(){
    let styleName = 'font-size: 14px; color: #fff; background-color: #607d8b; padding: 8px 5px 8px 10px'
    let styleVer = 'font-size: 14px; color: #607d8b; background-color: #fff; border: 4px solid #607d8b; padding: 4px 8px'

    console.log('%c%s%c%s', styleName, 'crash-homepage', styleVer, repoVer)
    console.log('[buildInfo] Built at ' + time.t + ' with Vue ' + frameVer + '.')

    // console.log('%c%s',
    //     'color: #fff; background: #42b883; padding: 5px 10px; border-radius: 4px; font-size: 14px;',
    //     'Built with Vue ' + frameVer + '.')
}
