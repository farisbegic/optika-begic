import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const CategoriesContainer = styled(FlexContainer)`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(3,350px);
  justify-content: space-between;
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
    grid-template-columns: repeat(1,350px);
    justify-content: center;
  }
  @media screen and (max-width: 500px){
    grid-template-columns: repeat(1,300px);
    justify-content: center;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  height: 500px;
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.2);
  margin: 30px 0;
  border-radius: 10px;
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
`;

export const CategoryInformation = styled(FlexSection)`
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px){
    height: 80%
  }
`;

export const CategoryTitle = styled.h4`
  font-weight: 600;
  font-size: 30px;
  padding: 10px 40px;
  text-align: center;
  color: var(--black);
  text-transform: uppercase;
  
  
`;

export const CategoryNumber = styled.h4`
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  color: var(--black);
`;