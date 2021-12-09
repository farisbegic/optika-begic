import React from 'react';
import {HeroSection} from "./Hero.elements";

const Hero = (props) => {
    return (
        <HeroSection>{...props.children}</HeroSection>
    );
};

export default Hero;