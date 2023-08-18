<script>
import config from '/config/config'
const [site, link] = [config.site, config.header.link]

export default {
   name: 'TopAppbar',
   data() {
      return {
         site, link
      }
   }
}
</script>

<template>
   <div class="appbar">

      <!-- 左侧 icon & 标题 -->
      <a class="icon" @click="trigger">
         <i class="material-icons text-center align-middle">menu</i>
      </a>
      <a href="" class="title">{{ site.title }}</a>

      <!-- 左右分隔 -->
      <div class="spacer"></div>

      <!-- 右侧链接 -->
      <div>
         <a v-for="i in link" :key="i.name" :href="i.link" class="link" target="_blank">{{ i.name }}</a>
      </div>
   </div>
</template>

<style lang="less" scoped>
@import url('../../assets/styles/global.less');

/* 初始化 -------- BEGIN */
.appbar {
   position: fixed;
   left: 0;
   top: 0;
   z-index: 999;
   width: 100%;
   height: @ch-layout-nav-height;
   line-height: @ch-layout-nav-height;
   padding: 20px;
   border-bottom: 1px solid #e2e2e2;
   backdrop-filter: blur(3px);
   display: flex;
   align-items: center;
   box-sizing: border-box;

   a {
      color: inherit;
   }

   .icon { /* 抽屉栏打开图标 */
      width: @ch-layout-icon-size;
      height: @ch-layout-icon-size;
      line-height: @ch-layout-icon-size;
      margin: 0 5px 0 0;
      cursor: pointer;
   }

   .title { /* 左侧标题栏 */
      font-weight: 500;
      font-size: 24px;
   }

   .spacer { /* 左右分隔 */
      flex-grow: 1;
   }

   .link { /* 链接 */
      margin: 0 15px;
      font-size: 17px;
      color: @ch-color-link-nav;
   }

   .link::after { /* 链接图标 */
      color: @ch-color-link-nav;
      font-size: 15px;
      vertical-align: middle;
      text-align: center;
      margin-left: .4em;
      display: inline-block;
      content: '\e605';
   }

   .link:hover {
      color: @ch-color-theme-dark;
   }

   .link:hover::after {
      color: @ch-color-theme-light;
   }
}

/* 初始化 -------- END */

/* 亮色 -------- BEGIN */
@media screen and (prefers-color-scheme: light) {
   .appbar {
      background-color: @ch-color-nav;
   }
}

/* 亮色 -------- END */

/* 暗色 -------- BEGIN */
@media screen and (prefers-color-scheme: dark) {
   .appbar {
      background-color: rgba(0, 0, 0, .8);
   }
}

/* 暗色 -------- END */

/* 不同设备适配 -------- BEGIN */
@media screen and (max-width: 800px) { /* <=800px */
   .appbar .link {
      display: none;
   }
}

@media screen and (min-width: 800px) { /* <=1024px && >800px */
   .appbar {
      .icon {
         display: none;
      }
   }
}

@media screen and (min-width: 1024px) { /* >1024px && <=1366px */
   .appbar {
      padding: 0 10%;
   }
}

@media screen and (min-width: 1366px) { /* >1366px */
   .appbar {
      padding: 0 15%;
   }
}

/* 不同设备适配 -------- END */
</style>
