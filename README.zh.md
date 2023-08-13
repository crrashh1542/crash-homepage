# Crrashh Homepage
这是一个基于 Vue 3 （以后可能会改为 React）且可自定义的个人主页，如果喜欢记得点上一个 star。:D  
Also see in: [English](./README.md)  

![开源协议](https://img.shields.io/github/license/crrashh1542/crash-homepage)
![当前版本](https://img.shields.io/github/package-json/v/crrashh1542/crash-homepage)
![Release 版本](https://img.shields.io/github/v/release/crrashh1542/crash-homepage?include_prereleases)
![框架](https://img.shields.io/badge/framework-Vue%203-3fb984)

此分支用于**公众可配置化**（暂定 v2.2）以及 **UI 升级**（暂定 v2.3）期间开发工作。主分支在 [crash-homepage@v2](https://github.com/crrashh1542/crash-homepage/tree/v2)。  
  
## 💻 自定义 & 网页生成
1. 确保你的电脑上安装了 NodeJS（版本为 16+）和 git。
2. 将本库 `clone` 到本地。**（一定不要下载 zip，否则会导致无法构建！）**
```shell
git clone https://github.com/crrashh1542/crash-homepage
```
3. 安装 Yarn
```shell
npm install yarn -g
```
4. 安装依赖库
```shell
yarn add @vue/cli -g
cd /path/to/crash-homepage
yarn set version berry
yarn install
```
5. 修改 `/config/config.js` 中的站点数据为你网站的数据。你可以直接像写对象一样写在大括号里边，亦可使用 import 引入。
6. 启动开发环境，在开发服务器中预览并编辑站点。
```shell
yarn serve
```
7. 推出开发环境并启动生产环境，生成静态页面。
```shell
yarn build
```
8. 在 `/dist` 中查收打包好的页面，并在**遵守 Apache 2.0 开源协议的前提下**将网页部署至你的服务器/网页空间。

## 🪄 关于分支
| 主分支  | 开发代号  | 描述            |
|--------|-----------|-----------------|
| `main` | main      | 该分支包含稳定完备的内容。 |
| `th`   | threshold | 该分支不会有任何新的大改动，仅用作 v2.2.x 修修补补。 |
| `gk`   | gingko    | 该分支用于 UI 翻新。 |

| 子分支        | 描述            |
|--------------|-----------------|
| `release`    | 该分支用于发布 release 用。 |
| `prerelease` | 该分支用于累积稳定可用的更新后，合并进 `release` 分支。 |
| `flt`        | 该分支包含对已完成任务的分支中 bug 的修复和维护。 |
| `refresh`    | 该分支含有新功能的最新推送。 |
| `dev`        | 意义不明的新功能开发分支。 |
| `prod`       | 该分支足够完备以在生产模式中使用，但对合并 `prerelease` 而言仍需要完善。 |