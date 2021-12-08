import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Lato, sans-serif;
    --orange: #F3B618;
    --light-orange: rgba(243, 182, 24, 0.5);
    --black: #000;
    --white: #fff;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  padding: 20px 100px;

  @media screen and (max-width: 1000px){
    padding: 30px 100px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 50px;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 20px;
  }
`;