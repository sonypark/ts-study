const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    add: './src/js/add.js',
    book: './src/js/book.js',
    edit: './src/js/edit.js',
    index: './src/js/index.js',
    login: './src/js/login.js',
    profile: './src/js/profile.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      filename: 'add.html',
      template: './src/add.html',
      chunks: ['add']
    }),
    new HtmlWebpackPlugin({
      filename: 'book.html',
      template: './src/book.html',
      chunks: ['book']
    }),
    new HtmlWebpackPlugin({
      filename: 'edit.html',
      template: './src/edit.html',
      chunks: ['edit']
    }),
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      template: './src/profile.html',
      chunks: ['profile']
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
};
