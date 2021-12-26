import styled from "styled-components";
import {FlexContainer, FlexSection} from "../../globalStyles";

export const BrandsContainer = styled(FlexContainer)`
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const BrandList = styled(FlexSection)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const BrandLogo = styled.img`
  width: 110px;
  margin: 0 30px;

  @media screen and (max-width: 750px) {
    width: 70px;
  }
`;
