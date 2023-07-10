import links from './links.json'
import avatar from '../assets/images/avatar.jpg'
import background from '../assets/images/bg.jpg'

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
         username: 'crrashh1542',
         color: '409ba5'
      },

      proterties: {

      },

      links: null

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
