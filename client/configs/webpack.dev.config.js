const path = require('path');

/*
  Development Mode

  - No need to minimise JS files
  - No need to extract CSS code from the JS bundle files
  - Use style-loader to inject style to the generated HTML page
  - No need to use [contenthash] in the file name as we don't take into account caching in dev mode
  - Set up Webpack dev server
*/

const { CleanWebpackPlugin } = require('clean-webpack-plugin/dist/clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // entry config for multiple entry points
  entry: {
    'hello-world': path.resolve(__dirname, '../apps/hello-world/index.ts'),
    'kiwi': path.resolve(__dirname, '../apps/kiwi/index.ts'),
    'react': path.resolve(__dirname, '../apps/react/index.tsx')
  },

  // output config
  output: {
    // output filename
    // use [name] to retrieve the original name of the file before bundling
    // in development we don't need to consider browser caching, so no [contenthash] is needed in the file name
    filename: "[name].bundle.js",

    // output path, which needs to be an absolute path
    path: path.resolve(__dirname, '../dist'),

    // specify path for all the assets within your application (like images and fonts)
    publicPath: ""
  },

  // set mode to development, this would automatically enable a list of plugins for assisting development
  // this also sets process.env.NODE_ENV on DefinePlugin to value 'development'
  mode: "development",

  // set up Webpack dev server
  devServer: {
    // where to serve content from
    contentBase: path.resolve(__dirname, 'dist'),
    // the filename that is considered the index file
    index: 'hello-world.html',
    // specify a port number listening to requests
    port: 9000,
    // enable Hot Module Replacement feature
    hot: true
  },

  // automatically resolve these file extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  optimization: {
    // use SplitChunksPlugin to extract common code into a separate chunk
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      automaticNameDelimiter: "_"
    }
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
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images'
            },
          }
        ]
      },

      // handle .scss files, loader is executed from right to left
      // sass-loader converts SASS to CSS
      // postcss-loader converts modern CSS into something that most browsers can understand
      // use .postcssrc.json to config postcss-loader
      // "precss" plugin allows you to use the latest CSS features
      // "autoprefixer" plugin adds vendor prefixes to CSS rules
      // css-loader translates CSS into CommonJS modules
      // style-loader injects style tags to the generated HTML page
      {
        test:/\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // handle .ts and .tsx files
      // need to create a typings.d.ts in the project root to handle image and JSON imports in TS file
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
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
      // handlebars template is used as a base to generate HTML files in the dist folder
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
    // remove all the files in the output folder (dist folder) before generating new bundle files
    new CleanWebpackPlugin(),

    // generate an HTML file with all the bundles injected into it
    // here we use our own handlebars template as a base to generate an HTML file in dist folder
    // since we have multiple entry points, we need to generate an HTML for each entry point
    new HtmlWebpackPlugin({
      // specify the output file name in dist folder
      filename: "hello-world.html",

      // specify which JS chunk should be injected into the generated HTML file
      // each chunk name should be associated with the entry object
      chunks: ['hello-world', 'vendors_hello-world', 'vendors_hello-world_kiwi', 'vendors_hello-world_kiwi_react'],

      // title & description are dynamic data used in the handlebars template engine
      title: 'Hello World',
      description: 'Hello playground',

      // the base template for generating HTML file
      template: "./templates/page-template-bootstrap.hbs"
    }),

    new HtmlWebpackPlugin({
      filename: "kiwi.html",
      chunks: ['kiwi', 'vendors_hello-world_kiwi', 'vendors_hello-world_kiwi_react'],
      title: 'Hello Kiwi',
      description: 'Kiwi playground',
      template: "./templates/page-template-kiwi.hbs"
    }),

    new HtmlWebpackPlugin({
      filename: "react.html",
      chunks: ['react', 'vendors_react', 'vendors_hello-world_kiwi_react'],
      title: 'Hello React',
      description: 'React playground',
      template: "./templates/page-template-SPA.hbs"
    })

  ] // END OF plugins
}