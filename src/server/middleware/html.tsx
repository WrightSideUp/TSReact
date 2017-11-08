import * as React from "react";
import { renderToString } from "react-dom/server";
import { toChunkList } from "./render";
import App from "../../app";

export class HTML extends React.Component<any, {}> {

  public render() {
    const { assets, url } = this.props;
    return (
      <html>
        <head>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" />
          <title>My App</title>
        </head>
        <body>
          <div id="root"
            dangerouslySetInnerHTML={{ __html: renderToString(<App />) }}>
          </div>
          {this.createScript(assets.common)}
          {this.createScript(assets.main)}
          {this.createScript(assets[url])}
        </body>
      </html>
    );
  }

  private createScript(chunks: string | string[]) {
    return toChunkList(chunks)
      .filter(script => script.endsWith(".js"))
      .map(script =>
        <script key={script} src={`/${script}`} type="text/javascript" />
      );
  }
}

