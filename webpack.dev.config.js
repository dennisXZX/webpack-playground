const path = require('path');

/*
  Development Mode

  - No need to minimise JS files
  - No need to extract CSS code from the JS bundle files
  - No need to use [contenthash] in the file name as we don't consider caching in dev mode
  - Set up Webpack dev server
*/

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry config for multiple entry points
  entry: {
    'hello-world': './src/hello-world.js',
    'kiwi': './src/kiwi.js'
  },

  // output config
  output: {
    // output filename
    // use [name] to retrieve the original name of the file before bundling
    // in development we don't need to consider browser cache, so no [contenthash] is needed in the file name
    filename: "[name].bundle.js",
    // output path, which needs to be an absolute path
    // the 'path' Node.js module is used to generate absolute path
    path: path.resolve(__dirname, './dist'),
    // specify path for all the assets within your application (like images)
    publicPath: ""
  },

  // set mode to production, this would automatically enable a list of plugins for assisting development
  // this also sets process.env.NODE_ENV on DefinePlugin to value development
  mode: "development",

  // set up Webpack dev server
  devServer: {
    // where to serve content from
    contentBase: path.resolve(__dirname, 'dist'),
    // the filename that is considered the index file
    index: 'hello-world.js.html',
    // specify a port number to listen for requests on
    port: 9000,
    // enable Hot Module Replacement feature
    hot: true
  },

  // loader config
  module: {
    // specify loaders for Webpack, each loader is represented as an object
    rules: [
      // handle image files
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            },
          }
        ]
      },

      // handle .scss files, loader is executed from right to left
      // sass-loader converts SASS to CSS
      // css-loader converts CSS to Javascript representation
      // MiniCssExtractPlugin.loader extracts CSS into a separate file
      // LEGACY: style-loader creates style tags inside HTML page and place CSS into it
      {
        test:/\.(s*)css$/,
        use: [
          'style-loader',
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
      },

      // handle .hbs files,
      // handlebars template is used as a base to generate an index.html in the dist folder
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }

    ] // END OF rules
  },

  // plugin config
  plugins: [
    // remove all the files in the output folder before generating new bundle files
    new CleanWebpackPlugin(),

    // generate an HTML file with all the bundles injected into it
    // here we use our own handlebars template as a base to generate an HTML file in dist folder
    // since we have multiple entry points, we need to generate an HTML for each entry point
    new HtmlWebpackPlugin({
      // specify the output file name in dist folder
      filename: "hello-world.html",

      // specify which JS chuck should be injected into the generated HTML file
      // each chuck name should be existed in the entry object
      chunks: ['hello-world'],

      // title & description are dynamic data used in the handlebars template engine
      title: 'Hello Webpack',
      description: 'Webpack playground',

      // the base template for generating HTML file
      template: "./page-template.hbs"
    }),

    new HtmlWebpackPlugin({
      filename: "kiwi.html",
      chunks: ['kiwi'],
      title: 'Hello Kiwi',
      description: 'Kiwi playground',
      template: "./page-template.hbs"
    })

  ] // END OF plugins
}