import * as webpack from "webpack";
import { join } from "path";

const config: webpack.Configuration = {
  context: join(__dirname, "../"),
  devtool: "inline-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "./src/client/clientEntry"
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
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["file-loader", "image-webpack-loader"]
      }
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
    new webpack.optimize.CommonsChunkPlugin({
      minChunks(module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      },
      name: "common"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  stats: {
    colors: true
  },
  target: "web"
};

export default config;
