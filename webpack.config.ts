import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Webpack from 'webpack';

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    compress: true,
    port: 9000,
    client: {
      reconnect: 5,
      progress: true,
      overlay: {
        errors: true,
        warnings: true,
        runtimeErrors: true,
      },
    },
    hot: true,
    open: true,
  },
};
