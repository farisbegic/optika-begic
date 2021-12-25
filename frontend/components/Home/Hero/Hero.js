import React from 'react';
import {
    HeroButton,
    HeroContainer, HeroDescription,
    HeroImage,
    HeroInformation, HeroTextContainer, NumberContainer,
    NumbersSection, NumbersText
} from "./Hero.elements";
import {Description, Header} from "../../globalStyles";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroInformation>
                <HeroTextContainer>
                    <Header>BESPLATAN PREGLED</Header>
                    <Header>DOKTORA SPECIJALISTE</Header>
                    <HeroDescription>Besplatan pregled doktora specijaliste utorkom od 16:00. Naručite se i provjerite Vaš vid na vrijeme.</HeroDescription>
                    <HeroButton filled href="/products" radius="10px">POGLEDAJTE NAŠU PONUDU</HeroButton>
                </HeroTextContainer>
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
            <HeroImage src="doctor-hero.png"/>
        </HeroContainer>
    );
};

export default Hero;