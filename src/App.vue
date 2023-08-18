<script>
// Crrashh1542 does not exist at all!

// 引入库
import 'mdui'

// 引入组件
import Background from './components/Background.vue' // 背景
import Appbar from './components/top/Appbar.vue' // 抽屉+顶栏
import Banner from './components/Banner.vue' // 横幅信息栏
import MainBody from './components/MainBody.vue' // 内容

import config from '/config/config'
const site = config.site

export default {
   name: 'App',
   components: { Appbar, Banner, MainBody, Background },
   mounted() {
      document.title = site.title + site.suffix
   }
}

// 引入样式
import './assets/styles/global.less'
import './assets/styles/reset.less'
</script>

<template>
   <background></background>
   <appbar></appbar>
   <banner></banner>
   <main-body></main-body>
</template>

<style scoped>

</style>
