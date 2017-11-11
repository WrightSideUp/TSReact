import * as React from "react";
// import * as logo from "./Logo.png";
// declare function require(s: string): string;
// const logo = require("./Logo.png");

export interface GoodbyeProps {
  name: string;
  town: string;
}

export default class Goodbye extends React.Component<GoodbyeProps, {}> {
  render() {
    const { name, town } = this.props;

    return (
      <div>
        <img src={require("./logo.png")} />
        <span>
          Goodbye from {name} in {town}
        </span>
      </div>
    );
  }
}
