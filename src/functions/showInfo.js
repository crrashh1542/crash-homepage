/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 1.1.0
 */

import info from "../../package.json"
import moment from "moment"

// 获取项目和框架版本
const repoVer = info.version
const frameVer = info.dependencies.vue.split("^")[1]
// 获取时间和日期
const date =  moment(Date.now()).format("YYYYMMDD")
const time =  moment(Date.now()).format("HHmmss")
let build = "Version: " + repoVer + "@" + date + "T" + time + "+0800"

export default function showInfo(){
    console.log("%c%s", "font-size: 14px; margin: 5px", build)
    console.log("%c%s",
        "color: #fff; background: #42b883; padding: 5px 10px; border-radius: 4px; font-size: 14px;",
        "Built with Vue " + frameVer + ".")
}
