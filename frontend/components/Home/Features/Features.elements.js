import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const FeaturesContainer = styled(FlexContainer)`
  margin: 40px 0;
  justify-content: space-around;
  align-items: center;
`;

export const FeatureImage = styled.img`
  width: 500px;
`;

export const FeatureCards = styled(FlexSection)`
  align-items: center;
  justify-content: center;
`;

export const FeatureRow = styled(FlexSection)`
  flex-direction: column;
  padding: 40px ;
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