import * as webpack from "webpack"
import * as path from "path"

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },

  devtool: "source-map",

  resolve: {
    extensions: [ ".ts", ".tsx", ".js", ".json" ]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};

export default config;
