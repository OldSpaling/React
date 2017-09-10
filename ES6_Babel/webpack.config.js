var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        'bundle': "./src"
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name].js",
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
    ,plugins: [
        new HtmlWebpackPlugin({
            title: 'Index Page',
            hash:true,
            template:'./src/index.html'
        })
        // ,new HtmlWebpackPlugin({
        //     title: 'Add Student',
        //     hash:true,
        //     template:'./src/html/addSchool.html'
        // })
        // ,new HtmlWebpackPlugin({
        //     title: 'Edit Student',
        //     hash:true,
        //     template:'./src/html/editSchool.html'
        // })
        // ,new HtmlWebpackPlugin({
        //     title: 'View School',
        //     hash:true,
        //     template:'./src/html/viewSchool.html'
        // })
        // ,new webpack.HotModuleReplacementPlugin()
     ]
};