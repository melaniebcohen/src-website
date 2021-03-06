'use strict';

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const isHot = path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCSSExtractPlugin({
      filename: isHot ? 'css/[name].css' : 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].css',   
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCSSExtractPlugin.loader, 
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 60000,
              name: 'image/[name].[ext]',
            },
          },
        ],
      }
    ],
  },
};