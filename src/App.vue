<script>
// Crrashh1542 does not exist at all!

// 引入库
// 引入组件
import Tops from './components/TopComponents.vue' // 抽屉+顶栏
import Banner from './components/Banner.vue' // 横幅信息栏
import Content from './components/Content.vue' // 中间内容
export default {
    name: 'App',
    components: { Tops, Banner, Content }
}
</script>

<template>
    <tops></tops>
    <banner></banner>
    <content></content>
</template>

<style scoped>

</style>
