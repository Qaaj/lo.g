var path = require('path');
var Webpack = require('webpack');
var node_modules_dir = path.join(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

var config = {
    devtool: 'eval',
    entry: [mainPath],
    output: {
    
      path: buildPath,
      filename: 'log.js'
    },
    plugins: [
      
    ]
};

if(process.env.NODE_ENV == "production"){
    config.output.filename = 'log.min.js'
    config.plugins.push(new Webpack.optimize.UglifyJsPlugin({
        compress: {
           warnings: false
        }
    }));
}

module.exports = config;