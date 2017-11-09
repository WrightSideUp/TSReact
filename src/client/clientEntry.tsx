///<reference types="webpack-env" />
import * as React from "react";
import { hydrate, render } from "react-dom";
import App from "../app";
import setGlobalStyles from "../app/appStyles";

import { AppContainer } from "react-hot-loader";

const rootEl = document.getElementById("root");

const renderApp = (appElement: React.ReactElement<any>) => {
  return <AppContainer>{appElement}</AppContainer>;
};

setGlobalStyles();

hydrate(renderApp(<App />), rootEl);

if (module.hot) {
  module.hot.accept("../app", () => {
    const NextApp = require("../app").default;
    render(renderApp(<NextApp />), rootEl);
  });
}
