import styled from "styled-components";
import {Button, Description, FlexContainer, FlexSection} from "../../globalStyles";

export const HeroContainer = styled(FlexContainer)`
  margin: 80px 0;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 730px){
    margin: 40px 0;
  }

  @media screen and (max-width: 600px){
    margin: 20px 0;
  }
`;

export const HeroInformation = styled(FlexSection)`
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media screen and (max-width: 950px){
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const HeroDescription = styled(Description)`
  padding-bottom: 30px;

  @media screen and (max-width: 1400px){
    font-size: 12px;
  }
  
  @media screen and (max-width: 600px){
    text-align: center;
    padding: 10px 20px;
  }
`;

export const HeroImage = styled.img`
  width: 500px;

  @media screen and (max-width: 1400px){
    width: 400px;
  }

  @media screen and (max-width: 1100px){
    width: 300px;
  }

  @media screen and (max-width: 950px){
    display: none;
  }
`;

export const HeroButton = styled(Button)`
  margin-bottom: 20px;
`;

export const HeroTextContainer = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const NumberContainer = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 950px){
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 600px){
    margin: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
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

  @media screen and (max-width: 1400px){
    padding: 5px;
  }
`;