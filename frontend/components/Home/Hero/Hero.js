import React from 'react';
import {
    HeroButton,
    HeroContainer, HeroDescription,
    HeroImage, HeroImageSection,
    HeroInformation, NumberContainer,
    NumbersSection, NumbersText
} from "./Hero.elements";
import {Description, Header} from "../../globalStyles";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroInformation>
                <Header>BESPLATAN PREGLED</Header>
                <Header>DOKTORA SPECIJALISTE</Header>
                <HeroDescription>Besplatan pregled doktora specijaliste utorkom od 16:00. Naručite se i provjerite Vaš vid na vrijeme.</HeroDescription>
                <HeroButton filled href="/">REZERVIŠITE TERMIN</HeroButton>
                <NumberContainer>
                    <NumbersSection>
                        <Header>200+</Header>
                        <NumbersText>
                            <Description>VRSTA</Description>
                            <Description>OKVIRA</Description>
                        </NumbersText>
                    </NumbersSection>
                    <NumbersSection>
                        <Header>1000+</Header>
                        <NumbersText>
                            <Description>ZADOVOLJNIH</Description>
                            <Description>KLIJENATA</Description>
                        </NumbersText>
                    </NumbersSection>
                </NumberContainer>
            </HeroInformation>
            <HeroImageSection>
                <HeroImage src="doctor-hero.png"/>
            </HeroImageSection>
        </HeroContainer>
    );
};

export default Hero;