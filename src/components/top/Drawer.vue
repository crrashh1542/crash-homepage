<script>
    // import libraries
    import Mdui from 'mdui'
    // import files
    import links from '../../data/links.json'
    export default {
        name: 'Drawer',
        data() {
            return {
                avatar: "https://res.crrashh.cn/img/avatars/crrashh1542.jpg",
                links: links
            }
        }
    }
</script>

<template>
    <div class="mdui-drawer" id="drawer">
        <ul class="mdui-list">
            <div class="c-info">
                <div class="c-avatar">
                    <img :src=avatar alt="">
                </div><br>
                <div class="c-title">云萧只会咕咕咕</div>
                <div class="c-subtitle mdui-text-color-grey-700">高一狗，前端废物一个</div>
            </div>
            <a v-for="i in links" :key="i.name" :href=i.link target="_blank">
                <li class="mdui-list-item mdui-ripple">
                    <i class="mdui-list-item-icon mdui-icon material-icons">{{i.icon}}</i>
                    <div class="mdui-list-item-content">{{i.name}}</div>
                </li>
            </a>
        </ul>
    </div>
</template>

<style>

</style>