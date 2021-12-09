import React from 'react';
import {
    ContactDescription,
    ContactDetailsContainer,
    ContactDetailsText,
    ContactHeader, WorldImage
} from "./ContactDetails.elements";

const ContactDetails = () => {
    return (
        <ContactDetailsContainer>
            <ContactDetailsText>
                <ContactHeader>Contact Us</ContactHeader>
                <ContactDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada fringilla dolor id sapien, eu pretium.</ContactDescription>
            </ContactDetailsText>
            <WorldImage src="map.png"/>
        </ContactDetailsContainer>
    );
};

export default ContactDetails;