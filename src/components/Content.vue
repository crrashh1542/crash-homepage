<script>
    import GhChart from './contents/GhChart.vue'
    import Cards from './contents/Cards.vue'
    import Footer from './contents/Footer.vue'
    export default {
        name: 'content',
        components: { GhChart, Cards, Footer }
    }
</script>

<template>
    <div class="content">
        <div class="title">高一狗，搞笑人，2.75次元，平时不怎么正常</div>
        <!-- Github contributions -->
        <p class="menu">
            <i class="mdui-icon material-icons">code</i>&nbsp;&nbsp;今天咕了没！<i class="mdui-icon material-icons">arrow_downward</i>
        </p>
        <GhChart></GhChart>

        <!-- Functions -->
        <p class="menu">
            <i class="mdui-icon material-icons">widgets</i>&nbsp;&nbsp;本咕的好东西<i class="mdui-icon material-icons">arrow_downward</i>
        </p>
        <Cards></Cards>

        <!-- Footer -->
        <Footer></Footer>
    </div>
</template>

<script>

</script>

<style lang="less">
    // Universal stylesheet
    .content {
        /* backdrop-filter: blur(3px); 达咩，会导致页面卡顿 */
        background-color: rgba(255, 255, 255, .7);

        p a {
            color: #607dbb;
        }
        p a:visited {
            color: #607dbb;
        }
        p a:hover {
            color: #78909c;
        }

        .mdui-panel-item {
            background-color: rgba(255, 255, 255, .2);
            cursor: default;
            color: #444;
            .title {
                .icon {
                    font-family: 'iconfont';
                    margin-right: 15px;
                    font-size: 22px;
                }
                font-size: 18px;
            }
            .item {
                font-size: 18px;
            }
            a {color: #444;}
        }
        a {
            text-decoration: none;
        }
        .footer { /* 底部按钮 */
            padding: 10px;
            text-align: center;
            font-family: 'iconfont';
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
    }
    /* 对于不同的设备设置不同的 .content */
    @media screen and (max-width: 800px){
        .content { padding: 20px; }
    }
    @media screen and (min-width: 800px) {
        body.mdui-drawer-body-left {padding-left: 0;}
        #drawer {display: none;}
        .appbar {
            .mdui-btn-icon{
                display: none;
            }
        }
        .content {padding: 10px 10%;}
    }
    @media screen and (min-width: 1024px) {
        .appbar {padding: 0 10%;}
    }
    @media screen and (min-width: 1366px) {
        .appbar {padding: 0 15%;}
        .content {padding: 10px 15%;}
    }

    // Specific stylesheet
    .content {
        .title {
            padding: 50px 0;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
        }
        .menu {
            color: #444;
            font-size: 24px;
        }
        .ghchart {
            width: 100%;
            background-color: rgba(255, 255, 255, 0.4);
            text-align: center;
            margin: 20px 0;
            overflow: scroll;
            img {
                margin: 20px auto;
            }
        }
        .mdui-card {
            margin: 20px 10px;
        }
    }
</style>
