var path = require('path');
var webpack = require('webpack');

var config = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot','babel-loader?presets[]=react,presets[]=es2015'],
            exclude: /node_modules/,
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
};
module.exports = config;