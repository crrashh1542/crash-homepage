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
         <i class="mdui-icon material-icons">menu</i>
      </a>
      <a href="" class="title">{{ site.title }}</a>
      <!-- 左右分隔 -->
      <div class="spacer"></div>
      <!-- 右侧链接 -->
      <div class="links">
         <a v-for="i in link" :key="i.name" :href="i.link" class="btn" target="_blank">{{ i.name }}</a>
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

   .icon {
      width: 36px;
      height: 36px;
      line-height: 36px;
      margin: 0 5px 0 0;
      cursor: pointer;
   }

   .title { /* 左侧标题栏 */
      font-weight: 500;
      font-size: 24px;
   }

   .spacer { /* 中间占位 */
      flex-grow: 1;
   }

   .btn {
      margin: 0 15px;
      font-size: 17px;
      color: #888;
   }

   .btn::after {
      color: #bbb;
   }
}

/* 初始化 -------- END */

/* 默认模式 (亮色) -------- BEGIN */
/* Appbar 基础部分 */
.appbar {
   background-color: rgba(255, 255, 255, .8);
}

@media screen and (max-width: 800px) {
   .appbar .btn {
      display: none;
   }
}

@media screen and (min-width: 800px) {
   body.mdui-drawer-body-left {
      padding-left: 0;
   }

   #drawer {
      display: none;
   }

   .appbar {
      .icon {
         display: none;
      }
   }
}

@media screen and (min-width: 1024px) {
   .appbar {
      padding: 0 10%;
   }
}

@media screen and (min-width: 1366px) {
   .appbar {
      padding: 0 15%;
   }
}
</style>
