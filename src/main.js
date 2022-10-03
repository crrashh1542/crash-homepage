/* imports */
// 引入 js
import sayAge from './js/birthday' // 此部分代码来自 Gaoice
// 引入样式
import './styles/reset/global.less'
import './styles/reset/components.less'
import './styles/reset/content.less'

/* functions */
// 1. 年龄显示
sayAge("2007-3-18");

// 2. mdui 抽屉栏初始化
var $ = mdui.$;
var drawer = new mdui.Drawer("#drawer");
$('#drawer-btn').on('click', function () {
    drawer.toggle();
});

// 3. mdui 对话框初始化
$('#about').on('click', function () {
    mdui.dialog({
        title: "关于本站",
        content: "本站由云萧（@crrashh1542）自己搭建。<br>部分使用 MDUI 进行 Material 化设计，采用 Webpack 5 打包<br>本网站的 Vue 化已经提上日程！<br>此网站代码详见 Github@crrashh1542",
        buttons: [{
            text: "了解"
        }]
    })
});

// 4. 设置 Vue 对象
Vue.config.productionTip = false
// 设置检测模块，如果网页中有 index-app 则不启用默认的
window.onload = function() {
    const isSpecificAppExist = document.getElementById("app") !== null
    if(isSpecificAppExist){
        console.log("No specific app.");
        // 正片开始
        const vm = new Vue({
            el: "#app",
            data: function(){
                return {
                    links: ["http://wpa.qq.com/msgrd?v=3&uin=3247380086&site=qq&menu=yes", "mailto:junzhu12345@qq.com", "https://github.com/crrashh1542"]
                }
            }
        });
    } else {
        console.log("A specific app already exists.");
    }
}
