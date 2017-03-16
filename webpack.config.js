const HtmlWebpackPlugin             = require('html-webpack-plugin')
const ExtractTextPlugin             = require("extract-text-webpack-plugin")
const NyanProgressPlugin            = require('nyan-progress-webpack-plugin')
const path                          = require('path')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

module.exports = {
    entry  : './src/index.js',
    output : {
        filename: 'bundle.js',
        path    : path.resolve(__dirname, './')
    },
    module : {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {
                test: /\.html$/,
                use : [{
                    loader : 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use : ExtractTextPlugin.extract([
                    {loader: 'css-loader', options: {minimize: true}},
                    'postcss-loader',
                    'sass-loader'
                ])
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("index.css"),
        new HtmlWebpackPlugin({
            hash        : true,
            inlineSource: '.(js|css)',
            inject      : true,
            template    : 'src/index.html'
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
}