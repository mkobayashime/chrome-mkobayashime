"use strict"

const path = require("path")
const glob = require("glob")

const SizePlugin = require("size-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ZipPlugin = require("zip-webpack-plugin")

const isDev = Boolean(process.env.ENV_DEV)

const version = require("./package.json").version

const entries = glob
  .sync("./src/@(contentScripts|background)/*.js")
  .reduce((acc, cur) => {
    const key = path.basename(cur, ".js")
    acc[key] = cur
    return acc
  }, {})

module.exports = {
  mode: isDev ? "development" : "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  entry: entries,
  stats: {
    all: false,
    errors: true,
    builtAt: true,
  },
  devtool: isDev ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new SizePlugin(),
    new CopyWebpackPlugin([
      {
        from: "**/*",
        context: "public",
      },
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    ...(isDev
      ? []
      : [
          new ZipPlugin({
            path: path.resolve(__dirname, "build"),
            filename: `${version}`,
          }),
        ]),
  ],
}
