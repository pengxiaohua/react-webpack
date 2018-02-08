const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
    entry: {
        app: path.join(__dirname, '../client/app.js'),
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public/',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            },
            {
                test: /.jsx$/,
                loader: 'babel-loader',
            },
            {
                test: /.js$/,
                loader: 'babel-loader', 
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../client/template.html')
        })
    ]
}

// 只有在开发中才使用的
if (isDev) {
    config.entry = {
        app:[
            'react-hot-loader/patch',
            path.join(__dirname, '../client/app.js')
        ]
    }
    config.devServer = {
        host: '0.0.0.0',  // 如果想外部其他人也能访问，就设为0.0.0.0，默认为localhost
        port: '8088',
        contentBase: path.join(__dirname, '../dist'),// 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
        hot: true,  // 启用 webpack 的模块热替换
        overlay: {   // 如果webpack在编译过程中出错，则在网页显示信息
            errors: true
        },
        publicPath: '/public/',
        // 任意的 404 响应被替代为设置的index
        historyApiFallback: {
            index: '/public/index.html'
        },
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config