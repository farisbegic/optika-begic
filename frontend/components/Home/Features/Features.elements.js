import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const FeaturesContainer = styled(FlexContainer)`
  margin: 40px 0;
  justify-content: space-around;
  align-items: center;
`;

export const FeatureImage = styled.img`
  width: 500px;

  @media screen and (max-width: 1400px) {
    width: 400px;
  }

  @media screen and (max-width: 1400px) {
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