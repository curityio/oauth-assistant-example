const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "[name].bundle.js",
    sourceMapFilename: "[file].map",
  },
  devServer: {
    static: "./"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "assisted.html",
      template: "./assisted.html",
      chunks: ["exampleEntry"],
    }),
    new webpack.DefinePlugin({
      "ISSUER": JSON.stringify(process.env.OAUTH_ASSISTANT_EXAMPLE_ISSUER) ??
          (process.env.CURITY_IDENTITY_SERVER_DEFAULT_CONFIG ? "`${BASE_URL}/oauth/v2/oauth-anonymous`" : "`${BASE_URL}/dev/oauth/anonymous`"),
      "EXAMPLE_BASE_URL": JSON.stringify(process.env.OAUTH_ASSISTANT_EXAMPLE_BASE_URL ?? "https://localhost:8443")
    }),
  ],
  resolve: {
    fallback: {
      "https": false,
      "crypto": false
    }
  }
};
