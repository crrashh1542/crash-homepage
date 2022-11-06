// birthday.js 查看生日时间
// Author: Gaoice / Version: 1.0.1

/**
 * 计算实际年龄，精确到天
 * @param {*} birthday array [year, month, day]
 * @return array
 */

 function getAge(birthday) {
    let date = new Date();
    let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    let age = today.map((value, index) => {
            return value - birthday[index]
        })
    if (age[2] < 0) {
        let lastMonth = new Date(today[0], today[1], 0)
        age[1]--
        age[2] += lastMonth.getDate()
    }
    if (age[1] < 0) {
        age[0]--
        age[1] += 12
    }
    return age;
}
export default function sayAge(birthday){
    let age_all = getAge (birthday.split('-'));
    console.log("[birthday.js] 云萧的实际年龄：" + age_all[0] + "岁" + age_all[1] + "月" + age_all[2] + "天");
    console.log()
}