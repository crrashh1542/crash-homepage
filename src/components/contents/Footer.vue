<script>
    import Mdui from 'mdui'
    export default {
        name: 'Footer',
        data(){
            return {
                links: [
                "http://wpa.qq.com/msgrd?v=3&uin=3247380086&site=qq&menu=yes",
                "mailto:junzhu12345@qq.com",
                "https://github.com/crrashh1542",
                "javascript:;"
                ]
            }
        },
        methods: {
            about(){
                Mdui.dialog({
                    title: "关于本站",
                    content: "本站由云萧（@crrashh1542）自己搭建。<br>部分使用 MDUI 进行 Material 化设计<br>本网站由 Vue 3 + Vite 技术构建，代码详见 Github@crrashh1542",
                    buttons: [{
                        text: "了解"
                    }]
                })
            }
        }
    }
</script>

<template>
    <div class="footer">
        <a :href="links[0]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe882;</a>
        <a :href="links[1]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe918;</a>
        <a :href="links[2]" target="_blank" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple">&#xe712;</a>
        <a :href="links[3]" @click="about" class="mdui-btn mdui-btn-raised mdui-color-blue-grey-200 mdui-btn-icon mdui-ripple"><i class="mdui-icon material-icons">info</i></a>
        <div class="info">
            <p>&copy; Copyright 2019-2022 Kotsuki Crrashh. All Rights Reserved.</p>
            <p><a href="https://icp.gov.moe/?keyword=20220551">萌 ICP 备 20220551 号</a></p>
        </div>
    </div>
</template>

<style lang="less">
    .footer { /* 底部按钮 */
            padding: 10px;
            text-align: center;
            .mdui-btn-icon {
                line-height: 48px;
                margin: auto;
                margin: 5px;
                font-family: 'iconfont';
                width: 48px;
                height: 48px;
            }
            .info {
                padding: 30px;
                text-align: center;
                line-height: 1.5;
            }
        }
    @media screen and (max-width: 1024px) {
        .footer .info {
            padding: 30px 0;
        }
    }
    .mdui-btn-icon {
        line-height: 48px;
        margin: auto;
        margin: 5px;
        font-family: 'iconfont';
        width: 48px;
        height: 48px;
    }
</style>