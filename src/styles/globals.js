import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;

    --section-bg: rgba(93, 97, 124, 0.1);
    --section-bg-darker: rgba(93, 97, 124, 0.4);
    --primary-bg: rgba(45, 46, 73, 0.85);
    --primary-bg-hover: rgba(45, 46, 73, 0.95);
    --primary-bg-img: rgba(45, 46, 73, 0.5);
    --secondary-bg: rgba(160, 161, 191, 0.3);
    --tooltip-bg: rgba(160, 161, 191, 0.04);
    --tooltip-text: rgba(255, 255, 255, 0.4);
    --text-color: rgba(255, 255, 255, 0.7);
    --text-color-lighter: rgba(255, 255, 255, 0.8);
    --text-color-darker: rgba(255, 255, 255, 0.6);
    --text-color-gold: rgb(225, 173, 105);
    --text-color-secondary: rgb(160, 161, 191);
    --text-color-special: rgb(241, 258, 238);
    --primary-btn: rgba(45, 46, 73);

    --primary-shadow: 1px 1px 3px 1px #2D2E49;
    --secondary-shadow: 1px 1px 1px 1px #5d617c;

    --m-width: 1250px;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    /* background: ${props => props.theme.colors.background4}; */
    cursor: default;

  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyles;
