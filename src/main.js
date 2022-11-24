// 引入各种各样的库
import { createApp } from 'vue'
import 'mdui/dist/js/mdui.js'
import 'mdui/dist/css/mdui.css'
// 引入 App
import App from './App.vue'

// 控制台显示奇奇怪怪的东西
import showInfo from './functions/showInfo.ts'
showInfo()
import sayAge from './functions/birthday.ts'
sayAge("2007-03-18")

// 样式表
import './assets/styles/reset/global.less'
import './assets/styles/index.less'

createApp(App).mount('#app')
