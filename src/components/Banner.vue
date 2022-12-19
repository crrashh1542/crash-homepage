<script>
    export default {
        name: 'MainBanner',
        data() {
            return {
                avatar: 'https://res.crrashh.cn/img/avatars/crrashh1542.jpg'
            }
        }
    }
</script>

<template>
    <div class="c-introduction mdui-row">
            <div class="c-avatar mdui-col-lg-3 mdui-col-md-4">
                <img :src=avatar>
            </div>
            <div class="c-info mdui-col-lg-9 mdui-col-md-8">
                <div class="c-title">云萧的咕咕窝<span class="c-live-word">ヾ(ﾟ∀ﾟゞ)</span></div>
                <div class="c-subtitle">KOTSUKI CRRASHH</div>
                <br><p>" Creating makes miracles. "</p>
            </div>
    </div>
</template>

<style lang="less" scoped>
    .c-introduction {
        margin-right: 0;
    }
    @media screen and (max-width: 550px) {
        .c-live-word {
            display: none;
        }
    }
        /* --800px */
    @media screen and (max-width: 800px) {
        .c-introduction {
            padding: 120px 7.5%;
            .c-avatar {
                margin: auto;
                img {
                    width: 120px;
                    height: 120px;
                    border-radius: 60px;
                }
            }
            .c-info {
                margin: auto;
                .c-title {
                    font-size: 36px;
                    margin: 20px auto;
                }
                .c-subtitle {
                    font-size: 24px;
                    font-weight: 300;
                    margin: 0 auto;
                }
            }
        }
        .c-content {
            padding: 0 10%;
        }
    }
    /* 800--1024px */
    @media screen and (min-width: 800px) {
        .c-introduction {
            padding: 120px 7.5%;
            .c-avatar {
                margin: auto;
                img {
                    width: 150px;
                    height: 150px;
                    border-radius: 75px;
                }
            }
            .c-info {
                margin: auto;
                .c-title {
                    font-size: 32px;
                    margin: 20px auto;
                }
                .c-subtitle {
                    font-size: 24px;
                    font-weight: 300;
                    margin: 0 auto;
                }
            }
        }
    }

    /* 1024--1366px */
    @media screen and (min-width: 1024px) {
        .c-introduction {
            padding: 120px 10%;
            .c-avatar {
                img {
                    width: 180px;
                    height: 180px;
                    border-radius: 90px;
                }
            }
            .c-info {
                .c-title {
                    font-size: 42px;
                }
                .c-subtitle {
                    font-size: 24px;
                    font-weight: 300;
                }
            }
        }
        .c-content {
            padding: 0 10%;
        }
    }

    /* 1366px--1600px */
    @media screen and (min-width: 1366px) { 
        .c-introduction {
            padding: 120px 15%;
            .c-avatar {
                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 100px;
                }
            }
            .c-info {
                .c-title {
                    font-size: 42px;
                    margin: 20px 0;
                }
                .c-subtitle {
                    font-size: 28px;
                    font-weight: 300;
                }
            }
        }
    }
</style>
