const path = require('path');

const config = {
  context: path.resolve(path.join(__dirname, '/src')),
  entry: './index.jsx',
  output: {
    filename: 'app.js',
    path: path.resolve(path.join(__dirname, '/dist')),
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    port: 3000,
    open: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.gif$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack',
        ],
      },
      {
        test: /\.(html)$/,
        loader: 'file?name=[path][name].[ext]',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      jquery: path.join(__dirname, '/node_modules/jquery/src/jquery'),
      'bootstrap-css': path.join(__dirname, '/node_modules/bootstrap/dist/css/bootstrap.css'),
    },
  },
};
module.exports = config;
