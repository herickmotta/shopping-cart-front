import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
    }

    #root {
      width: 100%;
      height: 100%auto;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    strong {
        font-weight: bold;
    }

    button, input, textarea {
        outline: none;
        border: none;
        background: none;
        color: inherit;
        font: inherit;
        padding: 0px;
    }
`;

export default GlobalStyle;
