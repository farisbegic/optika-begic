import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const CategoriesContainer = styled(FlexContainer)`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(3,350px);
  justify-content: space-between;
  @media screen and (max-width: 1540px){
    grid-template-columns: repeat(2,325px);
    justify-content: space-evenly;
  }
  @media screen and (max-width: 1200px){
    grid-template-columns: repeat(2,325px);
    justify-content: space-between;
  }
  @media screen and (max-width: 890px){
    grid-template-columns: repeat(1,325px);
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