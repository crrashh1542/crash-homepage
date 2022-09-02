// 以下代码来自 Gaoice ，记得去看看他的网站 https://gaoice.top
// 不管怎么样他是个大佬就对了！

/**
 * 计算实际年龄，精确到天
 * @param {*} birthday array [year, month, day]
 * @return array
 */

 function getAge(birthday) {
    // 新建日期对象
    let date = new Date()
        // 今天日期，数组，同 birthday
    let today = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        // 分别计算年月日差值
    let age = today.map((value, index) => {
            return value - birthday[index]
        })
        // 当天数为负数时，月减 1，天数加上月总天数
    if (age[2] < 0) {
        // 简单获取上个月总天数的方法，不会错
        let lastMonth = new Date(today[0], today[1], 0)
        age[1]--
            age[2] += lastMonth.getDate()
    }
    // 当月数为负数时，年减 1，月数加上 12
    if (age[1] < 0) {
        age[0]--
            age[1] += 12
    }
    return age
}
// console.log(getAge('2007-3-18'.split('-')))
// document.getElementById("age").innerHTML = getAge('2007-3-18'.split('-'))
export default function sayAge(){
    let age_all = getAge('2007-3-18'.split('-'))
    console.log("birthday.js 来自大佬 Gaoice，看看他的主页吧 https://gaoice.top \n云萧的实际年龄：" + age_all[0] + "岁" + age_all[1] + "月" + age_all[2] + "天");
    console.log()
}