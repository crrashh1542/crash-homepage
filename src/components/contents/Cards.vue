<script>
import c1img from '../../assets/images/1.jpg'
import c2img from '../../assets/images/2.jpg'
export default {
    name: 'Cards',
    data(){
        return {
            card: [
            {
                title: "云萧的咕咕盘",
                subTitle: "基于 Alist 的网盘服务",
                imageUrl: c1img,
                link: "https://disk.crrashh.cn:2333"
            },
            {
                title: "云萧的咕咕屋",
                subTitle: "本咕乱写的啊喂！",
                imageUrl: c2img,
                link: "https://blogs.crrashh.cn"
            }
        ]}
    }
}
</script>

<template>
    <div class="mdui-row card-list">
        <div class="mdui-col-lg-5 mdui-col-md-6 mdui-col-xs-12" v-for="(c, index) in card" :key="index">
            <div class="mdui-card">
                <div class="mdui-card-media">
                    <img :src="c.imageUrl"/>
                    <div class="mdui-card-media-covered">
                        <div class="mdui-card-primary">
                            <div class="mdui-card-primary-title">{{c.title}}</div>
                            <div class="mdui-card-primary-subtitle">{{c.subTitle}}</div>
                        </div>
                    </div>
                </div>
                <div class="mdui-card-actions">
                <a class="mdui-btn mdui-ripple" target="_blank" :href="c.link">go</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>