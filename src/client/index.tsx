///<reference types="webpack-env" />

import * as React from "react";
import { hydrate, render } from "react-dom";
import App from "../app";
import { AppContainer } from "react-hot-loader";
import { injectGlobal } from "styled-components";

const rootEl = document.getElementById("root");

const renderApp = (appElement: React.ReactElement<any>) => {

  injectGlobal`
    body {
      background-color: ghostwhite;
      font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
    }
  `
  return (
    <AppContainer>
      {appElement}
    </AppContainer>
  );
}

hydrate(renderApp(<App />), rootEl);

hydrate(<App />, rootEl);

if (module.hot) {
  module.hot.accept("../app", () => {
    const NextApp = require("../app").default;
    render(renderApp(<NextApp />), rootEl);
  })
}
