/* eslint-disable */
const { defineConfig } = require('@vue/cli-service')
const { resolve } = require("path")
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
// 判断是否生产模式
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = defineConfig({
    transpileDependencies: true,
    indexPath: 'index.html' ,
    outputDir: process.env.outputDir || 'dist',
    assetsDir: 'assets',
    configureWebpack: config => {
        const plugins = [];
        if (IS_PROD) {
            plugins.push(
                new CompressionWebpackPlugin({
                    filename: "[path].gz[query]",
                    algorithm: "gzip",
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
        }
    },
    devServer: {
        host: "localhost",
        port: 8080,
        open: false
    }
})
