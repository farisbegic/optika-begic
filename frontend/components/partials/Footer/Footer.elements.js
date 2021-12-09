import styled from "styled-components";
import {Description, FlexContainer, FlexSection} from "../../globalStyles";
import {NavItem} from "../Navbar/Navbar.elements";

export const FooterSection = styled(FlexContainer)`
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterContainer = styled(FlexSection)`
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px){
    justify-content: center;
  }
`;

export const FooterMenu = styled.nav`
  display: flex;

  @media screen and (max-width: 700px){
    display: none;
  }
`;

export const FooterNav = styled(NavItem)`
  @media screen and (max-width: 1000px){
    color: var(--black);
    padding: 10px;
    font-size: 15px;
  }
`;

export const Copyright = styled(Description)`
  font-size: 15px;

  @media screen and (max-width: 700px){
    font-size: 12px;
    text-align: center;
  }
`
