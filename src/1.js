// This is served for friends/index.html

const avatarDir = (name) => "https://www.crrashh1542.top/img/avatars/" + name + ".jpg" // 把名字换成路径
new Vue({
    el: "#links",
    data: {
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
            },
            {
                name: "LCZBlog",
                link: "https://blog.licaoz.com",
                intro: "寄蜉蝣於天地，渺滄海之一粟。",
                avatar: "https://source.licaoz.com/images/pubicon.png"
            }
        ]
    }
})