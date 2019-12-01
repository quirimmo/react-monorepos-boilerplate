const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'component-library',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
      // // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  }
};
