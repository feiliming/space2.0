var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot','babel'],
            exclude: /node_modules/,
        },{
            test: /\.css$/,
            loader: 'style!css',
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=30000'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0', 'react'],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};