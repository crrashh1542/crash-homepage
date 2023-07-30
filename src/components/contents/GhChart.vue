<script>
import config from "../../config/config"
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
   <div class="c-ghchart">
      <img :src=reqUrl alt="">
      <!-- <div class="c-load-anim">
            <div class="mdui-spinner mdui-spinner-colorful"></div>
        </div> -->
   </div>
</template>

<style lang="less" scoped>
.c-ghchart {
   width: 100%;
   background-color: rgba(255, 255, 255, 0.4);
   text-align: center;
   overflow: scroll;

   img {
      margin: 20px auto;
   }
}
</style>
