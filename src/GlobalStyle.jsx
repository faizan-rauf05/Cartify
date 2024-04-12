import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
html,body
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}    
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
        --light-grey:#f5f5f5;
    }
    a {
        text-decoration: none;
        color:#000;
      }
    NavLink:hover{
        color:#fff;
    }
    h3{
        font-weight:500;
    }
    .round-buttons{
        width: 30px;
        height: 30px;
        background-color: var(--light-grey);
        border: 1px solid #000;
        margin-left: 1rem;
        cursor: pointer;
        border-radius: 50%;
        border: none;
    }

    @media only screen and (max-width:450px){
        .container{
            max-width:350px;
            // border:1px solid red;
        }
    }
`;
