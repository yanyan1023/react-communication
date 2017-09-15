const webpack = require("webpack"),
    htmlWebpackPlugin = require("html-webpack-plugin"),
    path = require("path"),
    IconFontCreatePlugin = require('iconfont-create-plugin');
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.jpg|.png$/,
                loader: "url-loader"
            }

        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        host: "localhost",
        port: "9200",
        hot: true,
        contentBase: path.join(__dirname, "src/static"),
        watchContentBase: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js"
        }),
        // new IconFontCreatePlugin({
        //     name: "icon",
        //     output: '/output/font',
        // })
    ]
}