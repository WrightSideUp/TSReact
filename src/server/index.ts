import * as debug from "debug";
import * as Express from "express";
import render from "./middleware/render";
import { devMiddleware, hotMiddleware } from "./middleware/webpack-server";

const log = debug("app:server");

const app = Express();

if (process.env.NODE_ENV == "development") {
  log("Using Development Server Config");
  app.use(devMiddleware);
  app.use(hotMiddleware);
}

app.get("*", render);

devMiddleware.waitUntilValid(() => {
  app.listen(3750, () => {
    log("Server started on localhost:3750");
  });
});