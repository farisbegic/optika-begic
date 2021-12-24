import styled from "styled-components";
import {FlexContainer, FlexSection, Header} from "../../globalStyles";

export const FeaturesContainer = styled(FlexContainer)`
  margin: 40px 0;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1080px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const FeatureHeader = styled(Header)`
  display: none;
  
  @media screen and (max-width: 1080px) {
    display: block;
    font-size: 40px;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 700px) {
    font-size: 30px;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    padding-bottom: 70px;
  }
`;

export const FeatureImage = styled.img`
  width: 500px;

  @media screen and (max-width: 1300px) {
    width: 400px;
  }

  @media screen and (max-width: 1200px) {
    width: 300px;
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const FeatureCards = styled(FlexSection)`
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const FeatureRow = styled(FlexSection)`
  flex-direction: column;
  padding: 40px;

  @media screen and (max-width: 1400px) {
    padding: 20px;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

export const FeatureIcon = styled.img`
  width: 50px;
`;

export const FeatureTitle = styled.h5`
  color: var(--black);
  font-weight: 600;
  text-align: center;
  font-size: 15px;
  width: 80%;
  padding: 7px 0;
`;