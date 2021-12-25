import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const ProductsContainer = styled(FlexContainer)`
  margin: 80px 0;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
  @media screen and (max-width: 530px) {
    flex-direction: column-reverse;
  }
`;

export const ProductImage = styled.img`
  width: 50%;
  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

export const ProductInformation = styled(FlexSection)`
  align-items: flex-start;
  justify-content: space-between;
  width: 40%;

  @media screen and (max-width: 1600px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1475px) {
    width: 50%;
  }
  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

export const InformationContainer = styled(FlexSection)`
  flex-direction: column;
`;

export const ShareContainer = styled(FlexSection)`
  align-items: flex-start;
  flex-direction: column;
  padding: 0 10px;

  @media screen and (max-width: 1600px) {
    flex-direction: row;
    padding: 20px 0;
  }
`;

export const SocialIcon = styled(FlexSection)`
  align-items: center;
  justify-content: center;
  padding: 0 0 5px 0;
  
  @media screen and (max-width: 1600px) {
    padding: 0 5px 0 0;
  }
`;

export const PathLink = styled.div`
  text-decoration: none;
  color: #413A3A;
  font-weight: 400;
  font-size: 17px;
  
  @media screen and (max-width: 730px) {
    font-size: 13px;
  }
`;

export const ProductBrand = styled.h4`
  color: var(--orange);
  font-weight: 800;
  text-transform: uppercase;
  font-size: 55px;

  @media screen and (max-width: 730px) {
    font-size: 40px;
  }
`;

export const ProductDetails = styled.div`
  margin: 40px 0;
`;

export const ProductModel = styled.h6`
  font-weight: 300;
  font-size: 34px;
  color: var(--black);

  @media screen and (max-width: 730px) {
    font-size: 25px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 15px;
  margin: 20px 0;
  font-weight: 300;
  color: var(--black);

  @media screen and (max-width: 730px) {
    font-size: 12px;
  }
`;

export const ProductCategory = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: var(--black);

  @media screen and (max-width: 730px) {
  font-size: 14px;
}
`;

export const ButtonContainer = styled(FlexSection)`
  display: flex;
  width: 100%;
  
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
  @media screen and (max-width: 530px) {
    flex-direction: row;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.6);
  padding: 10px;
  width: 200px;
  margin-right: 30px;

  @media screen and (max-width: 1300px) {
    margin-bottom: 5px;
  }
  @media screen and (max-width: 730px) {
    width: 170px;
  }
  @media screen and (max-width: 530px) {
    margin-right: 5px;
  }
`;

export const ButtonText = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0 10px;
  color: var(--black);
  text-transform: uppercase;

  @media screen and (max-width: 730px) {
    font-size: 15px;
  }
`;