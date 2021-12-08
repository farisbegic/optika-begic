import styled from "styled-components";
import {Description, FlexContainer, FlexSection} from "../../globalStyles";

export const FooterSection = styled(FlexContainer)`
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterContainer = styled(FlexSection)`
  justify-content: space-between;
  align-items: center;
`;

export const FooterMenu = styled.nav`
  display: flex;
`;

export const Copyright = styled(Description)`
  font-size: 15px;
`
