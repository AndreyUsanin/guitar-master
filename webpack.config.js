var HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require("path");
const devMode = process.env.NODE_ENV === "development";

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
};



let cleanOptions = {
  watch: true
}

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]',
              fallback: 'file-loader'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              interpolate: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            // options: {
            //   ident: "postcss",
            //   plugins: [require("precss"), require("autoprefixer")]
            // }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: path.resolve(__dirname, 'src/images/'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /.pug$/,
        use: [
          'html-loader?attrs=false', 'pug-html-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template using Handlebars",
      template: "src/index.pug",
      filename: "index.html"
      // options: {
      //   handlebarsLoader: {}
      // }
    }),
    new HtmlWebpackPlugin({
      title: "Custom template using Handlebars",
      template: "src/portfolio.pug",
      filename: "portfolio.html"
      // options: {
      //   handlebarsLoader: {}
      // }
    }),
    new HtmlWebpackPlugin({
      title: "Custom template using Handlebars",
      template: "src/zakaz.pug",
      filename: "zakaz.html"
      // options: {
      //   handlebarsLoader: {}
      // }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin('dist/', cleanOptions),
    new CopyWebpackPlugin([
      // {
      //     from: path.join(PATHS.src, 'favicon.ico'),
      //     to: path.join(PATHS.dist, 'favicon.ico')
      // },
      {
        from: path.join(PATHS.src, 'images'),
        to: path.join(PATHS.dist, 'images')
      }
    ]),
  ]
};
