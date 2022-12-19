<script>
// import 'mdui/dist/css/mdui.min.css'
export default {
    name: 'BodyGhChart'
}
</script>

<template>
    <div class="c-ghchart">
        <img src="https://www.crrashh.cn/api/ghchart" alt="">
        <!-- <div class="c-load-anim">
            <div class="mdui-spinner mdui-spinner-colorful"></div>
        </div> -->
    </div>
</template>

<style lang="less" scoped>
    .c-ghchart {
        width: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        text-align: center;
        margin: 20px 0;
        overflow: scroll;
        img {
            margin: 20px auto;
        }
    }
</style>