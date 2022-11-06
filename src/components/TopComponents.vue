<script>
    import Mdui from 'mdui'
    // 引入其他组件
    import Drawer from './top/Drawer.vue'
    import Appbar from './top/Appbar.vue'
    export default {
        name: 'Top',
        components: {
            "drawer": Drawer,
            "appbar": Appbar
        },
        methods: {
            drawerOpen(){ // 咕了，放个TODO
                // let drawerTrigger = new Mdui.Drawer("#drawer")
                // drawerTrigger.open()
            }
        }
    }
</script>

<template>
    <div>
        <drawer></drawer>
        <appbar></appbar>
    </div>
</template>

<style>
</style>
