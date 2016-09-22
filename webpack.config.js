var webpack = require('webpack');
var path = require('path');
var cssnext = require('postcss-cssnext');
var postcssFocus = require('postcss-focus');
var postcssReporter = require('postcss-reporter');
var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /(globalStyles\.css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src', 'components')],
        loader: 'style!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss'
      },
      {
        test: /(js|jsx)/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // This config is only for config and client side code. So here we
    // need to set environments accordingly.
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'CLIENT': JSON.stringify(true)
      }
    }),
    // Emit a JSON file with assets paths.
    new AssetsPlugin({
      path: path.resolve(__dirname, './public/dist'),
      filename: 'assets.json',
      prettyPrint: true
    }),
    new ExtractTextPlugin("global-styles.css")
  ],

  postcss(bundler) {
    return [
      postcssFocus(),
      cssnext({
        browsers: ['last 2 versions', 'IE > 10']
      }),
      postcssReporter({
        clearMessages: true
      })
    ]
  },

  devServer: {
    hot: true,
    contentBase: './public/'
  }
};
