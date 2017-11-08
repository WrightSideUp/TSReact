import * as debug from "debug";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import getConfig from "../../../webpack.config";

const config = getConfig(process.env.NODE_ENV || "development");
const compiler = webpack(config);
const log = debug("app:webpack:dev");
const warn = debug("app:webpack:dev:warn");
const error = debug("app:webpack:dev:error");

console.log(config.entry);

export const devMiddleware = webpackDevMiddleware(compiler, {
  error,
  log,
  publicPath: (config.output && config.output.publicPath) || "/",
  serverSideRender: true,
  stats: {
    colors: true
  },
  warn
});

export const hotMiddleware = webpackHotMiddleware(compiler);