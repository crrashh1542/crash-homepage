<script>
import config from "/config/config"
const site = config.site

export default {
   name: 'MainBanner',
   data() {
      return {
         site
      }
   }
}
</script>

<template>
   <div class="banner mdui-row">
      <div class="avatar mdui-col-lg-3 mdui-col-md-4 mdui-col-sm-4">
         <img :src=site.avatar>
      </div>
      <div class="info mdui-col-lg-9 mdui-col-md-8 mdui-col-sm-8">
         <div class="title">{{ site.title }}</div>
         <div class="subtitle">{{ site.subtitle }}</div>
         <br>
         <div class="slogan">{{ site.subheading }}</div>
      </div>
   </div>
</template>

<style lang="less" scoped>
/* 主样式 */
.banner {
   margin-right: 0;
   padding: calc(var(--banner-padding-valign) + var(--ch-layout-nav-height))
                 var(--banner-padding-align) var(--banner-padding-valign);
   text-align: var(--banner-align);

   .avatar {
      margin: auto;

      img {
         width: var(--banner-avatar-size);
         height: var(--banner-avatar-size);
         border-radius: 50%;
      }
   }

   .info {
      .title {
         font-size: var(--banner-title-size);
         font-weight: var(--ch-font-banner-title-weight);
         color: var(--ch-color-theme);
         margin: var(--banner-title-margin) auto;
      }
      
      .subtitle {
         font-size: var(--banner-subtitle-size);
         color: var(--ch-color-theme-darker);
         font-weight: 300;
         margin: 20px auto;
      }

      .slogan {
         font-size: var(--banner-slogan-size);
         color: #666;
      }
   }
}

/* 设备适配 */
@media all and (max-width: 870px) { /* ~870px */
   .banner {
      --banner-align: center;
      --banner-padding-valign: 130px;
      --banner-padding-align: 7.5%;
      --banner-avatar-size: 150px;
      --banner-title-size: 40px;
      --banner-title-margin: 20px;
      --banner-subtitle-size: 24px;
      --banner-slogan-size: 20px;
   }
}

@media all and (min-width: 870px) { /* 870~1024px */
   .banner {
      --banner-align: left;
      --banner-padding-valign: 130px;
      --banner-padding-align: 7.5%;
      --banner-avatar-size: 180px;
      --banner-title-size: 42px;
      --banner-title-margin: 20px;
      --banner-subtitle-size: 24px;
      --banner-slogan-size: 20px;
   }
}

@media all and (min-width: 1024px) { /* 1024~px */
   .banner {
      --banner-padding-valign: 150px;
      --banner-padding-align: 15%;
      --banner-avatar-size: 200px;
      --banner-title-size: 52px;
      --banner-title-margin: 0;
      --banner-subtitle-size: 28px;
      --banner-slogan-size: 20px;
   }
}
</style>
