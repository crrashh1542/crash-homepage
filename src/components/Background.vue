<script>
import config from "/config/config"
const bg = 'url("' + config.site.background + '")'

export default {
    name: 'BackGround',
    data() {
        return { bg }
    }
}
</script>

<template>
    <div class="bg img"></div>
    <div class="bg shade"></div>
</template>

<style lang="less" scoped>
@import url('../assets/styles/global.less');
.bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-attachment: fixed;
}

.img {
    z-index: -99;
    background-image: v-bind(bg);
}

.shade {
    z-index: -98;
    background-color: @ch-color-bg-shade;
    backdrop-filter: blur(3px);
}
</style>
