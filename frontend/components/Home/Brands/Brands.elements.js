import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const BrandsContainer = styled(FlexContainer)`
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const BrandList = styled(FlexSection)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const BrandLogo = styled.img`
  width: 90px;
`;
