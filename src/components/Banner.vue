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
      <div class="avatar mdui-col-lg-3 mdui-col-md-4">
         <img :src=site.avatar>
      </div>
      <div class="info mdui-col-lg-9 mdui-col-md-8">
         <div class="title">{{ site.title }}</div>
         <div class="subtitle">{{ site.subtitle }}</div>
         <br>
         <p>{{ site.subheading }}</p>
      </div>
   </div>
</template>

<style lang="less" scoped>
.banner {
   margin-right: 0;
}

/* --800px */
@media screen and (max-width: 800px) {
   .banner {
      padding: 120px 7.5%;

      .avatar {
         margin: auto;

         img {
            width: 120px;
            height: 120px;
            border-radius: 60px;
         }
      }

      .info {
         margin: auto;

         .title {
            font-size: 36px;
            margin: 20px auto;
         }

         .subtitle {
            font-size: 24px;
            font-weight: 300;
            margin: 0 auto;
         }
      }
   }

   .content {
      padding: 0 10%;
   }
}

/* 800--1024px */
@media screen and (min-width: 800px) {
   .banner {
      padding: 120px 7.5%;

      .avatar {
         margin: auto;

         img {
            width: 150px;
            height: 150px;
            border-radius: 75px;
         }
      }

      .info {
         margin: auto;

         .title {
            font-size: 32px;
            margin: 20px auto;
         }

         .subtitle {
            font-size: 24px;
            font-weight: 300;
            margin: 0 auto;
         }
      }
   }
}

/* 1024--1366px */
@media screen and (min-width: 1024px) {
   .banner {
      padding: 120px 10%;

      .avatar {
         img {
            width: 180px;
            height: 180px;
            border-radius: 90px;
         }
      }

      .info {
         .title {
            font-size: 42px;
         }

         .subtitle {
            font-size: 24px;
            font-weight: 300;
         }
      }
   }

   .content {
      padding: 0 10%;
   }
}

/* 1366px-- */
@media screen and (min-width: 1366px) {
   .banner {
      padding: 120px 15%;

      .avatar {
         img {
            width: 200px;
            height: 200px;
            border-radius: 100px;
         }
      }

      .info {
         .title {
            font-size: 42px;
            margin: 20px 0;
         }

         .subtitle {
            font-size: 28px;
            font-weight: 300;
         }
      }
   }
}</style>
