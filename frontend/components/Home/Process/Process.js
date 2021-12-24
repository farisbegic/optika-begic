import React from 'react';
import {
    ProcessContainer,
    ProcessDescription, ProcessHeader,
    ProcessImage,
    ProcessSection,
    ProcessStep,
    ProcessTitle, ProcessTransition
} from "./Process.elements";
import {Header} from "../../globalStyles";

const Process = () => {
    return (
        <ProcessContainer>
            <ProcessHeader>SVE NA JEDNOM MJESTU</ProcessHeader>
            <ProcessSection>
                <ProcessStep>
                    <ProcessImage src="begin.svg" alt="process-step"/>
                    <ProcessTitle>Narudžba</ProcessTitle>
                    <ProcessDescription>Naručite naočale sa željenim okvirom i staklima</ProcessDescription>
                </ProcessStep>
                <ProcessTransition src="line-indicator-first.png" alt="process-line"/>
                <ProcessStep>
                    <ProcessImage src="build.svg" alt="process-step"/>
                    <ProcessTitle>Pravljenje</ProcessTitle>
                    <ProcessDescription>Pravimo naočale po narudžbi.</ProcessDescription>
                </ProcessStep>
                <ProcessTransition src="line-indicator-second.png" alt="process-line"/>
                <ProcessStep>
                    <ProcessImage src="finish.svg" alt="process-step"/>
                    <ProcessTitle>Preuzimanje</ProcessTitle>
                    <ProcessDescription>Preuzimate Vaše naočale za 15 minuta.</ProcessDescription>
                </ProcessStep>
            </ProcessSection>
        </ProcessContainer>
    );
};

export default Process;