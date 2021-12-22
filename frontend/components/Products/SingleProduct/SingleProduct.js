import React, {useEffect, useState} from 'react';
import {
    Button,
    ButtonContainer, ButtonText,
    PathLink,
    ProductBrand, ProductCategory, ProductDescription, ProductDetails,
    ProductImage,
    ProductInformation,
    ProductModel,
    ProductsContainer
} from "./SingleProduct.elements";
import {useRouter} from "next/router";
import {products} from "../../../data/products";
import Link from 'next/link';
import {FaShareAlt, FaFacebookMessenger} from 'react-icons/fa';
import Loader from "react-loader-spinner";

const SingleProduct = (prop) => {
    return (
        <ProductsContainer>
            <ProductImage src={prop.product.image} alt="product"/>
            <ProductInformation>
                <PathLink><Link href="/">Home</Link> / <Link href="/products">Products</Link> / <Link href={`/products/${prop.categorySlug}`}>{prop.categoryName}</Link></PathLink>
                <ProductDetails>
                    <ProductBrand>{prop.product.brand}</ProductBrand>
                    <ProductModel>{prop.product.model}</ProductModel>
                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper semper morbi feugiat porta cras feugiat in pellentesque. In quis ultrices dignissim adipiscing cursus euismod curabitur imperdiet congue. Accumsan donec consectetur pharetra, amet cursus sit. Pulvinar duis cras neque aliquet sed cursus aliquam auctor nulla. Fusce augue vitae felis, volutpat. Sem purus turpis blandit viverra.</ProductDescription>
                    <ProductCategory>Category: {prop.categoryName}</ProductCategory>
                </ProductDetails>
                <ButtonContainer>
                    <Button>
                        <FaShareAlt />
                        <ButtonText>SHARE</ButtonText>
                    </Button>
                    <Button>
                        <FaFacebookMessenger />
                        <ButtonText>MESSAGE</ButtonText>
                    </Button>
                </ButtonContainer>
            </ProductInformation>
        </ProductsContainer>
    );
};

export default SingleProduct;