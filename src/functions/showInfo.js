/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 1.2.0
 */

import repoInfo from '../../package.json'
import buildInfo from '../../temp/buildInfo.json'

// 获取项目和框架版本
const repoVer = repoInfo.version
const frameVer = repoInfo.dependencies.vue.split('^')[1]
// 获取构建信息
const buildTime = buildInfo.time
const buildHash = buildInfo.hash

export default function showInfo(){
    let styleName = 'font-size: 14px; color: #fff; background-color: #607d8b; padding: 8px 5px 8px 10px'
    let styleVer = 'font-size: 14px; color: #111; background-color: #fff; border: 4px solid #607d8b; padding: 4px 8px'

    console.log('%c%s%c%s', styleName, 'crash-homepage', styleVer, repoVer + '@' + buildHash)
    console.log('[buildInfo] Built at ' + buildTime + ' with Vue ' + frameVer + '.')
}
