const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader",
      },
      {
        test: /\.(mp3|wav)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, "../"),
    }),
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new WebpackPwaManifest({
      "name": "Falarya Brawl",
      "shortname": "falarya-brawl",
      "start_url": "index.html",
      "scope": "./",
      "icon":[
          {
              "src": path.resolve("src/assets/img/background.gif"),
              "sizes":"1305x720",
              "type":"image/gif"
          },
          {
              "src": path.resolve("src/assets/img/ground.png"),
              "sizes":"1280x220",
              "type":"image/png"
          },
          {
              "src": path.resolve("src/assets/img/partner.png"),
              "sizes":"24x18",
              "type":"image/png"
          },
          {
              "src": path.resolve("src/assets/img/player.png"),
              "sizes":"24x18",
              "type":"image/png"
          },
          {
              "src": path.resolve("src/assets/img/skeleton.png"),
              "sizes":"14x31",
              "type":"image/png"
          }
      ],
      "theme_color": "#000",
      "background_color": "#000",
      "display": "standalone"
    })
  ],
};
