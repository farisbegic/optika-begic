import styled from "styled-components";
import {FlexContainer} from "../../globalStyles";

export const Nav = styled(FlexContainer)`
  ${FlexContainer};
  align-items: center;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1000px){
    text-align: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${({click}) => (click ? 0 : '100%')};
    transition: all 0.5s ease;
    background: var(--light-orange);
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  font-size: 18px;
  padding: 0 10px;
  color: var(--black);

  @media screen and (max-width: 1000px){
    color: var(--black);
    padding: 30px 0;
    font-size: 25px;
  }

  @media screen and (max-width: 1000px){
    font-size: 18px;
  }
`;

export const Logo = styled.img`
  height: 41px;
  z-index: 1;

  @media screen and (max-width: 600px) {
    height: 30px;
  }
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none;
  z-index: 1;
  @media screen and (max-width: 1000px){
    display: block;
  }
`;