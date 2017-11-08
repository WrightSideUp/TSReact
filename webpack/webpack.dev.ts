import * as webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const config: webpack.Configuration = {
  devtool: "inline-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "./src/client",
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /.tsx?$/,
        use: [
          { loader: "react-hot-loader/webpack" },
          {
            loader: "awesome-typescript-loader",
            options: {
              silent: true
            }
          }
        ]
      },
    ]
  },
  output: {
    filename: "[name].js",
    pathinfo: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin({
      logLevel: "silent",
      openAnalyzer: false
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  stats: {
    colors: true
  },
  target: "web"
}

export default config;