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
import Link from "next/link";

const ProductList = () => {
    const router = useRouter();
    const {category} = router.query;
    console.log(category);
    var productList = products.filter((product) => product.slug === category);
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
                            <Link href={`/products/${productList[0].slug}/${product.model}`} key={product.id} passHref>
                                <ProductCard>
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
                            </Link>
                        );
                    })
                }
            </ProductsContainer>
        </ProductListContainer>
    );
};

export default ProductList;