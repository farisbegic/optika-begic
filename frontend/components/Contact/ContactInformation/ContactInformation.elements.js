import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const ContactBox = styled(FlexSection)`
  position: relative;
  top: -50px;
  margin: 0 150px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  padding: 40px 0;

  @media screen and (max-width: 1150px){
    width: 100%;
  }
`;

export const ContactHeader = styled(FlexSection)`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 22px 0;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }
`;

export const FormHeading = styled.h4`
  font-size: 20px;
  padding: 10px 0;
  font-weight: 700;
  color: ${props => props.color};
`;

export const FormIcon = styled.img`
  width: 35px;
`;

export const ContactForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  color: var(--white);
  width: 100%;
  padding: 45px 90px 90px;

  @media screen and (max-width: 550px){
    flex-direction: column;
  }

  @media screen and (max-width: 450px){
    width: auto;
    padding: 0;
  }
`;

export const FormBox = styled(FlexSection)`
  flex-direction: column;
  margin: 0 15px;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  padding: 10px 0;
  color: rgba(0,0,0,0.3);
  font-weight: 500;
`;

export const FormInput = styled.input`
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid #E5E5E5;
  outline: none;
`;

export const SendButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 10px;
  background-color: var(--orange);
  border-radius: 50%;
`;

export const ContactRight = styled(FlexSection)`
  background-color: var(--orange);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;

  @media screen and (max-width: 1150px){
    padding: 30px 0;
    width: 100%;
  }
`;

export const ContactPart = styled(FlexSection)`
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  width: 50%;

  @media screen and (max-width: 1490px){
    width: 80%;
  }
  
  @media screen and (max-width: 1150px){
    width: 50%;
  }

  @media screen and (max-width: 600px){
    width: 90%;
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

  @media screen and (max-width: 1150px){
    font-size: 14px;
  }
`;