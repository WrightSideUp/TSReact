import * as React from "react";
import * as styles from "./hello.scss";

export interface HelloProps {
  compiler: string;
  framework: string;
  className?: string;
}

const Hello: React.SFC<HelloProps> = props => {
  return (
    <h1 className={styles.containerHeading}>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
};

export default Hello;
