import React, {useEffect} from 'react';
import Navbar from "../components/partials/Navbar/Navbar";
import Footer from "../components/partials/Footer/Footer";
import {HeroSection} from "../components/Contact/Hero/Hero.elements";
import ContactDetails from "../components/Contact/ContactDetails/ContactDetails";
import ContactInformation from "../components/Contact/ContactInformation/ContactInformation";
import MetaData from "../components/seo-meta";
import ReactGA from "react-ga";

const Contact = () => {
    useEffect(() => {
        ReactGA.initialize('G-C9C8483KXW');
        ReactGA.pageview('/')
    }, [])
    return (
        <>
            <MetaData
                path='/contact'
                title='Kontakt'
                description="Officijelna stranica Optika Begić"
                image='/logo.png'
            />
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