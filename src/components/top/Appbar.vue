<script>
    import Mdui from 'mdui'
    import Drawer from './Drawer.vue'
    export default {
        name: 'Appbar',
        components: { Drawer },
        methods: {
            trigger ()  {
                
            }
        }
    }
</script>

<template>
    <div>
        <drawer></drawer>
        <div class="appbar mdui-appbar mdui-color-blue-grey mdui-color-text-white">
            <div class="mdui-toolbar">
                <a class="mdui-btn mdui-btn-icon mdui-ripple" @click="trigger">
                    <i class="mdui-icon material-icons">menu</i>
                </a>
                <a href="/" class="mdui-typo-headline">云萧的咕咕窝</a>
                <div class="mdui-toolbar-spacer"></div>
                <a href="https://blogs.crrashh.cn/" class="btn mdui-ripple" target="_blank">博客</a>
                <a href="https://blogs.crrashh.cn/archives/12" class="btn mdui-ripple" target="_blank">关于</a>
                <a href="https://blogs.crrashh.cn/friends" class="btn mdui-ripple" target="_blank">友链</a>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.mdui-appbar .mdui-toolbar {
    height: 64px;
    line-height: 64px;
}
@media screen and (max-width: 800px){
    .appbar .btn {
        display: none;
    }
}
@media screen and (min-width: 800px) {
    body.mdui-drawer-body-left {padding-left: 0;}
    #drawer {display: none;}
    .appbar {
        .mdui-btn-icon {
            display: none;
        }
    }
}
@media screen and (min-width: 1024px) {
    .appbar {padding: 0 10%;}
}
@media screen and (min-width: 1366px) {
    .appbar {padding: 0 15%;}
}
</style>
