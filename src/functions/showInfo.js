/**
 * 此脚本用于在控制台中显示本项目相关信息
 * @author crrashh1542
 * @version 1.0.1
 */

import v from "../../package.json"
import moment from "moment"

const version = v.version
const date =  moment(Date.now()).format("YYYYMMDD")
const time =  moment(Date.now()).format("HHmmss")
const output = "Version: " + version + "@" + date + "-GMT+8-" + time

export default function showInfo(){
    console.log("%c%s", "font-size: 14px; margin: 5px", output)
    
    console.log("%c%s",
        "color: #fff; background: #42b883; padding: 5px 10px; border-radius: 4px; font-size: 14px;",
        "Built with Vue 3 framework!")
}
