/// <reference types="webpack" />

import "babel-polyfill";
import * as Express from "express";
import * as webpack from "webpack";
import * as webpackDevMiddleware from "webpack-dev-middleware";
import * as webpackHotMiddleware from "webpack-hot-middleware";
import * as webpackHotServerMiddleware from "webpack-hot-server-middleware";
import clientConfig from "../../webpack/client.dev";
import serverConfig from "../../webpack/server.dev";

const output = clientConfig.output;
const publicPath = (output && output.publicPath) || "";
const outputPath = (output && output.path) || "";

const app = Express();

const isDevelopment: boolean = process.env.NODE_ENV === "development";

if (isDevelopment) {
  // 'as any' cast needed because current webpack typings do not
  // allow access to 'compilers' member.
  const multiCompiler = webpack([clientConfig, serverConfig]) as any;
  const clientCompiler = multiCompiler.compilers[0];

  app.use(
    webpackDevMiddleware(multiCompiler, {
      publicPath,
      stats: { colors: true, warnings: false }
    })
  );
  app.use(webpackHotMiddleware(clientCompiler, { log: false }));
  app.use(
    webpackHotServerMiddleware(multiCompiler, {
      serverRendererOptions: { outputPath }
    })
  );
}
// else {
//   const clientStats = require("../buildClient/stats.json");
//   const serverRender = require("../buildServer/main.js").default;

//   app.use(publicPath, Express.static(outputPath));
//   app.use(serverRender({ clientStats, outputPath }));
// }

app.listen(3750, () => {
  console.log("Server started on localhost:3750");
});
