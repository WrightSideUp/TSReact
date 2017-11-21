import * as webpack from "webpack";
import * as path from "path";
import * as WriteFilePlugin from "write-file-webpack-plugin";
import * as AutoDllPlugin from "autodll-webpack-plugin";
import * as ExtractCssChunks from "extract-css-chunks-webpack-plugin";

const config: webpack.Configuration = {
  name: "client",
  target: "web",
  devtool: "eval",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    path.resolve(__dirname, "../src/client/clientEntry")
  ],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../buildClient"),
    publicPath: "/static/"
  },
  stats: { colors: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: "awesome-typescript-loader" }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractCssChunks.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName: "[name]__[local]--[hash:base64:5]",
                importLoaders: 1,
                camelCase: "only",
                sourceMap: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new WriteFilePlugin(),
    new ExtractCssChunks(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["bootstrap"],
      filename: "[name].js",
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new AutoDllPlugin({
      context: path.join(__dirname, ".."),
      filename: "[name].js",
      entry: {
        vendor: [
          //"babel-polyfill",
          "history/createBrowserHistory",
          "react",
          "react-dom",
          "react-helmet",
          "react-redux",
          "redux",
          "redux-first-router",
          "redux-first-router-link",
          "fetch-everywhere"
        ]
      }
    })
  ]
};

export default config;
