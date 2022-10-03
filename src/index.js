// 引入样式
import './styles/index/index.less'
import './styles/index/different-displays.less'

const avatarDir = (name) => "https://www.crrashh1542.top/img/avatars/" + name + ".jpg" // 把名字换成路径
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
            ]
        }
    }
});