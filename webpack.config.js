const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.join( __dirname, '/dist/js' ),
        filename: 'script.js'
    },
    devServer: {
        contentBase: './dist',
        publicPath: '/js/',
        port: 8080,
        watchContentBase: true,
        hot: true
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ],
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/env']
                }
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader'
            }
        ]
    }
};
