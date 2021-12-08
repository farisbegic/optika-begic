import React from 'react';
import {BrandList, BrandLogo, BrandsContainer} from "./Brands.elements";
import {Line} from "../../globalStyles";

const Brands = () => {
    return (
        <BrandsContainer>
         <Line />
            <BrandList>
                <BrandLogo src="ray-ban.png" alt="brand"/>
                <BrandLogo src="prada.png" alt="brand"/>
                <BrandLogo src="tom-ford.png" alt="brand"/>
                <BrandLogo src="dolce-gabbana.png" alt="brand"/>
            </BrandList>
         <Line />
        </BrandsContainer>
    );
};

export default Brands;