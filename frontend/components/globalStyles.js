import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Inter, sans-serif;
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

export const FlexSection = styled.div`
  display: flex;
`;

export const Button = styled.a`
  cursor: pointer;
  color: var(--white);
  padding: 15px 0;
  text-align: center;
  width: 200px;
  background-color: ${props => props.filled ? "var(--orange)" : "var(--white)"};
  border: ${props => props.filled ? "none" : "1px solid var(--orange)"};
  border-radius: 10px;
`;

export const Header = styled.h1`
  font-weight: 800;
  color: var(--black);
  font-size: 48px;
`;

export const Description = styled.p`
  font-weight: 400;
  color: var(--black);
  font-size: 20px;
`;

export const SocialMenu = styled.div`
  display: flex;
  @media screen and (max-width: 1000px){
    display: none;
  }
`;

export const SocialItem = styled.a`
  align-items: center;
  justify-content: center;
  background-color: var(--light-orange);
  border-radius: 50%;
  margin: 10px;
  padding: 10px;
  height: 40px;
`;