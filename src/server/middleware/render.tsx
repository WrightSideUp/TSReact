import * as React from "react";
import * as ReactDOM from "react-dom/server";
import * as Express from "express";
import * as webpack from "webpack";
import Helmet from "react-helmet";
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";
import App from "../../app/App";
import HTML from "./html";

export type RenderParams = {
  clientStats: webpack.Stats;
  serverStats?: webpack.Stats;
  outputPath?: string;
};

export default ({
  clientStats
}: RenderParams): Express.RequestHandler => async (
  req: Express.Request,
  res: Express.Response
) => {
  const appMarkup = ReactDOM.renderToString(<App />);
  const helmet = Helmet.renderStatic();
  const chunkNames = flushChunkNames();
  const { Js, Styles, CssHash } = flushChunks(clientStats, { chunkNames });

  console.log(`Requested Path: ${req.path}`);
  console.log(`Chunk Names: ${chunkNames}`);

  const htmlString = ReactDOM.renderToStaticMarkup(
    <HTML
      scripts={Js}
      styles={Styles}
      cssHash={CssHash}
      appMarkup={appMarkup}
      helmet={helmet}
    />
  );

  return res.send("<!doctype html>" + htmlString);
};
