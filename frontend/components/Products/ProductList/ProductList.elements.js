import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const ProductListContainer = styled(FlexContainer)`
  margin: 40px 0;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductHeading = styled.h2`
  font-size: 33px;
  font-weight: 800;
  color: var(--black);
  text-align: center;
  text-transform: uppercase;
`;

export const SearchContainer = styled(FlexSection)`
  margin: 80px 0;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 15px 10px;
  outline: none;
  width: 100%;
`;

export const ProductsContainer = styled(FlexSection)`
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(4,300px);
  justify-content: space-between;
  @media screen and (max-width: 1540px){
    grid-template-columns: repeat(3,300px);
    justify-content: space-between;
  }
  @media screen and (max-width: 1350px){
    grid-template-columns: repeat(3,300px);
    justify-content: space-between;
  }
  @media screen and (max-width: 1230px){
    grid-template-columns: repeat(2,300px);
    justify-content: space-evenly;
  }
  @media screen and (max-width: 890px){
    grid-template-columns: repeat(1,280px);
    justify-content: center;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.2);
  border-radius: 8px;
  padding: 55px 20px;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 200px;
  object-fit: fill;
`;

export const ImageCircle = styled.div`
  background-color: ${props => props.filled ? "var(--orange)" : "var(--white)"};
  border: ${props => props.filled ? "none" : "2px solid var(--orange)"};
  border-radius: 100%;
  height: 15px;
  width: 15px;
  margin: 5px 10px;
`;

export const CircleSection = styled(FlexSection)`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

export const ProductInformation = styled(FlexSection)`
  flex-direction: column;
  padding: 40px 0 0 0;
`;

export const ProductBrand = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: var(--orange);
  text-align: center;
`;

export const ProductCypher = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: rgba(198, 197, 197, 1);
  text-align: center;
`;