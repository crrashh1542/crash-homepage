<script>
import 'mdui/dist/css/mdui.min.css'
export default {
    name: 'GhChart'
}
</script>

<template>
    <div class="c-ghchart">
        <img src="https://www.crrashh.cn/api/ghchart" alt="">
        <div class="c-load-anim">
            <div class="mdui-spinner mdui-spinner-colorful"></div>
        </div>
    </div>
</template>

<style lang="less">
    .c-ghchart {
        height: 103px;
        position: relative;
        .c-load-anim {
            position: absolute;
        }
    }
</style>