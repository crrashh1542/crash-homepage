// 生产环境用配置，启动方式：npm run build
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './static/js/[name].[contenthash:8].js',
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
                    filename: './static/images/[name].[contenthash:8][ext]'
                }
            },
            { 
                test: /\.woff2$/,
                type: 'asset/resource',
                generator: {
                    filename: './static/fonts/[name].[contenthash:8][ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './static/styles/[name].[contenthash:8].css'
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
    mode: 'production',
    devtool: "source-map"
}