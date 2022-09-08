// 引入库
import sayAge from './js/birthday' // 此部分代码来自 Gaoice
// 引入样式
import './styles/reset.less'

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
        title: "关于本网站",
        content: "本网站由云萧（@crrashh1542）自己搭建。<br>部分使用 MDUI 进行 Material 化设计。<br>采用 Webpack 5 打包（但是没有其他框架，因为我菜qwq）<br>此网站代码开源，详见 Github@crrashh1542",
        buttons: [{
            text: "了解"
        }]
    })
});