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
    --light-gray: #35363A;
  }

  ::selection{
    background-color: var(--orange);
    color: #fff;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  padding: 20px 150px;

  @media screen and (max-width: 1000px){
    padding: 30px 100px;
  }

  @media screen and (max-width: 800px) {
    padding: 20px 50px;
  }

  @media screen and (max-width: 650px) {
    padding: 20px 30px;
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
  padding: 15px;
  text-align: center;
  background-color: ${props => props.filled ? "var(--orange)" : "var(--white)"};
  border: ${props => props.filled ? "none" : "1px solid var(--orange)"};
  border-radius: ${props => props.radius ? props.radius : "0"};

  @media screen and (max-width: 1400px){
    font-size: 13px;
  }

  @media screen and (max-width: 1400px){
    padding: 10px 15px;
  }

  @media screen and (max-width: 650px){
    font-size: 10px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid rgba(0,0,0,0.05);
  margin: 10px 0;
`;

export const Header = styled.h1`
  font-weight: 800;
  color: var(--black);
  font-size: 48px;
  
  @media screen and (max-width: 1400px){
    font-size: 40px;
  }

  @media screen and (max-width: 1200px){
    font-size: 25px;
  }

  @media screen and (max-width: 800px){
    font-size: 20px;
  }

  @media screen and (max-width: 500px){
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  color: var(--black);
  font-size: 20px;

  @media screen and (max-width: 1400px){
    font-size: 15px;
  }
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

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: var(--white);
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
`;

export const NotFoundContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 30px;
  margin: 80px 0;
`;