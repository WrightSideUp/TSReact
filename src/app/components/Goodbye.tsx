import * as React from "react";


export interface GoodbyeProps {
  name: string;
  town: string;
}

export default class Goodbye extends React.Component<GoodbyeProps, {}> {
  render() {

    const { name, town } = this.props;

    return (
      <div>
        <span>So LONG! from {name} in {town}</span>
      </div>
    );
  }
}

