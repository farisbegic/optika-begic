import React from 'react';
import {BiPaperPlane} from 'react-icons/bi';
import {
    ContactBox,
    ContactForm,
    ContactLeft, ContactPart, ContactRight, ContactSection,
    FormBox,
    FormHeading,
    FormIcon,
    FormInput,
    FormLabel, InformationSection, InformationText, SendButton
} from "./ContactInformation.elements";
import {ContactHeader} from "./ContactInformation.elements";
import emailjs from 'emailjs-com';

const ContactInformation = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('optikabegic', 'optikabegic', e.target, 'user_aHX0tJAHXHCFkAbUZMFq4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <ContactBox>
            <ContactLeft>
                <ContactHeader>
                    <FormHeading color="black">Send us a message</FormHeading>
                    <FormIcon src="mail-icon.png"/>
                </ContactHeader>
                <ContactForm onSubmit={sendEmail}>
                   <FormBox>
                       <FormBox>
                           <FormLabel placeholder="John Doe">Ime i prezime:</FormLabel>
                           <FormInput type="text" name="client" required/>
                       </FormBox>
                       <FormBox>
                           <FormLabel placeholder="+387">Telefon:</FormLabel>
                           <FormInput type="text" name="phone" required/>
                       </FormBox>
                       <FormBox>
                           <FormLabel placeholder="johndoe@example.com">Email</FormLabel>
                           <FormInput type="email" name="email" required/>
                       </FormBox>
                   </FormBox>
                    <FormBox>
                        <FormBox>
                            <FormLabel>Poruka</FormLabel>
                            <FormInput type="textarea" name="message" required/>
                        </FormBox>
                        <SendButton type="submit" value="Send"><BiPaperPlane size="22px" color="#fff"/></SendButton>
                    </FormBox>
                </ContactForm>
            </ContactLeft>

            <ContactRight>
                <FormHeading color="white">Contact Information</FormHeading>
                <ContactSection>
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
                </ContactSection>
            </ContactRight>

        </ContactBox>
    );
};

export default ContactInformation;