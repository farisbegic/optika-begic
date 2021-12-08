import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const ProcessContainer = styled(FlexContainer)`
  margin: 70px 0;
  flex-direction: column;
  align-items: center;
`;

export const ProcessStep = styled(ProcessContainer)`
    width: 30%;
`;

export const ProcessSection = styled(FlexSection)`
  justify-content: center;
  align-items: center;
`;

export const ProcessImage = styled.img`
  height: 100px;
`;

export const ProcessTitle = styled.h3`
  padding: 15px 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--black);
`;

export const ProcessDescription = styled.h6`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: var(--black);
`;

export const ProcessTransition = styled.img`
  width: 150px;
`;