import * as React from "react";
import Hello from "./components/Hello";
import Goodbye from "./components/Goodbye";

export default class App extends React.Component<any> {
  render() {
    return (
      <div>
        <Hello framework="React" compiler="TypeScript" />
        <Goodbye name="Bruce" town="Springfield" />
      </div>
    );
  }
}


