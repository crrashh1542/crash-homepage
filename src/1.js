// This is served for friends/index.html
// You can also take it as a friend list.

const avatarDir = (name) => "https://www.crrashh1542.top/img/avatars/" + name + ".jpg" // 把名字换成路径
new Vue({
    "el": "#links",
    "data": {
        "friends": [
            {
                "link": "https://gaoice.top",
                "avatar": avatarDir("gaoice"),
                "name": "Gaoice !喵",
                "intro": "传说中的某大佬"
                
            },
            {
                "link": "https://baizhi.fun",
                "avatar": avatarDir("bai"),
                "name": "bai",
                "intro": "一个安静的学习站"
            },
            {
                "link": "https://blog.licaoz.com",
                "avatar": "https://source.licaoz.com/images/pubicon.png",
                "name": "LCZBlog",
                "intro": "寄蜉蝣於天地，渺滄海之一粟。"
            },
            {
                "link": "https://tutime.cn/",
                "avatar": avatarDir("tutime"),
                "name": "土土博客",
                "intro": "追逐幻想"
            },
            {
                "link": "https://www.evanluo.top/",
                "avatar": "https://evan.beee.top/avatar.png",
                "name": "Anonymous Land",
                "intro": "Evan's blog. Why not take a visit?"
            },
            {
                "link": "",
                "avatar": "",
                "name": "",
                "intro": ""
            },
            {
                "link": "",
                "avatar": "",
                "name": "",
                "intro": ""
            },
            {
                "link": "",
                "avatar": "",
                "name": "",
                "intro": ""
            },
            {
                "link": "",
                "avatar": "",
                "name": "",
                "intro": ""
            },
            {
                "link": "",
                "avatar": "",
                "name": "",
                "intro": ""
            },
        ]
    }
})