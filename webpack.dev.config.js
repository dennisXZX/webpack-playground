const path = require('path');

/*
  Development Mode

  - No need to minimise JS files
  - No need to extract CSS code from the JS bundle files
  - Set up Webpack dev server
*/

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry config
  entry: './src/index.js',

  // output config
  output: {
    // output filename
    // in development we don't need to consider browser cache, so no [contenthash] is needed in the file name
    filename: "bundle.js",
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
          'file-loader'
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

    // generate an index.html with all the bundles injected into it
    // here we use our own handlebars template as the base to generate an index.html in dist folder
    new HtmlWebpackPlugin({
      title: 'Hello Webpack',
      description: 'Webpack playground',
      template: "./index.hbs"
    })

  ] // END OF plugins
}