var path = require('path');
module.exports = {
    entry: {
        bundle:"./src/js",
        styleBundle:"./src/css"
    },
    output: {
        path: __dirname,
        filename: "./public/[name].js",
    },
    module: {
        loaders: [
            { 
                test: path.join(__dirname, 'src/js'),
                loader:'babel-loader',
                query:{
                    presets:['es2015']
                } 
            }
        ]
    }
};