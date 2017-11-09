import * as debug from "debug";
import * as Express from "express";
import render from "./middleware/render";
import { devMiddleware, hotMiddleware } from "./middleware/webpack-server";

const log = debug("app:server");

const app = Express();

const isProduction: boolean = process.env.NODE_ENV === "production";
console.log(`isProduction = ${isProduction}`);

if (!isProduction) {
  log("Using Development Server Config");
  app.use(devMiddleware);
  app.use(hotMiddleware);
}

app.get("*", render);

if (!isProduction) {
  devMiddleware.waitUntilValid(() => {
    app.listen(3750, () => {
      log("Server started on localhost:3750");
    });
  });
} else {
  app.listen(3750, () => {
    log("Server started on localhost:3750");
  });
}
