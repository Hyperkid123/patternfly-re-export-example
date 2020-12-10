const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },

  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /src\/.*\.js$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist')
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  }
}