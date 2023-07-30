import links from './links.json'
import avatar from '../assets/images/avatar.jpg'
import background from '../assets/images/bg.jpg'

import imgBlog from '../assets/images/1.jpg'
import imgDisk from '../assets/images/2.jpg'

export default {
   configVersion: 1,

   site: {
      title: '云萧的咕咕客栈',
      suffix: ' / in building...',
      subtitle: 'KOTSUKI CRRASHH',
      subheading: '" Creating makes miracles. "',
      avatar,
      background
   },

   header: {
      link: links.headLink
   },

   content: {
      title: '高二狗，搞笑人，2.75次元，可能不怎么正常',
      ghChart: {
         apiUrl: 'https://ghc.api.crrashh.com',
         username: 'crrashh1542',
         color: '409ba5'
      },
      proterties: {

      },
      links: [
         {
            title: "云萧的咕咕屋",
            subTitle: "咕咕乱写的啊喂！",
            imageUrl: imgBlog,
            link: "https://blog.crrashh.com"
         },
         {
            title: "云萧的咕咕盘",
            subTitle: "基于 Alist 的网盘服务",
            imageUrl: imgDisk,
            link: "https://disk.crrashh.com"
         },
      ]
   },

   footer: {
      link: links.extLink,
      beian: {
         miit: '蜀ICP备2022029657号-2',
         gongan: null,
         moe: '萌ICP备20220551号'
      },
      copyright: 'Copyright 2022-2023 Kotsuki Crrashh. All Rights Reserved.'
   },

   console: {
      birthdayCalc: {
         isEnable: true,
         owner: '云萧',
         birthday: '2007-03-18'
      }
   }
}
