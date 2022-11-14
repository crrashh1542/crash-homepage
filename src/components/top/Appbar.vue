<script>
    export default {
        name: 'Appbar'
    }
</script>

<template>
    <div>
        <div class="appbar mdui-appbar mdui-color-blue-grey mdui-color-text-white">
            <div class="mdui-toolbar">
                <a href="javascript:;" class="mdui-btn mdui-btn-icon mdui-ripple" @click="drawerTrigger">
                    <i class="mdui-icon material-icons">menu</i>
                </a>
                <a href="/" class="mdui-typo-headline">云萧的小破站</a>
                <div class="mdui-toolbar-spacer"></div>
                <a href="https://blogs.crrashh.cn/" class="btn mdui-ripple" target="_blank">博客</a>
                <a href="https://blogs.crrashh.cn/archives/12" class="btn mdui-ripple" target="_blank">关于</a>
                <a href="https://blogs.crrashh.cn/msgboard" class="btn mdui-ripple" target="_blank">友链</a>
            </div>
        </div>
    </div>
</template>

<style lang="less">
@media screen and (max-width: 800px){
    .appbar .btn {
        display: none;
    }
}
</style>
