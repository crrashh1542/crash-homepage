const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.js',
        component: './src/main.components.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './js/main.[contenthash:8].js',
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
                    filename: './img/[name].[contenthash:8][ext]'
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
            filename: './css/index.[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ],
    mode: 'production',
    devtool: "source-map"
}