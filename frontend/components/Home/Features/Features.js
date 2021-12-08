import React from 'react';
import {
    FeatureCards,
    FeatureIcon,
    FeatureImage,
    FeatureRow,
    FeaturesContainer,
    FeatureTitle
} from "./Features.elements";
import {Card} from "../../globalStyles";

const Features = () => {
    return (
        <FeaturesContainer>
            <FeatureImage src="feature-image.png" />
            <FeatureCards>
                <FeatureRow>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="leca.png"/>
                        <FeatureTitle>IZRADA KONTAKTNIH LEĆA PO ZELJI</FeatureTitle>
                    </Card>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="zastita.png"/>
                        <FeatureTitle>IZRADA NAOČALA SA ZAŠTITAMA</FeatureTitle>
                    </Card>
                </FeatureRow>
                <FeatureRow>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="progressive-glass.png"/>
                        <FeatureTitle>IZRADA PROGRESIVNIH STAKALA</FeatureTitle>
                    </Card>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="sunglass.png"/>
                        <FeatureTitle>IZRADA SUNČANIH STAKALA S DIOPTRIJOM</FeatureTitle>
                    </Card>
                    <Card height="180px" width="200px" direction="column">
                        <FeatureIcon src="glasses.png"/>
                        <FeatureTitle>IZRADA DIOPTRIJSKIH NAOČALA</FeatureTitle>
                    </Card>
                </FeatureRow>
            </FeatureCards>
        </FeaturesContainer>
    );
};

export default Features;