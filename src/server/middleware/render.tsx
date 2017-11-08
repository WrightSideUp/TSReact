import { Request, Response } from "express";
import * as React from "react";
import * as ReacDOM from "react-dom/server";
import { HTML } from "./html";
//import { App } from "../../app";

export function toChunkList(chunks: string | string[] | undefined): string[] {
  return chunks ? (Array.isArray(chunks) ? chunks : [chunks]) : [];
}

export function createPage(req: Request, res: Response): string {
  const assets = res.locals.webpackStats.toJson().assetsByChunkName;
  return ReacDOM.renderToStaticMarkup(
    <HTML assets={assets} url={req.url} />
  );
}

export default function render(req: Request, res: Response): void {
  res.status(200);
  res.write("<!doctype HTML>");
  res.write(createPage(req, res));
  return res.end();
}