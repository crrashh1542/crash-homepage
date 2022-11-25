// 引入各种各样的库
import { createApp } from 'vue'
import 'mdui/dist/js/mdui.js'
import 'mdui/dist/css/mdui.css'
import VueLazyLoad from 'vue-lazyload'

// 引入 App 组件
import App from './App.vue'

// LazyLoad 

// TODO........

// 注册 App 组件
createApp(App).mount('#app')

// 控制台显示奇奇怪怪的东西
import showInfo from './functions/showInfo.ts'
showInfo()
import sayAge from './functions/birthday.ts'
sayAge("2007-03-18")
