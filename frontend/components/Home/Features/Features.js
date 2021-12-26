import React from 'react';
import {
    FeatureCards, FeatureHeader,
    FeatureIcon,
    FeatureImage,
    FeatureRow,
    FeaturesContainer,
    FeatureTitle
} from "./Features.elements";
import {Card} from "../../globalStyles";
import {ProcessHeader} from "../Process/Process.elements";

const Features = () => {
    return (
        <FeaturesContainer>
            <FeatureImage src="feature-image.png" />
            <FeatureHeader>NAŠE USLUGE</FeatureHeader>
            <FeatureCards>
                <FeatureRow>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="leca.png" alt="feature"/>
                        <FeatureTitle>IZRADA KONTAKTNIH LEĆA PO ZELJI</FeatureTitle>
                    </Card>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="zastita.png" alt="feature"/>
                        <FeatureTitle>IZRADA NAOČALA SA ZAŠTITAMA</FeatureTitle>
                    </Card>
                </FeatureRow>
                <FeatureRow>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="progressive-glass.png" alt="feature"/>
                        <FeatureTitle>IZRADA PROGRESIVNIH STAKALA</FeatureTitle>
                    </Card>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="sunglass.png" alt="feature"/>
                        <FeatureTitle>IZRADA SUNČANIH STAKALA S DIOPTRIJOM</FeatureTitle>
                    </Card>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="glasses.png" alt="feature"/>
                        <FeatureTitle>IZRADA DIOPTRIJSKIH NAOČALA</FeatureTitle>
                    </Card>
                </FeatureRow>
            </FeatureCards>
        </FeaturesContainer>
    );
};

export default Features;