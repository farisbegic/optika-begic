import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const CategoriesContainer = styled(FlexContainer)`
  margin: 80px 0;
  display: grid;
  grid-template-columns: repeat(3,400px);
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
  justify-content: center;
  height: 300px;
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.2);
  margin: 30px 0;
`;

export const CategoryTitle = styled.h4`
  cursor: pointer;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  color: var(--black);
  text-transform: uppercase;
`;