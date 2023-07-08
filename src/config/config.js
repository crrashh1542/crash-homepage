import links from './links.json'

export default {
   configVersion: 1,

   site: {
      title: '云萧的咕咕客栈',
      suffix: ' / in building...',
      subtitle: 'KOTSUKI CRRASHH',
      subheading: '" Creating makes miracles. "',
      avatar: 'https://i.cdn.crrashh.com/avatar.jpg'
   },

   header: {
      link: links.headLink
   },

   content: {
      // To be added
   },

   footer: {
      link: links.extLink,

      beian: {
         miit: '蜀ICP备2022029657号-2',
         gongan: '蜀公网安备？？？号',
         moe: '萌ICP备20220551号'
      },

      copyright: 'Copyright 2022-2023 Kotsuki Crrashh. All Rights Reserved.'
   }
}
