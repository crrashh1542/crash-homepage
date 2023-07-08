<script>
import config from "../../config/config"
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
   <div class="c-appbar mdui-appbar mdui-color-theme mdui-color-text-white">
      <div class="mdui-toolbar">
         <!-- 左侧 icon & 标题 -->
         <a class="mdui-btn mdui-btn-icon mdui-ripple" @click="trigger">
            <i class="mdui-icon material-icons">menu</i>
         </a>
         <a href="/" class="mdui-typo-headline">{{ site.title }}</a>
         <!-- 左右分隔 -->
         <div class="mdui-toolbar-spacer"></div>
         <!-- 右侧链接 -->
         <a v-for="i in link" :key="i.name" :href="i.link" class="c-btn mdui-ripple" target="_blank">{{ i.name }}</a>
      </div>
   </div>
</template>

<style lang="less" scoped>
.mdui-appbar .mdui-toolbar {
   height: 64px;
   line-height: 64px;
}

@media screen and (max-width: 800px) {
   .c-appbar .c-btn {
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

   .c-appbar {
      .mdui-btn-icon {
         display: none;
      }
   }
}

@media screen and (min-width: 1024px) {
   .c-appbar {
      padding: 0 10%;
   }
}

@media screen and (min-width: 1366px) {
   .c-appbar {
      padding: 0 15%;
   }
}

/* 修复顶部链接点击时 ripple 过小的问题 */
.mdui-toolbar>* {
   margin: 0;
   padding: 0 16px;
}</style>
