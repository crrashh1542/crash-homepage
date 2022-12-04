<script>
    import avatar from '../assets/images/crrashh1542.jpg'
    export default {
        name: 'Banner',
        data() {
            return {
                avatar: avatar
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

<style lang="less">
    .c-introduction {
        margin-right: 0;
    }
    @media screen and (max-width: 550px) {
        .c-live-word {
            display: none;
        }
    }
</style>
