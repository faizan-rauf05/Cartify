import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    .container{
        max-width: 1100px;
        margin: auto;
    }
    :root{
        --hover-color:#DB4444;
    }
    a {
        text-decoration: none;
        color:#000;
      }
    NavLink:hover{
        color:#fff;
    }
`;
