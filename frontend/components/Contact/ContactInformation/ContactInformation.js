import React from 'react';
import {BiPaperPlane} from 'react-icons/bi';

import {
    ContactBox,
    ContactForm,
    ContactLeft, ContactPart, ContactRight,
    FormBox,
    FormHeading,
    FormIcon,
    FormInput,
    FormLabel, InformationSection, InformationText, SendButton
} from "./ContactInformation.elements";
import {ContactHeader} from "./ContactInformation.elements";

const ContactInformation = () => {
    return (
        <ContactBox>

            <ContactLeft>
                <ContactHeader>
                    <FormHeading color="black">Send us a message</FormHeading>
                    <FormIcon src="mail-icon.png"/>
                </ContactHeader>
                <ContactForm>
                   <FormBox>
                       <FormBox>
                           <FormLabel placeholder="John Doe">Ime i prezime:</FormLabel>
                           <FormInput type="text" required/>
                       </FormBox>
                       <FormBox>
                           <FormLabel placeholder="+387">Telefon:</FormLabel>
                           <FormInput type="text" required/>
                       </FormBox>
                       <FormBox>
                           <FormLabel placeholder="johndoe@example.com">Email</FormLabel>
                           <FormInput type="email" required/>
                       </FormBox>
                   </FormBox>
                    <FormBox>
                        <FormBox>
                            <FormLabel>Poruka</FormLabel>
                            <FormInput type="text" required/>
                        </FormBox>
                        <SendButton><BiPaperPlane size="22px" color="#fff"/></SendButton>
                    </FormBox>
                </ContactForm>
            </ContactLeft>

            <ContactRight>
                <FormHeading color="white">Contact information</FormHeading>
                <ContactPart>
                    <FormIcon src="location.png"/>
                    <InformationSection>
                        <InformationText>126. Ilijaške brigade 11</InformationText>
                        <InformationText>Ilijaš, 71380</InformationText>
                    </InformationSection>
                </ContactPart>
                <ContactPart>
                    <FormIcon src="time.png"/>
                    <InformationSection>
                        <InformationText>Pon - Pet: 10:00 - 17:00</InformationText>
                        <InformationText>Sub: 10:00 - 14:00</InformationText>
                    </InformationSection>
                </ContactPart>
                <ContactPart>
                    <FormIcon src="phone.png"/>
                    <InformationSection>
                        <InformationText>+387 61 400 789</InformationText>
                    </InformationSection>
                </ContactPart>
                <ContactPart>
                    <FormIcon src="location.png"/>
                    <InformationSection>
                        <InformationText>126. Ilijaške brigade 11</InformationText>
                        <InformationText>Ilijaš, 71380</InformationText>
                    </InformationSection>
                </ContactPart>
            </ContactRight>

        </ContactBox>
    );
};

export default ContactInformation;