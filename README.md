# Crrashh Homepage
由于`[v2](https://github.com/crrashh1542/crash-homepage/tree/v2)`时期屎山堆积严重，且UI设计并不尽如人意，故重开v3，使用 Astro + Tailwind 完全重写。  
**本分支尚未成型，不建议使用！**

咕咕主页是一个基于 Astro 且可自定义的个人主页，如果喜欢记得点上一个小星星 :D  

![开源协议](https://img.shields.io/github/license/crrashh1542/crash-homepage)
![当前版本](https://img.shields.io/github/package-json/v/crrashh1542/crash-homepage)
  
## 💻 自定义过程
1. 确保你的电脑上安装了 NodeJS（版本为 18.0+）。
2. 安装 PNPM（已安装可跳过）
```shell
npm install yarn -g
```
3. 安装依赖库
```shell
pnpm install
```
4. 修改 `/config/config.js` 中的站点数据为你网站的数据。你可以直接像写对象一样写在大括号里边，亦可使用 import 引入。
5. 启动开发环境，在开发服务器中预览并编辑站点。
```shell
pnpm dev
```
6. 退出开发环境并启动生产环境，生成静态页面。
```shell
pnpm build
```
7. 在 `/dist` 目录中查收打包好的页面，并在**遵守 Apache 2.0 开源协议的前提下**将网页部署至你的服务器/网页空间。
