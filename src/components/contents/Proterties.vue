<script>
export default {
   name: "BodyProterties",
   data() {
      return {
         proterty: [
            {
               "item": "智商",
               "value": "{width: 40%;}",
               "tip": "偶尔脑袋也会宕机"
            },
            {
               "item": "技术",
               "value": "{width: 70%;}",
               "tip": "有，但是不多，会的比大部分人多一点点"
            },
            {
               "item": "社恐",
               "value": "{width: 50%;}",
               "tip": "多数时候有，也有时候无"
            },
            {
               "item": "心理状态",
               "value": "{width: 60%;}",
               "tip": "抗压能力还是有的，但也有崩溃的时候"
            }
         ]
      }
   }
}
</script>

<template>
   <div class="c-proterty mdui-row">
      <div class="c-proterty-unit mdui-col-xs-12 mdui-col-md-5" v-for="(p, index) in proterty" :key="index">
         <div class="c-title">{{ p.item }}</div>
         <div class="mdui-progress">
            <span class="mdui-progress-determinate" :style="p.value" mdui-tooltip=""></span>
         </div>
      </div>
   </div>
</template>

<style scoped lang="less">
.c-proterty {
   .c-proterty-unit {
      margin: 4px 5px 20px 20px;

      .c-title {
         font-size: 17px;
         text-indent: .25em;
      }

      .mdui-progress {
         width: 80%;
         height: 7px;
         margin-top: 7px;
      }
   }
}

@media screen and (max-width: 600px) {
   .c-proterty {
      .c-proterty-unit {
         margin: 4px;
      }
   }
}</style>
