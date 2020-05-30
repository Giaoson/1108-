// webpack.config.js
const tsImportPluginFactory = require('ts-import-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
    // import './src/settings.js'
module.exports = {
    //  基本路径
    publicPath: './',
    //  放置静态资源的目录
    assetsDir: 'static',
    //  html 的输出路径
    // indexPath: "index.html",
    //文件名哈希
    // filenameHashing: true,
    //  是否在保存的时候使用 `eslint-loader` 进行检查。
    // lintOnSave: true,
    /* devserver {
          proxy: {

                     '/api': {

                           target: "http://app.rmsdmedia.com",

                          changeOrigin: true,

                          secure: false,

                          pathRewrite: {

                                 "^/api": ""

                               }

                         },

                     '/foo': {

                           target: '<other_url>'

                         }

                   }, // string | Object

              before: app => {}
      } */
    // CSS 相关选项

    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true, // Css-loader 时，使用 `{ Css: { ... } }`。
        // 为预处理器的 loader 传递自定义选项。比如传递给

        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },

            postcss: {
                // 这里的选项会传递给 postcss-loader
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 100, // 1rem等于多少px
                    }),
                ],
            },
        },
    },
}