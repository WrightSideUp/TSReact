import * as React from "react";
import * as Helmet from "react-helmet";

export interface HTMLProps {
  assets: any;
  url: string;
  helmet: Helmet.HelmetData;
  appHtml: string;
}

export class HTML extends React.Component<HTMLProps, {}> {
  public render() {
    const { assets, url, helmet, appHtml } = this.props;
    return (
      <html>
        <head>
          <title>My App</title>
          {helmet.meta}
          {helmet.link}
          {helmet.style}
          {helmet.title}
          {helmet.script}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700"
            rel="stylesheet"
          />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: appHtml }} />
          {this.createScript(assets.common)}
          {this.createScript(assets.main)}
          {this.createScript(assets[url])}
        </body>
      </html>
    );
  }

  private toChunkList(chunks: string | string[] | undefined): string[] {
    return chunks ? (Array.isArray(chunks) ? chunks : [chunks]) : [];
  }

  private createScript(chunks: string | string[]) {
    return this.toChunkList(chunks)
      .filter(script => script.endsWith(".js"))
      .map(script => (
        <script key={script} src={`/${script}`} type="text/javascript" />
      ));
  }
}
