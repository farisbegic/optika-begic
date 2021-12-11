import styled from "styled-components";
import {HeroInformation} from "../../Home/Hero/Hero.elements";

export const ProductsInformation = styled(HeroInformation)`
  @media screen and (max-width: 950px){
    justify-content: center;
  }
`;

export const ProductsHeader = styled.h1`
  font-weight: 800;
  color: var(--black);
  font-size: 70px;
  text-align: center;
  
  @media screen and (max-width: 1255px) {
    font-size: 50px;
  }
`;

export const ProductsDescription = styled.p`
  font-weight: 400;
  color: var(--black);
  font-size: 30px;

  @media screen and (max-width: 1255px) {
    font-size: 20px;
  }
`;