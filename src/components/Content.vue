<script>
    import GhChart from './contents/GhChart.vue'
    import Cards from './contents/Cards.vue'
    import Footer from './contents/Footer.vue'
    export default {
        name: 'Conteny'
    }
</script>

<template>
    <div class="content">
        <div class="title">高一狗，搞笑人，2.75次元，平时不怎么正常</div>
        <!-- Github contributions -->
        <p class="menu">
            <i class="mdui-icon material-icons">code</i>&nbsp;&nbsp;今天咕了没！<i class="mdui-icon material-icons">arrow_downward</i>
        </p>
        <div class="ghchart">
            <img src="https://www.crrashh.cn/api/ghchart" alt="">
        </div>

        <!-- Functions -->
        <p class="menu">
            <i class="mdui-icon material-icons">widgets</i>&nbsp;&nbsp;本咕的好东西<i class="mdui-icon material-icons">arrow_downward</i>
        </p>
        <div class="mdui-row card-list">
            <div class="mdui-col-lg-5 mdui-col-md-6 mdui-col-xs-12">
                <div class="mdui-card">
                    <div class="mdui-card-media">
                        <img src="https://www.crrashh.cn/static/images/1.bf3ab909.jpg"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">云萧的咕咕盘</div>
                                <div class="mdui-card-primary-subtitle">基于 Alist 的网盘服务</div>
                            </div>
                        </div>
                    </div>
                    <div class="mdui-card-actions">
                    <a class="mdui-btn mdui-ripple" target="_blank" href="https://disk.crrashh.cn:2333">go</a>
                    </div>
                </div>
            </div>
            <div class="mdui-col-lg-5 mdui-col-md-6 mdui-col-xs-12">
                <div class="mdui-card">
                    <div class="mdui-card-media">
                        <img src="https://www.crrashh.cn/static/images/2.f2f3b4ec.jpg"/>
                        <div class="mdui-card-media-covered">
                            <div class="mdui-card-primary">
                                <div class="mdui-card-primary-title">云萧的咕咕屋</div>
                                <div class="mdui-card-primary-subtitle">本咕乱写的啊喂！</div>
                            </div>
                        </div>
                    </div>
                    <div class="mdui-card-actions">
                        <a class="mdui-btn mdui-ripple" href="https://blogs.crrashh.top/" target="_blank">go</a>
                    </div>
                </div>
            </div>
        </div>
        <footer></footer>
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
