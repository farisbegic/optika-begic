import React from 'react';
import Footer from "../../components/partials/Footer/Footer";
import Navbar from "../../components/partials/Navbar/Navbar";
import {
    HeroContainer,
    HeroImage,
    HeroTextContainer, NumberContainer, NumbersSection, NumbersText
} from "../../components/Home/Hero/Hero.elements";
import {
    ProductsDescription,
    ProductsHeader,
    ProductsHeroImage,
    ProductsInformation
} from "../../components/Products/Hero/Hero.elements";
import Categories from "../../components/Products/Categories/Categories";
import MetaData from "../../components/seo-meta";

const Index = () => {
    return (
        <>
            <MetaData
                path='/products'
                title='Produkti'
                description="Officijelna stranica Optika Begić"
                image='/logo.png'
            />
            <Navbar color="black" />
            <HeroContainer>
                <ProductsInformation>
                    <HeroTextContainer>
                        <ProductsHeader>PRETRAZITE NASE</ProductsHeader>
                        <ProductsHeader>PROIZVODE</ProductsHeader>
                        <ProductsDescription>Nađite nešto lijepo za sebe.</ProductsDescription>
                    </HeroTextContainer>
                </ProductsInformation>
                <ProductsHeroImage src="products-hero.svg"/>
            </HeroContainer>
            <Categories />
            <Footer />
        </>
    );
};

export default Index;