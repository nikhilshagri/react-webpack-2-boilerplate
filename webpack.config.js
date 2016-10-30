const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const paths = ['/'];

module.exports = {
    entry: {
        'main': './index.js',
    },
    output: {
        filename: 'bundle.js',
        path: 'dist',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {  
                test: /\.jsx|\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new StaticSiteGeneratorPlugin('main', paths, {greet: 'Hello'})
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};