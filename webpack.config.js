const webpack = require ('webpack');
const pkg = require('./package.json'); // reach to root of app && outside of node_modules
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// use for 3rd party deps
const extractSharedLibraries = new webpack.optimize.CommonsChunkPlugin({
  name: 'commonLibs',
  filename: 'commonLibs.js'
});

const treeShakenMinifier = new webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false
});

const config = {
  context: __dirname + '/src/', // reach to root of app && outside of node_modules
  entry: {
    app: './index.tsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    contentBase: __dirname //+ '/src/'
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'app.bundle.css' }),
    extractSharedLibraries,
    treeShakenMinifier,
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devtool: "source-map",
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: [/\.scss$/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap!sass-loader?sourceMap&outputStyle=compact'
          ]
        }),
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;