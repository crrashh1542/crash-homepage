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
    <div class="introduction mdui-row">
            <div class="avatar mdui-col-lg-3 mdui-col-md-4">
                <img :src=avatar>
            </div>
            <div class="info mdui-col-lg-9 mdui-col-md-8">
                <div class="title">云萧的咕咕窝ヾ(ﾟ∀ﾟゞ)</div>
                <div class="subtitle">KOTSUKI CRRASHH</div>
                <br><p>" Creating makes miracles. "</p>
            </div>
    </div>
</template>

<style>
    .introduction {
        margin-right: 0;
    }
</style>
