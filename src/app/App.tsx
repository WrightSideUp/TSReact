import * as React from "react";
import Hello from "./components/Hello";
import Goodbye from "./components/Goodbye";
import Helmet from "react-helmet";
import "./app.scss";

export default class App extends React.Component<any> {
  render() {
    return (
      <div>
        <Helmet titleTemplate="TSReact %s" defaultTitle="TSReact">
          <meta charSet="utf-8" />
          <meta property="og:site_name" content="TSReact" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="TSReact" />
          <meta
            property="og:description"
            content="Demonstration of React and Typescript Universal Application"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <title>TSReact</title>
        </Helmet>
        <Hello framework="React" compiler="TypeScript" />
        <Goodbye name="Bruce" town="Springfield" />
      </div>
    );
  }
}
