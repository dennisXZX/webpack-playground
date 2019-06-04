const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry config
  entry: './src/index.js',

  // output config
  output: {
    // output filename, use [contenthash] to take advantage of cache
    // so only change made to js files would generate a new bundle
    filename: "bundle.[contenthash].js",
    // output path, which needs to be an absolute path
    // the 'path' Node.js module is used to generate absolute path
    path: path.resolve(__dirname, './dist'),
    // specify path for all the assets within your application (like images)
    publicPath: ""
  },

  mode: "none",

  // loader config
  module: {
    // specify loaders for Webpack, each loader is represented as an object
    rules: [
      // handle image files
      {
        test: /\.(png|jpg)$/,
        use: [
          'file-loader'
        ]
      },

      // handle .css file, loader is executed from right to left
      // css-loader converts CSS to Javascript representation
      // MiniCssExtractPlugin.loader extracts CSS into a separate file
      // LEGACY: style-loader creates style tags inside HTML page and place CSS into it
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },

      // handle .scss files, loader is executed from right to left
      // sass-loader converts SASS to CSS
      // css-loader converts CSS to Javascript representation
      // MiniCssExtractPlugin.loader extracts CSS into a separate file
      // LEGACY: style-loader creates style tags inside HTML page and place CSS into it
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },

      // handle .js files,
      // use Babel to convert next generation JS into browser-recognisable JS
      // use '@babel/env' preset to allow usage of latest JS without micro-management
      // add class-properties experimental feature through Babel plugin
      // https://babeljs.io/docs/en/plugins
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ '@babel/env' ],
            plugins: [ 'transform-class-properties' ]
          }
        }
      }
    ]
  },

  // plugin config
  plugins: [
    // minimise the output JS bundle file
    new TerserPlugin(),

    // extract CSS into a separate file to reduce the bundle size
    // so user can download JS and CSS files in parallel
    // use [contenthash] to take advantage of cache
    // so only changes made to css files would generate a new CSS bundle
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css'
    }),

    // remove all the files in the output folder before generating new bundle files
    new CleanWebpackPlugin(),

    // generate an index.html with all the bundles injected into it
    new HtmlWebpackPlugin()
  ]
}