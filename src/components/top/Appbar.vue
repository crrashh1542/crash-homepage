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
         <i class="material-icons">menu</i>
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
/* 初始化 -------- BEGIN */
.appbar {
   position: fixed;
   left: 0;
   top: 0;
   z-index: 999;
   width: 100%;
   height: 64px;
   line-height: 64px;
   padding: 20px;
   backdrop-filter: blur(6px);
   display: flex;
   align-items: center;
   box-sizing: border-box;

   a {
      color: inherit;
   }

   .icon { /* 抽屉栏打开图标 */
      width: 36px;
      height: 36px;
      line-height: 36px;
      margin: 0 5px 0 0;
      cursor: pointer;

      .material-icons {
         vertical-align: middle;
         text-align: center;
      }
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
      color: #888;
   }

   .link::after { /* 链接图标 */
      color: #ccc;
      font-size: 15px;
      vertical-align: middle;
      text-align: center;
      margin-left: .4em;
      display: inline-block;
      content: '\e605';
   }
}

/* 初始化 -------- END */

/* 亮色 -------- BEGIN */
@media screen and (prefers-color-scheme: light) {
   .appbar {
      background-color: rgba(255, 255, 255, .8);
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
