import * as React from "react";
import styled from "styled-components";

export interface HelloProps { compiler: string; framework: string; className?: string }

const HelloContainer = styled.h1`
  background: blue;
  color: white;
  text-align: center;
  padding: 20px 0;
`;

export const Hello: React.SFC<HelloProps> = (props) => {
  return (
    <HelloContainer>Hello from {props.compiler} and {props.framework}!</HelloContainer>
  );
}