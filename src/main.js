// 引入各种各样的库
import { createApp } from 'vue'
import 'mdui/dist/js/mdui.min.js'
import 'mdui/dist/css/mdui.min.css'

// 引入 App 组件
import App from './App.vue'

// LazyLoad 

// TODO........

// 注册 App 组件
createApp(App).mount('#app')

// 控制台显示奇奇怪怪的东西
import showInfo from './functions/showInfo.js'
showInfo()
import sayAge from './functions/birthday.js'
sayAge("2007-03-18")
