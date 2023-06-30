# Crrashh Homepage
这是一个基于 Vue 3 且可自定义的个人主页，如果喜欢记得点上一个 star。:D  

![开源协议](https://img.shields.io/github/license/crrashh1542/crash-homepage)
![当前版本](https://img.shields.io/github/package-json/v/crrashh1542/crash-homepage)
![Release 版本](https://img.shields.io/github/v/release/crrashh1542/crash-homepage?include_prereleases)
![框架](https://img.shields.io/badge/framework-Vue%203-3fb984)

此分支用于**公众可配置化**（暂定 v2.2）以及 **UI 升级**（暂定 v2.3）期间开发工作。主分支在 [crash-homepage@v2](https://github.com/crrashh1542/crash-homepage/tree/v2)。  
  
## 💻 自定义 & 网页生成
1. 确保你的电脑上安装了 NodeJS（版本为 16+）和 git。
2. 安装 pnpm
```shell
npm install pnpm -g
```
3. 安装依赖库
```shell
pnpm install @vue/cli -g
pnpm install
```
4. 修改 `/src/data/siteInfo.json` 中的站点数据为你网站的数据。
5. 启动开发环境，在开发服务器中查看站点效果。
```shell
pnpm serve
```
6. 启动生产环境，生成静态页面。
```shell
pnpm build
```
7. 在 `/dist` 中查收打包好的页面，并在**遵守 Apache 2.0 开源协议的前提下**将网页部署至你的服务器/网页空间。

## 🐛 问题反馈
遇到有使用/代码逻辑上的 bug，或欢迎在 [Issues](https://github.com/crrashh1542/crash-homepage/issues) 中提出问题，或者[提交 PR](https://github.com/crrashh1542/crash-homepage/pulls)。作为一个初出茅庐的新手，我对你的贡献和指导感激不尽。

预告：下一大版本（v3）将由 Vite + React 构建，整体完工可能在 2023 年第一至第二季度。