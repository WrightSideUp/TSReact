import * as webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const config: webpack.Configuration = {
  devtool: "source-map",
  entry: {
    main: "./src/client"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            compilerOptions: {
              module: "ESNext"
            },
            silent: true,
            transpileOnly: true
          }
        }
      }
    ]
  },
  output: {
    filename: "[chunkhash].min.js"
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      logLevel: "silent",
      "openAnalyzer": false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false
      },
      mangle: true,
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};

export default config;