import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const ContactBox = styled(FlexSection)`
  position: relative;
  margin: 0 150px;
  height: 450px;
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.15);
  
  @media screen and (max-width: 1150px){
    flex-direction: column;
  }

  @media screen and (max-width: 1000px){
    margin: 0 100px;
  }

  @media screen and (max-width: 800px){
    margin: 0 50px;
  }

  @media screen and (max-width: 650px){
    margin: 0 30px;
  }
`;

export const ContactLeft = styled(FlexSection)`
  background-color: var(--white);
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 40px 0;

  @media screen and (max-width: 1150px){
    width: 100%;
  }
`;

export const ContactHeader = styled(FlexSection)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 100px;

  @media screen and (max-width: 600px){
    padding: 22px 50px;
  }
`;

export const FormHeading = styled.h4`
  font-size: 25px;
  width: 100%;
  font-weight: 700;
  color: ${props => props.color};

  @media screen and (max-width: 500px){
    font-size: 20px;
  }
`;

export const FormIcon = styled.img`
  width: 35px;

  @media screen and (max-width: 450px){
    width: 32px;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 22px 100px;
  align-items: flex-start;
  color: var(--white);
  width: 100%;

  @media screen and (max-width: 1450px){
    flex-direction: column;
  }

  @media screen and (max-width: 600px){
    width: 100%;
    padding: 22px 50px;
  }
`;

export const FormBox = styled(FlexSection)`
  flex-direction: column;
  width: 95%;

  @media screen and (max-width: 1450px){
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  font-size: 13px;
  padding: 10px 0;
  color: rgba(0,0,0,0.3);
  font-weight: 500;
`;

export const FormInput = styled.input`
  border: none;
  outline: none;
  padding: 10px 0;
  border-bottom: 1px solid #E5E5E5;
`;

export const SendButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 20px 0;
  background-color: var(--orange);
  border-radius: 50%;
`;

export const ContactRight = styled(FlexSection)`
  background-color: var(--orange);
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 40%;
  padding: 40px 100px;

  @media screen and (max-width: 1450px){
    align-items: flex-start;
    padding: 40px 70px;
  }

  @media screen and (max-width: 1250px){
    padding: 40px;
  }

  @media screen and (max-width: 1150px){
    padding: 30px 100px;
    width: 100%;
  }

  @media screen and (max-width: 600px){
    padding: 30px 50px;
  }
`;

export const ContactSection = styled(FlexSection)`
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 1150px){
    padding: 30px 0;
  }
`;

export const ContactPart = styled(FlexSection)`
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  width: 100%;

  @media screen and (max-width: 1150px){
    justify-content: space-between;
  }
`;

export const InformationSection = styled(FlexSection)`
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
`;

export const InformationText = styled.h5`
  color: var(--white);
  font-size: 17px;
  font-weight: 500;

  @media screen and (max-width: 450px){
    font-size: 14px;
  }
`;