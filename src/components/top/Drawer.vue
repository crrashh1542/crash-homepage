<script>
    export default {
        name: 'Drawer',
        methods: {
            drawerOpen(){ // 咕了，放个TODO
                let drawerEl = document.getElementById("drawer")
                let drawerTrigger = new Mdui.Drawer(drawerEl)
                drawerTrigger.open()
            }
        }
    }
</script>

<template>
    <div class="mdui-drawer" id="drawer">
        <ul class="mdui-list">
            <div class="info">
                <div class="avatar">
                    <img src="https://res.crrashh.cn/img/avatars/crrashh1542.jpg" alt="">
                </div><br>
                <div class="title">云萧只会咕咕咕</div>
                <div class="subtitle mdui-text-color-grey-700">高一狗，前端废物一个</div>
            </div>
            <a href="https://blogs.crrashh.cn/" target="_blank"><li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">book</i>
                <div class="mdui-list-item-content">博客</div>
            </li></a>
            <a href="https://blogs.crrashh.cn/msgboard" target="_blank"><li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">link</i>
                <div class="mdui-list-item-content">友链</div>
            </li></a>
            <a href="https://blogs.crrashh.cn/archives/12" target="_blank"><li class="mdui-list-item mdui-ripple">
                <i class="mdui-list-item-icon mdui-icon material-icons">info_outline</i>
                <div class="mdui-list-item-content">关于</div>
            </li></a>
        </ul>
    </div>
</template>

<style>

</style>