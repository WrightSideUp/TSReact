import * as webpack from "webpack";
import * as merge from "webpack-merge";
import base from "./webpack/webpack.base";
import dev from "./webpack/webpack.dev";
import prod from "./webpack/webpack.prod";

function getConfig(env: string): webpack.Configuration {
  return merge(base(env), env === "production" ? prod : dev);
}

export default getConfig;