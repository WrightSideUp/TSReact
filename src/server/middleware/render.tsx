import { Request, Response } from "express";
import * as React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { HTML } from "./html";
import { Helmet } from "react-helmet";
import App from "../../app";

export function createPage(req: Request, res: Response): string {
  const assets = res.locals.webpackStats.toJson().assetsByChunkName;

  const appHtml = renderToString(<App />);
  const helmet = Helmet.renderStatic();

  return renderToStaticMarkup(
    <HTML assets={assets} url={req.url} helmet={helmet} appHtml={appHtml} />
  );
}

export default function render(req: Request, res: Response): void {
  res.status(200);
  res.write("<!doctype HTML>");
  res.write(createPage(req, res));
  return res.end();
}
