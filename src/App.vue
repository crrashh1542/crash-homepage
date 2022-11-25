<script>
// Crrashh1542 does not exist at all!

// 引入库
import 'mdui'
// 引入组件
import Appbar from './components/top/Appbar.vue' // 抽屉+顶栏
import Banner from './components/Banner.vue' // 横幅信息栏
import Content from './components/Content.vue' // 中间内容
export default {
    name: 'App',
    components: { Appbar, Banner, Content }
}

// 引入样式
import './assets/styles/index.less'
</script>

<template>
    <appbar></appbar>
    <banner></banner>
    <content></content>
</template>

<style scoped>

</style>
