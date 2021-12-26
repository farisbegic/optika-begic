import React from 'react';
import {BrandList, BrandLogo, BrandsContainer} from "./Brands.elements";
import {Line} from "../../globalStyles";

const Brands = () => {
    return (
        <BrandsContainer>
         <Line />
            <BrandList>
                <BrandLogo src="/brands/ray-ban.png" alt="brand"/>
                <BrandLogo src="/brands/prada.png" alt="brand"/>
                <BrandLogo src="/brands/tom-ford.png" alt="brand"/>
                <BrandLogo src="/brands/dolce-gabbana.png" alt="brand"/>
                <BrandLogo src="/brands/ax.png" alt="brand"/>
                <BrandLogo src="/brands/carrera.png" alt="brand"/>
                <BrandLogo src="/brands/ea.png" alt="brand"/>
                <BrandLogo src="/brands/mexx.jpg" alt="brand"/>
            </BrandList>
         <Line />
        </BrandsContainer>
    );
};

export default Brands;