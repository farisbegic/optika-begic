import React, {useEffect} from 'react';
import Navbar from "../../../components/partials/Navbar/Navbar";
import ProductList from "../../../components/Products/ProductList/ProductList";
import Footer from "../../../components/partials/Footer/Footer";
import {useRouter} from "next/router";
import {products} from "../../../data/products";
import Image from "next/image";
import {NotFoundContainer} from "../../../components/globalStyles";
import MetaData from "../../../components/seo-meta";
import ReactGA from "react-ga";

const Index = () => {
    const router = useRouter();
    const {category} = router.query;
    var productList = products.filter((product) => product.slug === category);

    useEffect(() => {
        ReactGA.initialize('G-C9C8483KXW');
        ReactGA.pageview(`/products/${category}`);
    }, [category]);

    return (
        <>
            <MetaData
                path='/products'
                title='Produkti'
                description="Officijelna stranica Optika Begić"
                image='/logo.png'
            />
            <Navbar color="black" />
            {
                productList[0] ? (
                    <ProductList products={productList[0]}/>
                ) : <NotFoundContainer><Image src="/notfound.svg" height="300px" width="300px"/></NotFoundContainer>
            }
            <Footer />
        </>
    );
};

export default Index;