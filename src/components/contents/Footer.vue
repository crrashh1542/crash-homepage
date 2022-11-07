<script>
    import Mdui from 'mdui'
    export default {
        name: 'Footer',
        data(){
            return {
                links: [
                "http://wpa.qq.com/msgrd?v=3&uin=3247380086&site=qq&menu=yes", "mailto:junzhu12345@qq.com", "https://github.com/crrashh1542", "javascript:;"
            ]}
        },
        methods: {
            about(){
                Mdui.dialog({
                    title: "关于本站",
                    content: "本站由云萧（@crrashh1542）自己搭建。<br>部分使用 MDUI 进行 Material 化设计，采用 Webpack 5 打包<br>本网站的 Vue 化已经提上日程！<br>此网站代码详见 Github@crrashh1542",
                    buttons: [{
                        text: "了解"
                    }]
                })
            }
        }
    }
</script>

<template>
    <div>
        <a :href="links[0]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe882;</a>
        <a :href="links[1]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe918;</a>
        <a :href="links[2]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe712;</a>
        <a :href="links[3]" @click="about" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple"><i class="mdui-icon material-icons">info</i></a>
        <div class="info">
            <p>&copy; Copyright 2019-2022 Bakuhota Crashed. All Rights Reserved.</p>
            <p><a href="https://icp.gov.moe/?keyword=20220551">萌 ICP 备 20220551 号</a></p>
        </div>
    </div>
</template>

<style>
    
</style>