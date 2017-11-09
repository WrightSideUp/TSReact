import { injectGlobal } from "styled-components";

const setGlobalStyles = () => {
  injectGlobal`
    body {
      background-color: ghostwhite;
      font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
    }
  `;
};

export default setGlobalStyles;
