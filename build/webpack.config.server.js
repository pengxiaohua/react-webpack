const path = require('path');

module.exports = {
    target: 'node',  // 打包出来的内容执行环境设置
    entry: {
        app: path.join(__dirname, '../client/server-entry.js'),
    },
    output: {
        filename: 'server-entry.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public',
        libraryTarget: 'commonjs2',    // 打包出来的js模块方案，此处使用commonjs2
    },
    module: {
        rules: [
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
}