import React, {useEffect} from 'react';
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
import { SideBySideMagnifier } from "react-image-magnifiers";

const SingleProduct = () => {
    const router = useRouter();
    const slug = router.query;
    const productList = products.filter((category) => category.slug === slug.category);
    const product = productList[0]?.list?.filter((product) => product.model === slug.product);

    return (
        <ProductsContainer>
            <ProductImage src={product[0]?.image} />
            <ProductInformation>
                <PathLink><Link href="/">Home</Link> / <Link href="/products">Products</Link> / <Link href={`/products/${slug?.category}`}>{productList[0]?.name}</Link>  / <Link href={`/products/${slug?.category}/${slug?.product}`}>{slug?.product}</Link></PathLink>
                <ProductDetails>
                    <ProductBrand>{product[0]?.brand}</ProductBrand>
                    <ProductModel>{product[0]?.model}</ProductModel>
                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper semper morbi feugiat porta cras feugiat in pellentesque. In quis ultrices dignissim adipiscing cursus euismod curabitur imperdiet congue. Accumsan donec consectetur pharetra, amet cursus sit. Pulvinar duis cras neque aliquet sed cursus aliquam auctor nulla. Fusce augue vitae felis, volutpat. Sem purus turpis blandit viverra.</ProductDescription>
                    <ProductCategory>Category: {productList[0]?.name}</ProductCategory>
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