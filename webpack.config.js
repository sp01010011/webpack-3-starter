
//require nodejs path
const path              = require('path');

//require html-webpack-plugin package #https://github.com/jantimon/html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');

//require extract-text-webpack-plugin #https://github.com/webpack-contrib/extract-text-webpack-plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//export our webpack config
module.exports = {

    //entry to all our js files
    entry: './src/js/app.js',

    //where we output our bundled js file
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "js/app.bundle.js"
    },
    module: {
        rules:[

            //handle js compilation, we babel-loader with es2015 presets
            {test: /\.js$/, use:[
                {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            ]},

             //handle sass and use ExtractTextWebpackPlugin to extract the css
            {test: /\.scss$/, use: ExtractTextPlugin.extract({

                //if loader doesn't work add styles to head of the html doc
                fallback: "style-loader",

                //compile our sass into css
                use: ['css-loader','sass-loader']
            })}

        ]
    },
    plugins: [

        //use html-webpack-plugin to handle out html including injecting  bundled stylesheet and js
        new HTMLWebpackPlugin({
            template: "./src/app.html",
        }),
        new ExtractTextPlugin({
            filename: 'css/app.bundle.css',
            disable: false,
            allChunks: true
        })
    ],

    //dev server configuration
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        stats: "errors-only",
        open: true
    }
};