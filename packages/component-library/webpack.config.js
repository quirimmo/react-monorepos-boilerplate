const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'component-library': './lib/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
      // {
      //   test: /\.(ts|js)x?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
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
  },
  plugins: [new CleanWebpackPlugin()]
};
