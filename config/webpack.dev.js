// 搭建开发服务器（devServer）的原因：每次写完代码都要手动通过 npx webpack 进行编译，这样比较麻烦，我们需要【自动化】
// 注：devServer 实际上是一个服务器环境，需要下载（ npm i webpack-dev-server -D ）
//     在开启 devServer 之前需要 >>>【在 webpack.config.js 中进行配置】<<<
//     配置完毕之后，需要通过 npx webpack-dev-server 来启动

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[contenthash:8].js',
        clean: true
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            },
            { 
                test: /\.(jpg|png)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,
                    }
                },
                generator: {
                    filename: './images/[name].[contenthash:8][ext]'
                }
            },
            { 
                test: /\.woff2$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name].[contenthash:8][ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './styles/index.[contenthash:8].css'
        }),

        // 多个文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            filename: "index.html",
            chunks: ["index", "main"],
            favicon: "./public/favicon.ico"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/contacts/index.html"),
            filename: "contacts/index.html",
            chunks: ["main"],
            favicon: "./public/favicon.ico"
        })
    ],
    devServer: {
        host: "localhost", // 启动服务器的域名
        port: 3000,        // 端口
        open: false        // 是否自动打开浏览器
    },
    mode: 'development'
}