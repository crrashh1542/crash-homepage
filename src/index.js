// 引入样式
import './styles/index/index.less'
import './styles/index/different-displays.less'

Vue.config.productionTip = false; // 阻止 Vue 提示切换到生产模式

function avatarDir(name) {
    return "https://www.crrashh1542.top/img/avatars/" + name + ".jpg";
}
const vm = new Vue({
    el: "#index-app",
    data: function(){
        return {
            friends: [
                {
                    name: "Gaoice !喵",
                    link: "https://gaoice.top",
                    intro: "传说中的某大佬",
                    avatar: avatarDir("gaoice")
                },
                {
                    name: "bai",
                    link: "https://baizhi.fun",
                    intro: "一个安静的学习站",
                    avatar: avatarDir("bai")
                }
            ],
            links: ["http://wpa.qq.com/msgrd?v=3&uin=3247380086&site=qq&menu=yes", "mailto:junzhu12345@qq.com", "https://github.com/crrashh1542"]
        }
    }
});