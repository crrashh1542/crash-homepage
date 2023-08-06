/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 1.2.1
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
    let styleName = `font-size: 14px;
                     color: #000; 
                     background-color: #8ad5b3; 
                     padding: 5px 9px;
                     border-radius: 3px 0 0 3px;
                     `
    let styleVer = `font-size: 14px; 
                    color: #fff; 
                    background-color: #607d8b; 
                    padding: 5px 9px;
                    border-radius: 0 3px 3px 0;
                    `

    console.log('%c%s%c%s', styleName, 'crash-homepage', styleVer, repoVer + '@' + buildHash)
    console.log('[buildInfo] Built at ' + buildTime + ' with Vue ' + frameVer + '.')
}
