// 开发环境用配置，启动方式：npm run dev
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
            filename: './styles/[name].[contenthash:8].css'
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
        })
    ],
    devServer: {
        host: "localhost", // 启动服务器的域名
        port: 3000,        // 端口
        open: false        // 是否自动打开浏览器
    },
    mode: 'development'
}