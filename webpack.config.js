var path = require('path');

var config = {
  context: path.resolve(__dirname + '/src'),
  entry: './index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname + '/dist'),
  },
  devServer: {
    contentBase: path.join(__dirname + '/dist'),
    port: 3000,
    open: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2016']
        }
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.gif$/, loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack',
      ]},
      { test: /\.(html)$/,
        loader: "file?name=[path][name].[ext]"
      }
    ],
  },
};
module.exports = config;