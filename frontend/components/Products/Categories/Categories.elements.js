import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const CategoriesContainer = styled(FlexContainer)`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(4,350px);
  justify-content: space-between;
  @media screen and (max-width: 1800px){
    grid-template-columns: repeat(3,325px);
  }
  @media screen and (max-width: 1540px){
    grid-template-columns: repeat(3,325px);
  }
  @media screen and (max-width: 1320px){
    grid-template-columns: repeat(2,350px);
  }
  @media screen and (max-width: 1050px){
    grid-template-columns: repeat(2,300px);
  }
  @media screen and (max-width: 820px){
    grid-template-columns: repeat(2,250px);
  }
  @media screen and (max-width: 820px){
    grid-template-columns: repeat(2,280px);
  }
  @media screen and (max-width: 670px){
    grid-template-columns: repeat(2,250px);
  }
  @media screen and (max-width: 580px){
    grid-template-columns: repeat(1,280px);
    justify-content: center;
  }
  @media screen and (max-width: 580px){
    grid-template-columns: repeat(1,250px);
    justify-content: center;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  margin: 30px 0;
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;

  &:hover {
    box-shadow: 0 10px 20px rgba(41, 41, 42, 0.3);
    transform: scale(1.02);
    transition: 0.3s linear;
  }
`;

export const CategoryImageWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const CategoryImage = styled.img`
  height: 320px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media screen and (max-width: 580px){
    height: 270px;
  }
  @media screen and (max-width: 440px){
    height: 230px;
  }
`;

export const CategoryInformation = styled(FlexSection)`
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  @media screen and (max-width: 500px){
    height: 80%
  }
`;

export const CategoryTitle = styled.h4`
  font-weight: 700;
  font-size: 34px;
  padding: 10px 40px;
  text-align: center;
  color: var(--black);
  text-transform: uppercase;

  @media screen and (max-width: 1050px){
    font-size: 28px;
  }
  @media screen and (max-width: 670px){
    font-size: 24px;
  }
`;

export const CategoryNumber = styled.sup`
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  color: var(--black);

  @media screen and (max-width: 600px){
    font-size: 18px;
  }
`;