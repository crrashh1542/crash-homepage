<script>
import config from "/config/config"

const [beian, link, copyright] = [config.footer.beian, config.footer.link, config.footer.copyright]
export default {
   name: 'BodyFooter',
   data() {
      return {
         link, beian, copyright
      }
   }
}
</script>

<template>
   <div class="c-footer">
      <a :href=l.link v-for="(l, index) in link" :key=index target="_blank"
         class="mdui-btn mdui-btn-raised mdui-color-theme-200 mdui-btn-icon mdui-ripple">{{ l.icon }}</a>
      <div class="c-info">
         <p>&copy; {{ copyright }}</p>
      </div>
   </div>
</template>

<style lang="less" scoped>
/* 底部按钮 */
.c-footer {
   margin: 20px 0 10px;
   text-align: center;

   .mdui-btn-icon {
      line-height: 48px;
      margin: 5px;
      font-family: 'iconfont';
      width: 48px;
      height: 48px;
   }

   .c-info {
      padding: 10px;
      text-align: center;
      line-height: 1.5;

      img {
         width: 16px;
         height: 16px;
      }
   }
}

@media screen and (max-width: 1024px) {
   .c-footer .c-info {
      padding: 30px 0;
   }
}

/* 备案信息 */
p a {
   color: #607dbb;
}

p a:visited {
   color: #607dbb;
}

p a:hover {
   color: #78909c;
}

a {
   text-decoration: none;
}
</style>
