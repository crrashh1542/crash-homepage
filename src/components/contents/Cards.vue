<script>
import config from '/config/config'
const card = config.content.links

export default {
   name: 'BodyCards',
   data() {
      return {
         card
      }
   }
}
</script>

<template>
   <div class="mdui-row c-card-list">
      <div class="mdui-col-lg-5 mdui-col-md-6 mdui-col-xs-12" v-for="(c, index) in card" :key="index">
         <div class="mdui-card">
            <div class="mdui-card-media">
               <img :src="c.imageUrl" />
               <div class="mdui-card-media-covered">
                  <div class="mdui-card-primary">
                     <div class="mdui-card-primary-title">{{ c.title }}</div>
                     <div class="mdui-card-primary-subtitle">{{ c.subTitle }}</div>
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

<style scoped>
.mdui-card {
   margin: 0 10px 20px;
}
</style>
