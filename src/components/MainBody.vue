<script>
// 组件
import GhChart from './contents/GhChart.vue'
import Cards from './contents/Cards.vue'
import Foo from './contents/Footer.vue'
import Proterties from './contents/Proterties.vue'

// 配置
import config from "/config/config"
const content = config.content

export default {
   name: 'MainBody',
   data() {
      return { content }
   },
   components: { GhChart, Cards, Foo, Proterties }
}
</script>

<template>
   <div class="content">
      <div class="note" v-if="content.title !== null">{{ content.title }}</div>

      <!-- 贡献 | Github contributions -->
      <div class="block" v-if="content.ghChart !== null">
         <p class="menu">
            <i class="mdui-icon material-icons">code</i>&nbsp;&nbsp;今天咕了没！
         </p>
         <gh-chart></gh-chart>
      </div>


      <!-- 属性 | Proterties -->
      <div class="block" v-if="content.proterties !== null">
         <p class="menu">
            <i class="mdui-icon material-icons">assignment_ind</i>&nbsp;&nbsp;我的属性
         </p>
         <proterties></proterties>
      </div>

      <!-- 外站链接 | Links -->
      <div class="block" v-if="content.links !== null">
         <p class="menu">
            <i class="mdui-icon material-icons">widgets</i>&nbsp;&nbsp;咕咕的好东西
         </p>
         <cards></cards>
      </div>


      <!-- Footer -->
      <foo></foo>
   </div>
</template>

<script>

</script>

<style lang="less" scoped>
@import url('../assets/styles/global.less');

.content {
   padding: 10px var(--content-padding-align);

   .block {
      margin: 40px 0 0;
   }

   .note {
      font-size: var(--note-font-size);
      background-color: @ch-color-theme-light;
      padding: var(--note-padding);
      margin: var(--note-margin);
      border-radius: @ch-layout-card-radius;
      text-align: center;
      box-shadow: 0 1.5px 4px 0 @ch-color-theme;
   }

   .menu {
      position: relative;
      height: @ch-layout-menu-height;
      line-height: @ch-layout-menu-height;
      padding-left: calc(@ch-layout-menu-label-width * 2.5);
      margin: 20px 0;
      color: @ch-color-theme-darker;
      font-size: 24px;
   }

   .menu::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: @ch-layout-menu-label-width;
      height: 100%;
      border-radius: calc(@ch-layout-menu-label-width / 2);
      background-color: @ch-color-theme;
   }
}

/* 设备适配 */
@media screen and (max-width: 800px) {
   .content {
      --content-padding-align: 5%;
      --note-padding: 20px;
      --note-margin: 0 0 50px;
      --note-font-size: 22px;
   }
}

@media screen and (min-width: 800px) {
   .content {
      --content-padding-align: 10%;
      --note-padding: 25px 5px;
      --note-margin: 0 0 30px;
      --note-font-size: 26px;
   }
}

@media screen and (min-width: 1366px) {
   .content {
      --content-padding-align: 15%;
   }
}</style>
