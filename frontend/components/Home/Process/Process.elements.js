import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const ProcessContainer = styled(FlexContainer)`
  margin: 70px 0;
  flex-direction: column;
  align-items: center;
`;

export const ProcessStep = styled(FlexSection)`
  padding: 80px 50px;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 850px) {
    padding: 70px 10px;
  }

  @media screen and (max-width: 850px) {
    padding: 20px 50px;
  }
`;

export const ProcessSection = styled(FlexSection)`
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProcessImage = styled.img`
  height: 100px;
  
  @media screen and (max-width: 850px) {
    height: 70px;
  }
`;

export const ProcessTitle = styled.h3`
  padding: 15px 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--black);

  @media screen and (max-width: 850px) {
    font-size: 15px;
  }
`;

export const ProcessDescription = styled.h6`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: var(--black);

  @media screen and (max-width: 850px) {
    font-size: 12px;
  }
`;

export const ProcessTransition = styled.img`
  width: 150px;
  
  @media screen and (max-width: 1400px){
    display: none;
  }
`;