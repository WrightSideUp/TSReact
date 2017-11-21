///<reference types="webpack-env" />
import * as React from "react";
import { hydrate, render } from "react-dom";
import App from "../app/App";

import { AppContainer } from "react-hot-loader";

const rootEl = document.getElementById("root");

const renderApp = (appElement: React.ReactElement<any>) => {
  return <AppContainer>{appElement}</AppContainer>;
};

hydrate(renderApp(<App />), rootEl);

if (module.hot) {
  module.hot.accept("../app/App", () => {
    const NextApp = require("../app/App").default;
    render(renderApp(<NextApp />), rootEl);
  });
}
