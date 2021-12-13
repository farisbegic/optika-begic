import React from 'react';
import {
    CircleSection, ImageCircle,
    ProductBrand, ProductCard, ProductCypher,
    ProductHeading, ProductImage, ProductInformation,
    ProductListContainer,
    ProductsContainer,
    SearchBar,
    SearchContainer
} from "./ProductList.elements";
import {Button, Card, Header} from "../../globalStyles";
import {useRouter} from "next/router";
import {products} from "../../../data/products";

const ProductList = () => {
    const router = useRouter();
    const {query} = router;
    var productList = products.filter((product) => product.slug === query.slug);
    console.log(productList);
    return (
        <ProductListContainer>
            <ProductHeading>DIOPTRIJSKE NAOČALE</ProductHeading>
            <SearchContainer>
                <SearchBar placeholder="Pretrazi brend ili model.." />
                <Button filled>Pretrazi</ Button>
            </SearchContainer>
            <ProductsContainer>
                {

                    productList[0]?.list.map((product) => {
                        return (
                            <ProductCard key={product.id}>
                                <ProductImage src={product.image}/>
                                <CircleSection>
                                    <ImageCircle filled/>
                                    <ImageCircle />
                                    <ImageCircle />
                                </CircleSection>
                                <ProductInformation>
                                    <ProductBrand>{product.brand}</ProductBrand>
                                    <ProductCypher>{product.model}</ProductCypher>
                                </ProductInformation>
                            </ProductCard>
                        );
                    })
                }
            </ProductsContainer>
        </ProductListContainer>
    );
};

export default ProductList;