import * as webpack from "webpack";
import * as path from "path";

const config: webpack.Configuration = {
  name: "styles",
  target: "web",
  devtool: "eval",
  entry: [path.resolve(__dirname, "../src/client/clientEntry")],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../buildStyles"),
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
        use: [
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]--[hash:base64:5]",
              importLoaders: 1,
              camelCase: true,
              namedExport: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
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
  }
};

export default config;
