// 引入库
import sayAge from './js/birthday' // 此部分代码来自 Gaoice
// 引入样式
import './styles/reset.css'

// 1. 年龄显示
sayAge("2007-3-18");
// 2. mdui 初始化
var $ = mdui.$;
var inst = new mdui.Dialog('#info');
$('#about').on('click', function () {
    inst.open();
});