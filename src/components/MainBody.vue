<script>
    import GhChart from './contents/GhChart.vue'
    import Cards from './contents/Cards.vue'
    import Foo from './contents/Footer.vue'
    export default {
        name: 'MainBody',
        components: { GhChart, Cards, Foo }
    }
</script>

<template>
    <div class="c-content">
        <div class="c-title">高一狗，搞笑人，2.75次元，平时不怎么正常</div>
        <!-- Github contributions -->
        <p class="c-menu">
            <i class="mdui-icon material-icons">code</i>&nbsp;&nbsp;今天咕了没！<i class="mdui-icon material-icons">arrow_downward</i>
        </p>
        <gh-chart></gh-chart>

        <!-- Functions -->
        <p class="c-menu">
            <i class="mdui-icon material-icons">widgets</i>&nbsp;&nbsp;本咕的好东西<i class="mdui-icon material-icons">arrow_downward</i>
        </p>
        <cards></cards>

        <!-- Footer -->
        <foo></foo>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
    // Universal stylesheet
    .c-content {
        /* backdrop-filter: blur(3px); 达咩，会导致页面卡顿 */
        background-color: rgba(255, 255, 255, .7);
    }
    /* 对于不同的设备设置不同的 .content */
    @media screen and (max-width: 800px){
        .c-content { padding: 20px; }
    }
    @media screen and (min-width: 800px) {
        .c-content {padding: 10px 10%;}
    }
    @media screen and (min-width: 1366px) {
        .c-content {padding: 10px 15%;}
    }

    // Specific stylesheet
    .c-content {
        .c-title {
            padding: 50px 0;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
        }
        .c-menu {
            color: #444;
            font-size: 24px;
        }
    }
</style>
