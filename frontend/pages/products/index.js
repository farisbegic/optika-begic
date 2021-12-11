import React from 'react';
import Footer from "../../components/partials/Footer/Footer";
import Navbar from "../../components/partials/Navbar/Navbar";
import {
    HeroButton, HeroContainer,
    HeroDescription, HeroImage,
    HeroInformation,
    HeroTextContainer, NumberContainer, NumbersSection, NumbersText
} from "../../components/Home/Hero/Hero.elements";
import {Description, Header} from "../../components/globalStyles";
import {ProductsDescription, ProductsHeader, ProductsInformation} from "../../components/Products/Hero/Hero.elements";
import Categories from "../../components/Products/Categories/Categories";

const Index = () => {
    return (
        <>
            <Navbar color="black" />
            <HeroContainer>
                <ProductsInformation>
                    <HeroTextContainer>
                        <ProductsHeader>PRETRAZITE NASE</ProductsHeader>
                        <ProductsHeader>PROIZVODE</ProductsHeader>
                        <ProductsDescription>Nađite nešto lijepo za sebe.</ProductsDescription>
                    </HeroTextContainer>
                </ProductsInformation>
                <HeroImage src="products-hero.svg"/>
            </HeroContainer>
            <Categories />
            <Footer />
        </>
    );
};

export default Index;