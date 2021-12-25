import styled from "styled-components";
import {Description, FlexContainer, FlexSection, Header} from "../../globalStyles";

export const ContactDetailsContainer = styled(FlexContainer)`
  justify-content: space-between;
  margin: 50px 0;

  @media screen and (max-width: 450px){
    margin: 0 0 30px 0;
  }
`;

export const ContactDetailsText = styled(FlexSection)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 435px){
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const ContactHeader = styled.h1`
  font-weight: 800;
  font-size: 48px;
  color: var(--white);
  
  @media screen and (max-width: 1200px){
    font-size: 40px;
  }

  @media screen and (max-width: 900px){
    font-size: 30px;
  }

  @media screen and (max-width: 435px){
    font-size: 40px;
  }
`;

export const ContactDescription = styled(Description)`
  color: var(--white);
  width: 80%;

  @media screen and (max-width: 900px){
    font-size: 13px;
    width: 100%;
  }

  @media screen and (max-width: 435px){
    font-size: 16px;
    width: 90%;
  }
`;

export const WorldImage = styled.img`
  width: 500px;

  @media screen and (max-width: 1350px){
    width: 400px;
  }

  @media screen and (max-width: 1050px){
    width: 330px;
  }

  @media screen and (max-width: 850px){
    width: 280px;
  }

  @media screen and (max-width: 600px){
    width: 230px;
  }

  @media screen and (max-width: 475px){
    width: 180px;
  }

  @media screen and (max-width: 435px){
    display: none;
  }
`;