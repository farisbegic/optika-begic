import styled from "styled-components";
import {HeroImage, HeroInformation} from "../../Home/Hero/Hero.elements";

export const ProductsInformation = styled(HeroInformation)`
  @media screen and (max-width: 950px){
    justify-content: center;
  }
`;

export const ProductsHeader = styled.h1`
  font-weight: 800;
  color: var(--black);
  font-size: 70px;

  @media screen and (max-width: 1200px) {
    font-size: 60px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 40px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: block;
    font-size: 45px;
  }
`;

export const ProductsHeroImage = styled(HeroImage)`
  @media screen and (max-width: 640px) {
   width: 350px;
  }
`;

export const ProductsDescription = styled.p`
  font-weight: 400;
  color: var(--black);
  font-size: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;