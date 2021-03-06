import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const ProductListContainer = styled(FlexContainer)`
  margin: 10px 0;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ProductHeader = styled(FlexSection)`
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ProductHeading = styled.h2`
  font-size: 33px;
  font-weight: 800;
  color: var(--black);
  text-align: center;
  text-transform: uppercase;
  
  @media screen and (max-width: 730px) {
    font-size: 26px;
  }

  @media screen and (max-width: 550px) {
    padding-bottom: 10px;
  }
`;

export const SearchContainer = styled(FlexSection)`
  margin: 50px 0;
  justify-content: center;
  align-items: flex-start;
`;

export const SearchSection = styled(FlexSection)`
  flex-direction: column;
  width: 100%;
`;

export const SearchBar = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 15px 10px;
  outline: none;
  width: 100%;
  border-radius: 5px 0 0 5px;
`;

export const ResultsContainer = styled(FlexSection)`
  max-height: 150px;
  overflow: auto;
  margin: 5px 0;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  justify-content: space-between;
`;

export const SearchResult = styled(FlexSection)`
  cursor: pointer;
  justify-content: space-between;
  padding: 10px 15px;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const SearchResultText = styled.p`
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 17px;
`;

export const SearchResultImage = styled.img`
  width: 50px;
`;

export const ProductsContainer = styled(FlexSection)`
  display: grid;
  grid-template-columns: repeat(4,300px);
  justify-content: space-between;
  @media screen and (max-width: 1540px){
    grid-template-columns: repeat(3,300px);
  }
  @media screen and (max-width: 1350px){
    grid-template-columns: repeat(3,300px);
  }
  @media screen and (max-width: 1230px){
    grid-template-columns: repeat(2,300px);
  }
  @media screen and (max-width: 830px){
    grid-template-columns: repeat(2,260px);
  }
  @media screen and (max-width: 660px){
    grid-template-columns: repeat(2,250px);
  }
  @media screen and (max-width: 590px){
    grid-template-columns: repeat(2,200px);
  }
  @media screen and (max-width: 470px){
    grid-template-columns: repeat(2,160px);
  }
  @media screen and (max-width: 380px){
    grid-template-columns: repeat(2,140px);
  }
  @media screen and (max-width: 330px){
    grid-template-columns: repeat(1,100%);
    justify-content: center;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 0;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: 0 10px 20px rgba(41, 41, 42, 0.07);
  border-radius: 8px;
  padding: 35px 20px;

  &:hover {
    box-shadow: 0 10px 20px rgba(41, 41, 42, 0.3);
    transform: scale(1.02);
    transition: 0.3s linear;
  }
  @media screen and (max-width: 660px){
    padding: 35px 20px;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  object-fit: fill;

  @media screen and (max-width: 660px){
    width: 170px;
  }
  @media screen and (max-width: 590px){
    width: 120px;
  }
  @media screen and (max-width: 470px){
    width: 100px;
  }
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
  width: 100%;
  padding-top: 30px;
`;

export const MoreButton = styled.p`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 800;
  color: var(--light-orange);
  text-align: center;
`;

export const ProductBrand = styled.h4`
  font-size: 30px;
  font-weight: 700;
  color: var(--light-gray);
  text-align: center;
  text-transform: uppercase;

  @media screen and (max-width: 1000px){
    font-size: 25px;
  }

  @media screen and (max-width: 660px){
    font-size: 20px;
  }

  @media screen and (max-width: 500px){
    font-size: 17px;
  }

  @media screen and (max-width: 330px){
    font-size: 22px;
  }
`;

export const ProductModel = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: rgba(198, 197, 197, 1);
  text-align: center;

  @media screen and (max-width: 660px){
    font-size: 14px;
  }
  @media screen and (max-width: 400px){
    font-size: 12px;
    font-weight: 300;
  }
  @media screen and (max-width: 330px){
    font-size: 15px;
  }
`;

export const ProductButton = styled.p`
  font-size: 12px;
  color: var(--orange);
  background-color: var(--white);
  font-weight: 600;
  border: 1px solid var(--orange);
  border-radius: 10px;
  text-align: center;
  padding: 5px;
  margin-top: 20px;
  cursor: pointer;
  
  &:hover {
    background-color: var(--orange);
    color: var(--white);
    transition: all 0.5s linear;
  }

  @media screen and (max-width: 470px){
    font-size: 10px;
  }
  @media screen and (max-width: 330px){
    font-size: 13px;
  }
`;