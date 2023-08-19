<script>
import config from "/config/config"
const gh = config.content.ghChart

export default {
   name: 'BodyGhChart',
   computed: {
      reqUrl() {
         if(gh.color === null) {
            return gh.apiUrl + '/' + gh.username
         } else {
            return gh.apiUrl + '/' + gh.color + '/' + gh.username
         }
      }
   }
}
</script>

<template>
   <div class="ghchart">
      <img :src=reqUrl alt="">
   </div>
</template>

<style lang="less" scoped>
@import url('../../assets/styles/global.less');

.ghchart {
   width: 100%;
   background-color: @ch-color-theme-lighter;
   border: 1px solid @ch-color-theme-light;
   border-radius: @ch-layout-card-radius;
   text-align: center;
   overflow: scroll;

   img {
      margin: 20px auto;
   }
}
</style>
