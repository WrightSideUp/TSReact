import * as React from "react";
import * as Helmet from "react-helmet";

export interface HTMLProps {
  scripts: () => React.Component;
  styles: () => React.Component;
  cssHash: () => React.Component;
  appMarkup: string;
  helmet: Helmet.HelmetData;
}

const childrenArray = (
  componentFunc: () => React.Component
): React.ReactChild[] => React.Children.toArray(componentFunc().props.children);

const HTML: React.SFC<HTMLProps> = ({
  scripts,
  styles,
  cssHash,
  appMarkup,
  helmet
}) => (
  <html>
    <head>
      {helmet.base.toComponent()}
      {helmet.title.toComponent()}
      {helmet.link.toComponent()}
      {helmet.style.toComponent()}
      {helmet.script.toComponent()}
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700"
        rel="stylesheet"
      />
      {childrenArray(styles)}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: appMarkup }} />
      {cssHash()}
      <script type="text/javascript" src="/static/vendor.js" defer />
      {childrenArray(scripts)}
    </body>
  </html>
);

export default HTML;
