import React, {useEffect} from 'react';
import Navbar from "../components/partials/Navbar/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/partials/Footer/Footer";
import Process from "../components/Home/Process/Process";
import Features from "../components/Home/Features/Features";
import Brands from "../components/Home/Brands/Brands";
import MetaData from "../components/seo-meta";
import ReactGA from 'react-ga';
const Index = () => {
    useEffect(() => {
        ReactGA.initialize('G-XZF6GSLWZ8');
        ReactGA.pageview(window.location.pathname);
    }, [])
    return (
        <>
            <MetaData
                path='/'
                title='Početna'
                description="Officijelna stranica Optika Begić"
                image='/logo.png'
            />
            <Navbar color="black"/>
            <Hero />
            <Process />
            <Features />
            <Brands />
            <Footer />
        </>
    );
};

export default Index;