import React from 'react';
import Navbar from "../components/partials/Navbar/Navbar";
import Footer from "../components/partials/Footer/Footer";
import {HeroSection} from "../components/Contact/Hero/Hero.elements";
import ContactDetails from "../components/Contact/ContactDetails/ContactDetails";
import ContactInformation from "../components/Contact/ContactInformation/ContactInformation";

const Contact = () => {
    return (
        <>
            <HeroSection>
                <Navbar color="white" />
                <ContactDetails />
                <ContactInformation />
            </HeroSection>
            <Footer />
        </>
    );
};

export default Contact;