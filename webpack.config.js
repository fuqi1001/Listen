var webpack = require('webpack');
module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:9000",
    'webpack/hot/only-dev-server',
    "./src/index",
    "babel-polyfill"
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ["react-hot-loader/webpack", 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
        exclude: /node_modules/,
        plugins: [ 
          'transform-decorators-legacy', 
          'syntax-async-functions', 
          'transform-async-to-generator',
          "transform-regenerator",
          'transform-runtime',{"polyfill": false}
          ],
        
      },

      {
        test: /\.less$/,
        loader: "style!css!less"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    //product environment
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true
    })
  ]
};