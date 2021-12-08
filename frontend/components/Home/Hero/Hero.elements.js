import styled from "styled-components";
import {Button, Description, FlexContainer, FlexSection} from "../../globalStyles";

export const HeroContainer = styled(FlexContainer)`
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
`;

export const HeroInformation = styled(FlexSection)`
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export const HeroImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--light-orange);
  border-radius: 50%;
  height: 400px;
`;

export const HeroDescription = styled(Description)`
  padding-bottom: 30px;
`;

export const HeroImage = styled.img`
  width: 500px;
`;

export const HeroButton = styled(Button)`
  margin: 20px 0;
`;

export const NumberContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NumbersSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumbersText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;