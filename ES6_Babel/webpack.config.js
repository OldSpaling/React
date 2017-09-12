var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        // 'common':"./src/js/common/",
        'index': "./src/index.js",
        'addStudent':"./src/js/addStudent.js",
        'editStudent':"./src/js/editStudent.js",
        'viewStudent':"./src/js/viewStudent.js"
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
            template:'./src/index.html',
            chunks:['index']
        })
        ,new HtmlWebpackPlugin({
            title: 'Add Student',
            hash:true,
            filename:'addStudent.html',
            template:'./src/html/addStudent.html',
            chunks:['addStudent']
        })
        ,new HtmlWebpackPlugin({
            title: 'Edit Student',
            hash:true,
            filename:'editStudent.html',
            template:'./src/html/editStudent.html',
            chunks:['editStudent']
        })
        ,new HtmlWebpackPlugin({
            title: 'View School',
            hash:true,
            filename:'viewStudent.html',
            template:'./src/html/viewStudent.html',
            chunks:['viewStudent']
        })
        // ,new webpack.HotModuleReplacementPlugin()
     ]
};