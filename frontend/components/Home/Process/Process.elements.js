import styled from "styled-components";
import {FlexContainer, FlexSection, Header} from "../../globalStyles";

export const ProcessContainer = styled(FlexContainer)`
  margin-top: 120px;
  flex-direction: column;
  align-items: center;
`;

export const ProcessHeader = styled(Header)`
  @media screen and (max-width: 1100px) {
    font-size: 40px;
  }

  @media screen and (max-width: 700px) {
    font-size: 30px;
    text-align: center;
  }
`;

export const ProcessStep = styled(FlexSection)`
  width: 30%;
  margin: 10px 0;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 850px) {
    padding: 40px 10px;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
  }
`;

export const ProcessSection = styled(FlexSection)`
  padding: 80px 30px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 700px) {
    padding: 20px 30px;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const ProcessImage = styled.img`
  height: 100px;
  
  @media screen and (max-width: 850px) {
    height: 80px;
  }

  @media screen and (max-width: 700px) {
    height: 130px;
  }
`;

export const ProcessTitle = styled.h3`
  padding: 15px 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--black);

  @media screen and (max-width: 850px) {
    font-size: 24px;
  }

  @media screen and (max-width: 700px) {
    font-size: 30px;
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

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const ProcessTransition = styled.img`
  width: 150px;
  
  @media screen and (max-width: 1400px){
    display: none;
  }
`;