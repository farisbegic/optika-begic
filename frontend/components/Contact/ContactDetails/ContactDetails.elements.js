import styled from "styled-components";
import {Description, FlexContainer, FlexSection, Header} from "../../globalStyles";

export const ContactDetailsContainer = styled(FlexContainer)`
  justify-content: space-between;
  margin: 50px 0;

  @media screen and (max-width: 400px){
    justify-content: center;
  }
`;

export const ContactDetailsText = styled(FlexSection)`
  flex-direction: column;
  align-items: flex-start;
  width: 50%;

  @media screen and (max-width: 435px){
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const ContactHeader = styled(Header)`
  color: var(--white);
  
  @media screen and (max-width: 1350px){
    font-size: 40px;
  }

  @media screen and (max-width: 850px){
    font-size: 30px;
  }
`;

export const ContactDescription = styled(Description)`
  color: var(--white);
  width: 80%;

  @media screen and (max-width: 850px){
    font-size: 13px;
    width: 100%;
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