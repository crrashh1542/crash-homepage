<script>
// Crrashh1542 does not exist at all!

import 'mdui'
import Appbar from './components/top/Appbar.vue' // 抽屉+顶栏
import Banner from './components/Banner.vue' // 横幅信息栏
import MainBody from './components/MainBody.vue' // 内容

import config from '/config/config'
const site = config.site
const bg = 'url("' + site.background + '")'

export default {
   name: 'App',
   components: { Appbar, Banner, MainBody },
   data() {
      return { bg }
   },
   mounted() {
      document.title = site.title + site.suffix
   }
}

// 引入样式
import './assets/styles/global.less'
import './assets/styles/reset.less'
</script>

<template>
   <div class="c-bg"></div>
   <appbar></appbar>
   <banner></banner>
   <main-body></main-body>
</template>

<style scoped>
.c-bg {
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   z-index: -999;
   background-image: v-bind(bg);
   background-size: cover;
   background-attachment: fixed;
}
</style>
