var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: 
    [
        'babel-polyfill',
        './src/index.jsx'
    ],
    output: 
    {
        path: 'build',
        publicPath: 'build',
        filename: 'bundle.js'
    },
    module: 
    {
        loaders: 
        [
            { test: /\.jsx$/  , loader: 'babel', include: path.join(__dirname, 'src') },
        ]
    },
    resolve: {
        root: [
            path.resolve('./src')
        ]
    }
};