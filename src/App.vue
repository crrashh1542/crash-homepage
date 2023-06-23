<script>
// Crrashh1542 does not exist at all!

import 'mdui'
import Appbar from './components/top/Appbar.vue' // 抽屉+顶栏
import Banner from './components/Banner.vue' // 横幅信息栏
import MainBody from './components/MainBody.vue' // 内容

import info from './data/siteInfo.json'
const site = info.site
export default {
   name: 'App',
   components: { Appbar, Banner, MainBody },
   mounted() {
      document.title = site.title + site.suffix
   }
}

// 引入样式
import './assets/styles/global.less'
</script>

<template>
   <appbar></appbar>
   <banner></banner>
   <main-body></main-body>
</template>

<style scoped></style>
