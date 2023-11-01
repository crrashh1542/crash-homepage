import links from './links.json'
import background from './images/bg.jpg'
import imgBlog from './images/1.jpg'
import imgDisk from './images/2.jpg'

export default {
    configVersion: 2,

    site: {
        title: '浅若夏沫的小破站',
        suffix: '// in building...',
        subtitle: 'AKAFUSU RAIN',
        subheading: '"TECH OTAKUS SAVE THE WORLD"',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2531738088&s=640',
        background
    },

    header: {
        link: links.headLink
    },

    content: {
        title: '软件工程大专生，傻逼二次元科技宅，有时候精神不正常',
        ghChart: {
            apiUrl: 'https://ghc.api.crrashh.com',
            username: 'summer-foam',
            color: '7986cb'
        },
        proterties: {

        },
        links: [
            {
                title: "博客堆放处",
                subTitle: "乱写的啊喂！",
                imageUrl: imgBlog,
                link: "https://blog.exusiai.space"
            },
            {
                title: "慢吞吞的网络硬盘",
                subTitle: "基于 Alist 的网盘服务",
                imageUrl: imgDisk,
                link: "https://dl.exusiai.space"
            },
        ]
    },

   footer: {
      copyright: 'Copyright 2022-2023 Kotsuki Crrashh & Akafusu Rain. All Rights Reserved.'
   },

    console: {
        birthdayCalc: {
            isEnable: true,
            owner: '浅若夏沫',
            birthday: '2003-08-08'
        }
    }
}
